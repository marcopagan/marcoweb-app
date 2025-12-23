<script lang="ts">
  import { STEP } from "$lib/rectolib";
  import { onMount, type Snippet } from "svelte";
  let {
    children,
    id,
    type,
    x,
    y,
    wdt,
    hgt,
  }: {
    children: Snippet;
    id: string;
    type: "perma" | "live" | "invalid" | "transparent";
    x: number;
    y: number;
    wdt: number;
    hgt: number;
  } = $props();

  onMount(async () => {
    setTimeout(() => {
      const recto = document.getElementById(id);
      if (recto instanceof HTMLElement) {
        recto.style.width = "0px";
        recto.style.height = "0px";
      }
    }, 200);
  });
</script>

<div
  {id}
  class={`recto recto-${type}`}
  style="transform: translate({x}px, {y}px); width: {wdt.toString()}px; height: {hgt.toString()}px"
>
  {#if type === "live" || type === "invalid"}
    <span class="recto-numbers">
      {Math.floor(wdt / STEP)}x{Math.floor(hgt / STEP)}</span
    >
  {/if}
  <div class="recto-inside">
    {@render children()}
  </div>
</div>

<style>
  .recto {
    font-family: "TimesNewerRoman", "Times New Roman", Times, serif;
    font-size: var(--m);
    text-rendering: optimizeSpeed;
    border: 2px solid var(--permaborder);
    background-color: var(--perma);
    border-radius: var(--border-rad);
    padding: 0.4rem;
    position: absolute;
    line-height: 1.2;
    min-width: fit-content;
    min-height: fit-content;
    display: table;
    letter-spacing: -0.01rem;
  }
  .recto-perma {
    border-color: var(--permaborder);
    background-color: var(--perma);
    animation: toperma 0.4s ease-out 0s 1 alternate;
    transition: all 0.4s;
  }
  .recto-live {
    border-color: var(--liveborder);
    background-color: var(--live);
    .recto-numbers {
      color: var(--liveborder);
    }
  }
  .recto-invalid {
    border-color: var(--invalid);
    background-color: var(--live);
    .recto-numbers {
      color: var(--invalid);
    }
  }
  .recto-transparent {
    border-color: transparent;
    background-color: transparent;
    animation: toperma 0.4s ease-out 0s 1 alternate;
    transition: all 0.4s;
  }
  .recto-inside {
    max-width: 75vw;
  }
  .recto-numbers {
    position: absolute;
    top: -1.1rem;
    left: -0.05rem;
    font-size: var(--xs);
    font-family: "APL386", monospace;
    text-transform: uppercase;
  }
</style>
