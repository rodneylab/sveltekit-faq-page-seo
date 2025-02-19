<script>
	let {
		datePublished = process.env.VITE_BUILD_TIME,
		dateModified = process.env.VITE_BUILD_TIME,
		seoMetaDescription,
		url,
		language = 'en-GB',
		faqCount,
		title,
	} = $props();

	const schemaOrgWebPage = {
		'@type': ['WebPage', ...(faqCount > 0 ? ['FAQPage'] : [])],
		'@id': `${url}#webpage`,
		url,
		name: title,
		isPartOf: {
			'@id': `${url}/#website`,
		},
		primaryImageOfPage: {
			'@id': `${url}#primaryimage`,
		},
		...(faqCount > 0
			? {
					mainEntity: Array.from({ length: faqCount }, (_, index) => index + 1).map((element) => ({
						'@id': `${url}#question-${element}`,
					})),
				}
			: {}),
		datePublished,
		dateModified,
		description: seoMetaDescription,
		inLanguage: language,
		potentialAction: [
			{
				'@type': 'ReadAction',
				target: [url],
			},
		],
	};
	const schemaOrgArray = [schemaOrgWebPage];
	const schemaOrgObject = {
		'@context': 'https://schema.org',
		'@graph': schemaOrgArray,
	};
	let jsonLdString = JSON.stringify(schemaOrgObject);
	let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={seoMetaDescription} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLdScript}
</svelte:head>
