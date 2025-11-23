<script lang="ts">
	import type { Project } from "$lib/types/Project";
    let { projects }: {projects: Project[]} = $props();
</script>


<div id="drawer">
    <div class="tabs-wrapper">
        <div class="tabs">
            <button class="active">PROJECTS</button>
            <button>CV</button>
        </div>
    </div>
    <h2>Titoletto in H2</h2>

    {#each projects as project}
        <div class="row">
            <h2>{project.title}</h2>
            <h3>{project.year}</h3>
        </div>
    {/each}
    <br>
    <h3>Ecco la prima sezione</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus sit amet risus ornare finibus. Praesent porta felis sit amet suscipit feugiat. Nullam varius venenatis euismod. In varius leo dui, eu consequat dolor porta eu. Curabitur eget nulla ac purus molestie rutrum. Sed placerat facilisis scelerisque. Quisque luctus velit vitae nunc condimentum congue non eu mauris. Pellentesque maximus suscipit aliquam. Duis ut vestibulum nisi.</p>
    <br>
    <h3>Ecco la seconda sezione</h3>
    <p>Vestibulum dapibus egestas volutpat. Phasellus dapibus vel nisi vitae accumsan. Nulla facilisi. Donec eleifend odio vitae placerat tempor. Sed nec felis pretium turpis rhoncus bibendum ut ut felis. Phasellus euismod, erat tempor posuere auctor, ligula diam luctus mauris, nec congue diam augue ac nisl. Pellentesque sed ipsum ac justo vehicula mollis porta id massa.</p>
</div>


<style>
    #drawer{
        position: relative;
        width: calc(100% - 2.5rem);
        height: fit-content;
        padding: .5rem 1rem 1rem 1rem;
        background-color: var(--fg);
        color: var(--bg);
        border-radius: var(--border-rad) var(--border-rad) 0 0;
        text-rendering: optimizeSpeed;
        z-index: 110;
        pointer-events: auto;
        ::selection {color: var(--liveborder); background-color: unset}
        ::-moz-selection {color: var(--liveborder); background-color: unset}
    }


    .tabs-wrapper{width: 100%; display: flex; justify-content: center}
    .tabs{
        border: 2px solid var(--permaborder);
        background-color: var(--permaborder);
        width: fit-content;
        border-radius: .3rem;
        display: flex;
        gap: .2rem;
    }
    button{
        border: none;
        border-radius: .2rem;
        padding: .25rem 2rem;
        background-color: var(--permaborder);
        color: var(--fg);
        font-size: .8rem;
    }
    button:hover{background-color: var(--liveborder); color: var(--permaborder)}
    .active{background-color: var(--fg); color: var(--permaborder)}

    h2{font-weight: normal}
    h3{padding-bottom: .25rem}
    p{font-family: Arial, Helvetica, sans-serif; font-size: 1rem;}

    .row{display: flex;}
</style>
