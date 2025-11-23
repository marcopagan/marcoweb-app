import { themes } from "./colorSchemes";
import type { AppOptions } from "./types/AppOptions";


export const options:AppOptions = $state({
    openOptions: false,
    showBorder: true,
    showGrid: true,
    snapToGrid: true,
    openDrawer: false,
    colorScheme: themes[0]
});