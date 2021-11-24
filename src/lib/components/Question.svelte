<script>
  export let question;
  export let answer;
  export let position;
  export let id;
  export let url;
  export let language = 'en-GB';

  const schemaOrgQuestionObject = {
    '@context': 'https://schema.org',
    '@type': 'Question',
    '@id': `${url}#${id}`,
    position,
    url: `${url}#${id}`,
    name: question,
    answerCount: 1,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
      inLanguage: language,
    },
    inLanguage: language,
  };
  let jsonLdString = JSON.stringify(schemaOrgQuestionObject);
  let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`;
</script>

<svelte:head>
  {@html jsonLdScript}
</svelte:head>

<section class="container">
  <details {id} class="question">
    <summary class="summary">{question}</summary>
    <div class="answer">
      <p>
        {answer}
      </p>
    </div>
  </details>
</section>

<style>
  .container {
    display: flex;
    background-image: linear-gradient(
      to top left,
      hsl(var(--colour-brand-hue) var(--colour-brand-saturation) var(--colour-brand-luminance)),
      hsl(
        var(--colour-brand-hue) var(--colour-brand-saturation)
          calc(var(--colour-brand-luminance) * 0.95)
      )
    );
    border-radius: var(--spacing-1);
    margin: var(--spacing-6) auto;
    width: 100%;
  }

  .summary {
    padding: var(--spacing-4);
    cursor: pointer;
    font-weight: var(--font-weight-medium);
    font-size: var(--mobile-font-size-2);
  }

  .question {
    display: flex;
    width: 100%;
  }

  .answer {
    background-image: linear-gradient(
      to bottom right,
      hsl(var(--colour-mid-hue) var(--colour-mid-saturation) var(--colour-mid-luminance)),
      hsl(
        var(--colour-mid-hue) var(--colour-mid-saturation) calc(var(--colour-mid-luminance) * 0.8)
      )
    );
    border: solid var(--spacing-px)
      hsl(var(--colour-alt-hue) var(--colour-alt-saturation) var(--colour-alt-luminance));
    border-radius: var(--spacing-px-2);
    margin: var(--spacing-0) var(--spacing-4) var(--spacing-6);
    padding: var(--spacing-0) var(--spacing-4);
    line-height: var(--line-height-relaxed);
  }

  @media (min-width: 768px) {
    .summary {
      font-size: var(--font-size-2);
    }
  }
</style>
