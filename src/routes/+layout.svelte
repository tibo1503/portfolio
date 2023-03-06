<script>
      import Button from "../Button.svelte";
</script>

<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>

  <Button></Button>
</nav>

<slot />

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