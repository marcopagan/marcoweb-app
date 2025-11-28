<script lang="ts">
  // IMPORT
  import type { RectoType } from "$lib/types/RectoType";
  import { STEP, getCoordinates, convertCoordinates } from "$lib/rectolib";
  import Recto from "$lib/components/Recto.svelte";
  import { options } from "$lib/shared.svelte";
  import type { ColorScheme } from "$lib/types/ColorScheme.js";
  import useLocalStorage from "$lib/store.svelte.js";
  import { browser } from "$app/environment";
  import type { AppOptions } from "$lib/types/AppOptions.js";
  import { onMount } from "svelte";

  // CONSTANTS
  const localOptions = useLocalStorage("options", options);
  const STARTING_RECTOS = [
    {
      id: 0,
      x: 16,
      y: 16,
      wdt: 300,
      hgt: 48,
      visibility: true,
      content:
        "<p><h3>404 Page Not found</h3><a href='https://www.marcopagan.com'>Go back to the homepage</a></p>",
    },
  ];
  // VARIABLES
  let optionsLoaded = $state(false);
  // Windows properties
  let innerWidth = $state(0);
  let innerHeight = $state(0);
  let isDraggable = $state(false);
  // Coordinates
  let m1 = $state({ x: 0, y: 0 });
  let m2 = $state({ x: 0, y: 0 });
  let tempRecto = $state({ x: 0, y: 0, wdt: 0, hgt: 0 });
  // Recto params
  let liveIsValid = $state(false);
  let counterId = $state(0);
  let liverecto: RectoType = $state({
    id: 9999,
    x: -100,
    y: -100,
    wdt: 0,
    hgt: 0,
    visibility: true,
  });
  let permarectos: RectoType[] = $state([]);

  // FUNCTIONS
  function handleDown(event: MouseEvent | TouchEvent) {
    isDraggable = true;
    const { x, y } = getCoordinates(event);
    m1 = { x: x, y: y };
    tempRecto = convertCoordinates(m1.x, m1.y, m1.x, m1.y, options.snapToGrid);
    liverecto = { ...liverecto, x: tempRecto.x, y: tempRecto.y };
    if (event instanceof TouchEvent) event.preventDefault();
  }

  function handleMove(event: MouseEvent | TouchEvent) {
    if (isDraggable) {
      const { x, y } = getCoordinates(event);
      m2 = { x: x, y: y };
      tempRecto = convertCoordinates(
        m1.x,
        m1.y,
        m2.x,
        m2.y,
        options.snapToGrid
      );
      liveIsValid = tempRecto.wdt >= STEP && tempRecto.hgt >= STEP * 2;
      liverecto = {
        ...liverecto,
        x: tempRecto.x,
        y: tempRecto.y,
        wdt: tempRecto.wdt,
        hgt: tempRecto.hgt,
      };
      if (event instanceof TouchEvent) event.preventDefault();
    }
  }

  function handleUp(event: MouseEvent | TouchEvent) {
    if (isDraggable) {
      isDraggable = false;
      liverecto = { ...liverecto, x: -100, y: -100, wdt: 0, hgt: 0 };
      if (liveIsValid && counterId < STARTING_RECTOS.length) {
        let tRecto = {
          ...STARTING_RECTOS[counterId],
          x: tempRecto.x,
          y: tempRecto.y,
          wdt: tempRecto.wdt,
          hgt: tempRecto.hgt,
        };
        permarectos.push(tRecto);
        counterId += 1;
      } else if (liveIsValid) {
        // OVERLAP RECTOS
        let index = counterId % STARTING_RECTOS.length;
        let tRecto = {
          ...STARTING_RECTOS[index],
          id: permarectos.length + counterId,
          x: tempRecto.x,
          y: tempRecto.y,
          wdt: tempRecto.wdt,
          hgt: tempRecto.hgt,
        };
        permarectos.push(tRecto);
        counterId += 1;
      }
      m1 = { x: 0, y: 0 };
      m2 = { x: 0, y: 0 };
      liveIsValid = false;
    }
  }
  setTimeout(() => {
    for (let i = 0; i < 1; i++) {
      setTimeout(() => {
        permarectos.push(STARTING_RECTOS[counterId]);
        counterId += 1;
      }, 100 * i);
    }
  }, 500);

  function updateTheme(colorScheme: ColorScheme) {
    for (const [key, value] of Object.entries(colorScheme)) {
      document.documentElement.style.setProperty(`--${key}`, String(value));
    }
  }
  // ONMOUNT
  onMount(() => {
    if (browser) {
      const storedOptionsString = localStorage.getItem("options");
      if (storedOptionsString) {
        const storedOptions: AppOptions = JSON.parse(storedOptionsString);
        options.colorScheme = storedOptions.colorScheme;
        options.showBorder = storedOptions.showBorder;
        options.showGrid = storedOptions.showGrid;
        options.snapToGrid = storedOptions.showGrid;
      }
      optionsLoaded = true;
    }
  });
  // EFFECTS
  $effect(() => updateTheme(options.colorScheme));
  $effect(() => localOptions.set(options));
</script>

<svelte:window bind:innerWidth bind:innerHeight />
{#if optionsLoaded}
  <div
    id="background"
    class={options.showGrid && options.colorScheme.isDark
      ? "bgrid-dark"
      : options.showGrid && !options.colorScheme.isDark
        ? "bgrid-light"
        : ""}
  ></div>

  <div
    id="foreground"
    role="button"
    tabindex="0"
    onmousedown={handleDown}
    onmousemove={handleMove}
    onmouseup={handleUp}
    ontouchstart={handleDown}
    ontouchmove={handleMove}
    ontouchend={handleUp}
  >
    <Recto
      id="r-{liverecto.id}"
      type={liveIsValid ? "live" : "invalid"}
      x={liverecto.x}
      y={liverecto.y}
      wdt={liverecto.wdt}
      hgt={liverecto.hgt}><p style="display: none"></p></Recto
    >

    {#each permarectos as recto}
      <Recto
        id="r-{recto.id}"
        type={options.showBorder ? "perma" : "transparent"}
        x={recto.x}
        y={recto.y}
        wdt={recto.wdt}
        hgt={recto.hgt}
      >
        {@html recto.content}
      </Recto>
    {/each}
  </div>
{/if}

<style>
  ::selection {
    color: unset;
  }
  ::-moz-selection {
    color: unset;
  }
  div:focus {
    outline: none;
  }
</style>
