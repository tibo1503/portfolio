<script>
      import Button from "../Button.svelte";

      import logo from '$lib/assets/logo.png';
</script>

<nav>
  <a class="logo" href="/">
    <img src="{logo}" alt="">
  </a>
  <div class="menu">
    <a href="/about">À propos de moi</a>
    <div class="dropdown">
      <button>Projets</button>
      <li class="dropdown-content">
        <ul><a href="/project/1">Projet 1</a></ul>
        <ul><a href="/project/2">Projet 2</a></ul>
        <ul><a href="/project/3">Projet 3</a></ul>
      </li>
    </div>
    <a href="https://www.linkedin.com/in/thibault-keller/" target="_blank">Linkdin</a>
    <a href="https://discordapp.com/users/296672206061043712" target="_blank">Discord</a>
  </div>
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

  nav {
    background-color: #1d3040;
    color: #ffffff;

    border-bottom: 2px solid #ffffff;

    padding-left: 64px;

    width: 100%;
    height: 32px;
  }
  
  :global(body.dark-mode) nav {
    background-color: #ffffff;
    color: #1d3040
  }

  .menu > *, nav > * {
    float: left;
  }

  .logo {
    position: absolute;
    top: 0;
    left: 0;

    background-color: inherit;
    border-radius: 0 36px 36px 0;
    height: 64px;

    border: 2px solid #ffffff;
    border-left: none;

    transition: 0.3s;
  }

  .logo img {
    margin: 4px;
    height: calc(64px - 8px);

    transition: 0.3s;
  }

  .logo:hover {
    padding-left: 8px;
  }

  .dropdown {
    overflow: hidden;
  }

  .dropdown button {
    height: 32px;
  }

  .menu a, .dropdown button {
    font-size: 16px;  
    
    border: none;
    outline: none;
    color: inherit;
    padding: 6px 8px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
    display: block;

    text-decoration: none;
  }
  .menu a::after, .dropdown button::after {
    content: '';
    width: 0px;
    height: 1px;
    margin: auto;
    display: block;
    background: #ffffff;
    transition: 300ms;
  }

  .menu a:hover::after, .dropdown:hover button::after {
    width: 100%;
  }
  
  .dropdown-content {
    pointer-events: none;
    opacity: 0%;
    transition: opacity 0.3s;

    display: block;
    position: absolute;
    background-color: #1d3040;
    border-top: 2px solid #ffffff;
    min-width: 160px;
    margin-top: 32px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .dropdown-content ul {
    list-style-type: none;
    margin: 0;
    padding: 0; 
  }
  
  .dropdown-content ul a {
    float: none;
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: center;
  }
  
  .dropdown:hover .dropdown-content {
    pointer-events: all;
    opacity: 100%;
  }

  Button {
    float: right
  }
  </style>