<script lang="ts">
	import { themes } from '$lib/colorSchemes';
    import { options } from '$lib/shared.svelte';
</script>

<div style="z-index: 30000;">
    <button onclick={() => (options.openOptions=!options.openOptions)}><span class="mono">OPTIONS</span></button>
    <section class={options.openOptions ? 'mono checkboxes' : 'mono checkboxes hidden'}>
        <label>
	        <input type="checkbox" bind:checked={options.showBorder} class="switch" />
	        SHOW BORDER
        </label>
        <label>
	        <input type="checkbox" bind:checked={options.showGrid} class="switch" />
	        SHOW GRID
        </label>
        <label>
	        <input type="checkbox" bind:checked={options.snapToGrid} class="switch" />
	        SNAP TO GRID
        </label>

        <!--<label>
	        <input type="checkbox" bind:checked={options.openDrawer} class="switch" />
	        OPEN DRAWER
        </label>-->
        <section class="cs-wrapper">
            {#each themes as theme, index}
                <button onclick={() => options.colorScheme=theme} class={(options.colorScheme.themeName == theme.themeName && options.colorScheme.isDark) ? 'cs-active' : (options.colorScheme.themeName == theme.themeName && !options.colorScheme.isDark) ? 'cs-active-light' : ''} style={index == 0 ? "border-radius: .5rem 0 0 .5rem" : index == themes.length -1 ? 'border-radius: 0 .5rem .5rem 0' : ''}>{index+1}</button>
            {/each}
            <span>COLOR SCHEME</span>
        </section>
    </section>
</div>

<style>
    @keyframes expand {
        0% {width: 1rem; height: 0rem; opacity: 0}
        25% {width: 17rem; height: 0rem; opacity: 0}
        75% {width: 18rem; height: 0rem; opacity: 0}
        90% {opacity: 0; padding: 0rem;}
        100% {width: 17rem; height: 7rem; opacity: 1; padding: 0rem .5rem;}
    }

    @keyframes collapse {
        0% {width: 17rem; height: 7rem; opacity: 1; padding: 0rem .5rem;}
        10% {opacity: 0; padding: 0rem;}
        25% {width: 17rem; height: 0rem; opacity: 0}
        75% {width: 17rem; height: 0rem; opacity: 0}
        100% {width: 1rem; height: 0rem; opacity: 0}
    }
    ::selection {color: unset}
	::-moz-selection {color: unset}

    div{
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        background-color: var(--perma);
        border: 2px solid var(--permaborder);
        color:var(--fg);
        border-radius: calc(var(--border-rad) * 2);
        transition: all .3s ease-out;
    }

    button{
        all: unset;
        cursor: pointer;
        background-color: transparent;
        color: var(--liveborder);
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
        border-radius: .3rem;
        width: 100%;
        padding: .25rem;
    }

    label{display: flex; align-items: center; height:1.5rem; gap: .5rem}

    .hidden{display: none}



    /* SWITCHES */
    .checkboxes{
        width: 1rem;
        height: 1rem;
        margin-top: .5rem;
        animation: expand .3s ease-out 0s 1 forwards;
        animation-play-state: running;
    }
    .checkboxes .switch {
        appearance: none;
        background-color: var(--fg);
        border-radius: 1rem;
        border-style: none;
        flex-shrink: 0;
        height: 20px;
        margin: 1px;
        position: relative;
        width: 30px;
    }

    .checkboxes .switch::before {
        bottom: -6px;
        content: "";
        left: -6px;
        position: absolute;
        right: -6px;
        top: -6px;
    }

    .checkboxes .switch,
    .checkboxes .switch::after {
        transition: all .1s ease-out;
    }

    .checkboxes .switch::after {
        background-color: var(--bg);
        border-radius: 5rem;
        content: "";
        height: 14px;
        left: 3px;
        position: absolute;
        top: 3px;
        width: 14px;
    }

    .checkboxes input[type=checkbox] {
        cursor: default;
    }

    .checkboxes .switch:hover {
        background-color: var(--permaborder);
        transition-duration: 0s;
    }

    .checkboxes .switch:checked {
        background-color: var(--liveborder);
    }

    .checkboxes .switch:checked::after {
        background-color: var(--bg);
        left: 13px;
    }

    .checkboxes :focus:not(.focus-visible) {
        outline: 0;
    }

    .checkboxes .switch:checked:hover {
        background-color: var(--permaborder);
    }

    .cs-wrapper{
        padding-top: .25rem;
        display: flex;
        align-items: center;
        span{margin-left: .5rem;}
        button{
            border: 1px solid var(--bg);
            border-radius: 0;
            height: 20px;
            width: fit-content;
            padding: .15rem .45rem;
            font-size: 1rem;
            font-family: 'APL386', monospace;
            background-color: var(--fg);
            color: var(--bg);
            &:hover{ 
                background-color: var(--permaborder);
            }
        }
        .cs-active{
            background-color: var(--liveborder);
        }

        .cs-active-light{
            background-color: var(--liveborder);
            color: var(--fg);
        }
    }
</style>
