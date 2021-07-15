import App from "../app";
import { createImage } from "../fighterView";
import { clearWindow } from "../fightView";
import { createElement } from "../helpers/domHelper";
import { showModal } from "./modal";
export function showWinnerModal(fighter) {
    // show winner name and image
    const title = `${fighter.name} won!`;
    const bodyElement = createWinnerInfo(fighter);
    showModal({ title, bodyElement });
    startGameAgain();
}
function startGameAgain() {
    clearWindow('arena');
    new App();
}
function createWinnerInfo(fighter) {
    const { source } = fighter;
    const fighterDetails = createElement({ tagName: 'div', className: 'modal-body' });
    const imageElement = createImage(source);
    fighterDetails.append(imageElement);
    return fighterDetails;
}
