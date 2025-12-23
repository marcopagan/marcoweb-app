/* CONSTANTS */
export const STEP = 16;

/* FUNCTIONS */
export function snap(dosnap: boolean, value: number) {
    if (dosnap){
        const cell = Math.round((value - (STEP/2)) / STEP);
        return cell * STEP
    }else{
        return value
    }
}
export function getCoordinates(event: PointerEvent): { x: number; y: number } {
  return { x: event.clientX, y: event.clientY };
}
export function convertCoordinates(x1: number, y1: number, x2: number, y2: number, dosnap:boolean): {x: number, y: number, wdt: number, hgt: number}{
    const wdt = Math.abs(snap(dosnap, x2) - snap(dosnap, x1));
    const hgt = Math.abs(snap(dosnap, y2) - snap(dosnap, y1));
    const x = x2 <= x1 ? snap(dosnap, x2) : snap(dosnap, x1);
    const y = y2 <= y1 ? snap(dosnap, y2) : snap(dosnap, y1);
    return { x, y, wdt, hgt}
}