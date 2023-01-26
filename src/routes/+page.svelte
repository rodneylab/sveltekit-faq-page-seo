<script>
	import Question from '$lib/components/Question.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import website from '$lib/configuration/website';
	import faqs from '$lib/data/faqs.json';
	import '@fontsource/dm-sans';
	import '$lib/styles/global.css';

	const { siteUrl } = website;
	const title = 'SvelteKit FAQ Page with SEO';
	const url = `${siteUrl}/`;
	const faqCount = faqs.length;
</script>

<SEO
	{url}
	{title}
	{faqCount}
	seoMetaDescription="Demo site for FAQ page using SvelteKit with SchemaOrg FAQ metadata"
/>
<main class="container">
	<div class="content">
		<h1>SvelteKit FAQs</h1>
		<section role="feed">
			{#each faqs as { question, answer }, index}
				<article aria-posinset={index + 1} aria-setsize={faqCount}>
					<Question id={`question-${index + 1}`} {question} {answer} position={index + 1} {url} />
				</article>
			{/each}
		</section>
	</div>
</main>

<style>
	.container {
		display: flex;
		min-height: 100vh;
		width: 100%;
	}

	.content {
		display: flex;
		flex-direction: column;
		margin: var(--spacing-4) var(--spacing-4) var(--spacing-8);
		width: 100%;
	}

	@media (min-width: 768px) {
		.content {
			margin: var(--spacing-8) var(--spacing-20) var(--spacing-12);
		}
	}
</style>
