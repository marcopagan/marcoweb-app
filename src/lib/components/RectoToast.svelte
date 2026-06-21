<script lang="ts">
  import { fly } from "svelte/transition";
  let props = $props();
</script>

<div
  class="recto recto-toast"
  in:fly={{ y: 200, duration: 500 }}
  out:fly={{ x: -200, duration: 500 }}
>
  <div class="recto-inside">
    <p>
      {props.rowOne}
      {#if props.rowTwo}
        <br> {props.rowTwo}
      {/if}
    </p>
  </div>
</div>

<style>
  .recto-toast {
    font-family: "APL386", monospace;
    font-size: .9rem;
    text-rendering: optimizeSpeed;
    letter-spacing: -0.05rem;
    border: 2px solid var(--liveborder);
    background-color: var(--fg);
    color: var(--bg);
    border-radius: var(--border-rad);
    padding: 0.4rem;
    line-height: 1.2;
    min-width: fit-content;
    display: table;
    transition: all 0.4s;
    z-index: 99000;
    position: fixed;
    bottom: var(--s);
    left: var(--s);
    height: var(--s);
  }
</style>
