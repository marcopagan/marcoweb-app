<script lang="ts">
  import { fly } from "svelte/transition";
</script>

<div
  class="recto recto-toast"
  in:fly={{ y: 200, duration: 500 }}
  out:fly={{ x: -200, duration: 500 }}
>
  <span class="recto-icon"><i>i</i></span>
  <div class="recto-inside">
    <p>Click and drag on the screen<br />to discover more content</p>
  </div>
</div>

<style>
  .recto-icon {
    font-family: "TimesNewerRoman", Times, serif;
    position: absolute;
    right: -0.8rem;
    top: -0.8rem;
    z-index: 99001;
    border: 2px solid var(--liveborder);
    background-color: var(--fg);
    width: 20px;
    height: 20px;
    border-radius: 100%;
    text-transform: lowercase;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    & i {
      margin-right: 0.1rem;
    }
  }
  .recto-toast {
    font-family: "APL386", monospace;
    font-size: var(--s);
    text-rendering: optimizeSpeed;
    text-transform: uppercase;
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
