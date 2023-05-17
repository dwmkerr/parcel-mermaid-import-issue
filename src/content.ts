import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
})

function safeGetElementById(document: Document, id: string): HTMLElement {
  const element = document.getElementById(id);
  if (!element) throw new Error(`Unable to find element with id '${id}'`);
  return element;
}

async function render() {
  const codeElement = safeGetElementById(document, "diagram-code");
  const code = codeElement.innerText;

  // Render the diagram using the Mermaid.js library
  const { svg } = await mermaid.render('mermaid', code);

  const diagramElement = safeGetElementById(document, "diagram");
  diagramElement.innerHTML = svg;
  diagramElement.setAttribute('data-processed', 'true');
}

safeGetElementById(document, "render").onclick = render;
