export function createElement({
  tagName,
  className,
  attributes = {},
}: {
  tagName: string;
  className?: string;
  attributes?: { [key: string]: string };
}) {
  const element = document.createElement(tagName);
  
  if (className) {
    element.classList.add(className);
  }

  Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));

  return element;
}