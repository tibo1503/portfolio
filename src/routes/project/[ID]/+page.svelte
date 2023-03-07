<script>
	  /** @type {import('./$types').PageData} */
      export let data;
</script>

<svelte:head>
  <title>Projet: {data.content}</title>
</svelte:head>

<h1>Hello and welcome to my site!</h1>
<a href="/about">About my site</a>
<p>Article: {data.content}</p>