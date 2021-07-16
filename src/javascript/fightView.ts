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
    const rBar = createHeathBar('right-bar');
    const lBar = createHeathBar('left-bar');
    arena.append(lBar, imageElement1, imageElement2, rBar);
    document.getElementById('root')?.appendChild(arena);
}

function createHeathBar(className:string){
    const hBar = createElement({tagName: 'progress', className:className, attributes:{
        ['min']:'0',
        ['max']:'100',
        ['value']:'100'
    }});
    return hBar;
}

export function changeHealthBar(health:number, bar:string){
    var Bar = document.getElementsByClassName(bar);
    Bar[0].removeAttribute('value');
    Bar[0].setAttribute('value', health.toString());
}

export function clearWindow(className:string){
    var HTMLToClear = document.getElementsByClassName(className);
    HTMLToClear[0].remove();
}