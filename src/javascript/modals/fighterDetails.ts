import { createElement } from '../helpers/domHelper';
import { IFighterDetails } from '../interfaces/IFighterDetails';
import { showModal } from './modal';
import { createImage } from '../fighterView';

export function showFighterDetailsModal(fighter:IFighterDetails) {
  const title = 'Fighter info';
  const bodyElement = createFighterDetails(fighter);
  showModal({ title, bodyElement });
}

function createFighterDetails(fighter:IFighterDetails) {
  const { name, health, attack, defense, source} = fighter;

  const fighterDetails = createElement({ tagName: 'div', className: 'modal-body' });
  const nameElement = createElement({ tagName: 'span', className: 'fighter-name' });
  const healthElement = createElement({ tagName: 'span', className: 'fighter-health' });
  const attackElement = createElement({ tagName: 'span', className: 'fighter-attack' });
  const defenseElement = createElement({ tagName: 'span', className: 'fighter-defense' });
  
  // show fighter name, attack, defense, health, image

  nameElement.innerText = name;
  healthElement.innerText = 'health: '+health.toString();
  attackElement.innerText = 'attack: '+attack.toString();
  defenseElement.innerText = 'defense: '+defense.toString();
  const imageElement = createImage(source);
  fighterDetails.append(nameElement, healthElement, attackElement, defenseElement, imageElement);

  return fighterDetails;
}
