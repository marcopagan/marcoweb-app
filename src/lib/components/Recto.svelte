<script lang="ts">
	import { onMount, type Snippet } from "svelte";
    let { children, id, type, x, y, wdt, hgt }: {children: Snippet, id: string, type: 'perma' | 'live' | 'invalid' | 'transparent', x: number, y: number, wdt: number, hgt: number} = $props();

    onMount(async () => {
		setTimeout(() => {
            const recto = document.getElementById(id);
            if(recto instanceof HTMLElement){
                recto.style.width = '0px';
                recto.style.height = '0px';
            }
        }, 200)
	});
    
</script>


<div id="{id}" class={`recto recto-${type}`} style="transform: translate({x}px, {y}px); width: {wdt.toString()}px; height: {hgt.toString()}px">
    <div class="recto-inside">
        {@render children()}
    </div>
</div>


<style>
    .recto {
        font-family: 'Times New Roman', Times, serif;
        font-size: 1.25rem;
        text-rendering: optimizeSpeed;
        border: 2px solid var(--permaborder);
        background-color: var(--perma);
        border-radius: var(--border-rad);
        padding: .4rem;
        position: absolute;
        line-height: 1.2;
        min-width: fit-content;
        min-height: fit-content;
        letter-spacing: -.01rem;
    }
    .recto-perma{
        border-color: var(--permaborder);
        background-color: var(--perma);
        animation: toperma .4s ease-out 0s 1 alternate;
        transition: all .4s;
    }
    .recto-live{
        border-color: var(--liveborder);
        background-color: var(--live);
    }
    .recto-invalid{
        border-color: var(--invalid);
        background-color: var(--live);
    }
    .recto-transparent{
        border-color: transparent;
        background-color: transparent;
        animation: toperma .4s ease-out 0s 1 alternate;
        transition: all .4s;
    }
</style>
