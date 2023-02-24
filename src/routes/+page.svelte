<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style>
    .hoverable {
        cy: 50;

        r: 50;

        stroke: green;
        stroke-width: 4;

        transition: r 2s, cy 2s;
    }

    .hoverable:hover {
        r: 20;
        cy: 80;
}
</style>

<svg width="130" height="130">
  <circle cx="50" cy="50" r="40" fill="yellow" class="hoverable" />
  <circle cx="70" cy="70" r="40" fill="red" class="hoverable" />

  <a href="/docs/Web/SVG/Element/text">
    <text x="0" y="0" text-anchor="middle">&lt;circle&gt;</text>
  </a>
  
  <polygon points="0,100 50,25 50,75 100,0" fill="black" stroke="white" />
</svg>

<svg width="130" height="130">

    <defs>
      <linearGradient id="myGradient">
        <stop offset="0%"   stop-color="green" />
        <stop offset="100%" stop-color="white" />
      </linearGradient>
    </defs>

    <polygon points="0,100 50,25 50,75 100,0" fill="none" stroke="url(#myGradient)" />
</svg>
