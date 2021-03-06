import { createElement } from '../helpers/domHelper';

export function showModal({ title, bodyElement }:{title:string, bodyElement:HTMLElement}) {
  const root = getModalContainer() as HTMLElement;
  const modal = createModal(title, bodyElement); 
  
  root.append(modal);
}

function getModalContainer() {
  return document.getElementById('root');
}

function createModal(title:string, bodyElement:HTMLElement) {
  const layer = createElement({ tagName: 'div', className: 'modal-layer' });
  const modalContainer = createElement({ tagName: 'div', className: 'modal-root' });
  const header = createHeader(title);

  modalContainer.append(header, bodyElement);
  layer.append(modalContainer);

  return layer;
}

function createHeader(title:string) {
  const headerElement = createElement({ tagName: 'div', className: 'modal-header' });
  const titleElement = createElement({ tagName: 'span' });
  const closeButton = createElement({ tagName: 'div', className: 'close-btn' });
  
  titleElement.innerText = title;
  closeButton.innerText = '×';
  closeButton.addEventListener('click', hideModal);
  headerElement.append(title, closeButton);
  
  return headerElement;
}

function hideModal(event:Event) {
  const modal = document.getElementsByClassName('modal-layer')[0];
  modal?.remove();
}