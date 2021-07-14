import { createElement } from '../helpers/domHelper';
import { IFighter } from '../interfaces/IFighter';
// import { showModal } from './modal';

// export  function showFighterDetailsModal(fighter) {
//   const title = 'Fighter info';
//   const bodyElement = createFighterDetails(fighter);
//   showModal({ title, bodyElement });
// }

export function createFighterDetails(fighter:IFighter) {
  const { name } = fighter;

  const fighterDetails = createElement({ tagName: 'div', className: 'modal-body' });
  const nameElement = createElement({ tagName: 'span', className: 'fighter-name' });
  
  // show fighter name, attack, defense, health, image

  nameElement.innerText = name;
  fighterDetails.append(nameElement);

  return fighterDetails;
}