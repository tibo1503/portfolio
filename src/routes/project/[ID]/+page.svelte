<script context="module">
	  import { base } from '$app/paths';
      import Button from "../../../Button.svelte";
      export let data;
</script>

<svelte:head>
  <title>Projet: {data.content}</title>
</svelte:head>

<h1>Hello and welcome to my site!</h1>
<a href="/about">About my site</a>
<p>Article: {data.content}</p>

<Button>
      Toggle
</Button>

<style>
	:global(body) {
		background-color: #ffffff;
		color: #1d3040;
		transition: background-color 0.3s
	}
	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #ffffff;
	}
</style>