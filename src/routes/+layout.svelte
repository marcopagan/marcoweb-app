<script lang="ts">
  let { children } = $props();
  import "../app.css";
  import { options } from "$lib/shared.svelte";
</script>

<svelte:head>
  <link rel="icon" href={`/favicons/${options.colorScheme.themeName}.svg`} />
  <meta name="description" content="Information design / coding" />
  <meta
    name="keywords"
    content="Marco Pagan,design,information design,coding,ui ux,frontend,creative coding"
  />
  <meta name="author" content="Marco Pagan" />
  <link rel="canonical" href="https://marcopagan.com" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Marco Pagan" />
  <meta property="og:description" content="Information design / coding" />
  <meta property="og:url" content="https://marcopagan.com/" />
  <meta property="og:site_name" content="Marco Pagan" />
  <meta property="og:image" content="/pres.jpg" />
  <meta name="apple-mobile-web-app-title" content="Marco Pagan" />
  <meta name="application-name" content="Marco Pagan" />
  <meta name="msapplication-TileColor" content={`${options.colorScheme.bg}`} />
</svelte:head>

{@render children()}
