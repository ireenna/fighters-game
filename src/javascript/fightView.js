import { createImage } from "./fighterView";
import { createElement } from "./helpers/domHelper";
export function viewFight(firstFighter, secondFighter) {
    const fighters = [firstFighter, secondFighter];
    clearWindow('fighters');
    const arena = createElement({ tagName: 'div', className: 'arena' });
    const imageElement1 = createImage(firstFighter.source);
    const imageElement2 = createImage(secondFighter.source);
    arena.append(imageElement1, imageElement2);
    document.getElementById('root')?.appendChild(arena);
}
export function clearWindow(className) {
    var HTMLToClear = document.getElementsByClassName(className);
    HTMLToClear[0].remove();
}
