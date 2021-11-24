<script>
  import Question from '$lib/components/Question.svelte';
  import '@fontsource/dm-sans';
  import faqs from '$lib/data/faqs.json';
  import SEO from '$lib/components/SEO.svelte';
  import website from '$lib/configuration/website';

  const { siteUrl } = website;
  const title = 'SvelteKit FAQ Page with SEO';
  const url = `${siteUrl}/`;
</script>

<SEO
  {url}
  {title}
  faqCount={faqs.length}
  seoMetaDescription="Demo site for FAQ page using SvelteKit with SchemaOrg FAQ metadata"
/>
<main class="container">
  <section class="content">
    <h1>SvelteKit FAQs</h1>
    {#each faqs as { question, answer }, index}
      <Question id={`question-${index + 1}`} {question} {answer} position={index + 1} {url} />
    {/each}
  </section>
</main>

<style>
  :global(html) {
    background-image: linear-gradient(
      to bottom right,
      hsl(var(--colour-dark-hue) var(--colour-dark-saturation) var(--colour-dark-luminance)),
      hsl(
        var(--colour-dark-hue) var(--colour-dark-saturation)
          calc(var(--colour-dark-luminance) * 0.8)
      )
    );
    color: hsl(
      var(--colour-light-hue) var(--colour-light-saturation) var(--colour-light-luminance)
    );

    font-family: DM Sans;
  }

  :global(h1) {
    font-size: var(--font-size-7);
    margin-bottom: var(--spacing-0);
  }

  :global(:root) {
    /* paradise pink */
    --colour-brand-hue: 345;
    --colour-brand-saturation: 76%;
    --colour-brand-luminance: 58%;

    /* coral */
    --colour-alt-hue: 14;
    --colour-alt-saturation: 100%;
    --colour-alt-luminance: 70%;

    /* charleston green */
    --colour-dark-hue: 120;
    --colour-dark-saturation: 1%;
    --colour-dark-luminance: 17%;

    /* nickel */
    --colour-mid-hue: 44;
    --colour-mid-saturation: 7%;
    --colour-mid-luminance: 41%;

    /* eggshell */
    --colour-light-hue: 49;
    --colour-light-saturation: 60%;
    --colour-light-luminance: 93%;

    --spacing-px: 0.0625rem;
    --spacing-px-2: 0.125rem;
    --spacing-0: 0;
    --spacing-1: 0.25rem;
    --spacing-2: 0.5rem;
    --spacing-4: 1rem;
    --spacing-6: 1.5rem;
    --spacing-12: 3rem;
    --spacing-20: 5rem;

    --font-size-1: 1rem;
    --font-size-2: 1.25rem;
    --font-size-7: 3.815rem;
    --mobile-font-size-2: 1.125rem;

    --font-weight-medium: 500;

    --line-height-relaxed: 1.75;
  }

  .container {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
    margin: var(--spacing-6) var(--spacing-4);
    width: 100%;
  }

  @media (min-width: 768px) {
    :global(h1) {
      font-size: var(--font-size-7);
    }

    .content {
      margin: var(--spacing-12) var(--spacing-20);
    }
  }
</style>
