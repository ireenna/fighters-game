import App from "./app";
import { createImage } from "./fighterView";
import { createElement } from "./helpers/domHelper";
import { IFighterDetails } from "./interfaces/IFighterDetails";

export function viewFight(firstFighter : IFighterDetails, secondFighter : IFighterDetails){
    const fighters: IFighterDetails[] = [firstFighter, secondFighter];
    
    clearWindow('fighters');
    const arena = createElement({ tagName: 'div', className: 'arena' });
    
    const imageElement1 = createImage(firstFighter.source);
    const imageElement2 = createImage(secondFighter.source);

    arena.append(imageElement1, imageElement2);
    document.getElementById('root')?.appendChild(arena);
}

export function clearWindow(className:string){
    var HTMLToClear = document.getElementsByClassName(className);
    HTMLToClear[0].remove();
}