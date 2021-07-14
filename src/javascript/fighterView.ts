import { createElement } from './helpers/domHelper'; 
import { IFighter } from './interfaces/IFighter';

export function createFighter(fighter:IFighter, handleClick:Function, selectFighter:Function) {
  const { name, source } = fighter;
  const nameElement = createName(name);
  const imageElement = createImage(source);
  const checkboxElement = createCheckbox(); //source
  const fighterContainer = createElement({ tagName: 'div', className: 'fighter' });
  
  fighterContainer.append(imageElement, nameElement, checkboxElement);

  const preventCheckboxClick = (ev:Event) => ev.stopPropagation();
  const onCheckboxClick = (ev:Event) => selectFighter(ev, fighter);
  const onFighterClick = (ev:Event) => handleClick(ev, fighter);

  fighterContainer.addEventListener('click', onFighterClick, false);
  checkboxElement.addEventListener('change', onCheckboxClick, false);
  checkboxElement.addEventListener('click', preventCheckboxClick , false);

  return fighterContainer;
}

function createName(name:string) {
  const nameElement = createElement({ tagName: 'span', className: 'name' });
  nameElement.innerText = name;

  return nameElement;
}

function createImage(source:string) {
  const attributes = { src: source };
  const imgElement = createElement({ tagName: 'img', className: 'fighter-image', attributes });

  return imgElement;
}

function createCheckbox() {
  const label = createElement({ tagName: 'label', className: 'custom-checkbox' });
  const span = createElement({ tagName: 'span', className: 'checkmark' });
  const attributes = { type: 'checkbox' };
  const checkboxElement = createElement({ tagName: 'input', attributes });

  label.append(checkboxElement, span);
  return label;
}