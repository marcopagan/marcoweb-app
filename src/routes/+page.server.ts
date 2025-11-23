import { snap, STEP } from "$lib/rectolib";
import { getBlocks } from "$lib/sanity/utils";

export async function load() {

    const blocks = await getBlocks();
    //const projects = await getProjects();
    const STARTING_RECTOS = blocks.map((block, index) => {
        const rectoBlock = {
            id: index,
            x: snap(true, STEP*block.x),
            y: snap(true, STEP*block.y),
            wdt: 300,
            hgt: STEP*block.h,
            content: block.content,
            visibility: true
        }
        return rectoBlock
    });

    return { STARTING_RECTOS };
}