import { createFighter } from './fighterView';
// import { showFighterDetailsModal } from './modals/fighterDetails';
import { createElement } from './helpers/domHelper';
import { fight } from './fight';
// import { showWinnerModal } from './modals/winner';
import { IFighter } from './interfaces/IFighter';

export function createFighters(fighters:IFighter[]) {
  const selectFighterForBattle = createFightersSelector();
  const fighterElements = fighters.map(fighter => createFighter(fighter, showFighterDetails, selectFighterForBattle));
  const fightersContainer = createElement({ tagName: 'div', className: 'fighters' });

  fightersContainer.append(...fighterElements);

  return fightersContainer;
}

const fightersDetailsCache = new Map();

async function showFighterDetails(event : Event, fighter:IFighter) {
  const fullInfo = await getFighterInfo(fighter._id);
  // showFighterDetailsModal(fullInfo);
}

export async function getFighterInfo(fighterId:string) {
  // get fighter form fightersDetailsCache or use getFighterDetails function
}

function createFightersSelector() {
  const selectedFighters = new Map();

  return async function selectFighterForBattle(event:Event & { target: HTMLInputElement }, fighter:IFighter) {
    const fullInfo = await getFighterInfo(fighter._id);

    if (event?.target?.checked) {
      selectedFighters.set(fighter._id, fullInfo);
    } else { 
      selectedFighters.delete(fighter._id);
    }

    if (selectedFighters.size === 2) {
      const winner = fight(selectedFighters.entries().next().value, selectedFighters.entries().next().value);//////
      // showWinnerModal(winner);
    }
  }
}
