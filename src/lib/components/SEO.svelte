<script>
	export let datePublished = process.env.VITE_BUILD_TIME;
	export let dateModified = process.env.VITE_BUILD_TIME;
	export let seoMetaDescription;
	export let url;
	export let language = 'en-GB';
	export let faqCount;
	export let title;

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
	<html lang="en-GB" />
	<meta name="description" content={seoMetaDescription} />
	{@html jsonLdScript}
</svelte:head>
