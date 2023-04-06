import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
})


async function render() {
  const codeElement = document.getElementById("diagram-code");
  if (!codeElement) {
    console.error("Failed to load 'diagram-code' element");
    return;
  }

  const code = codeElement.innerText;

  // Render the diagram using the Mermaid.js library
  const { svg } = await mermaid.render('mermaid', code);

  const diagramElement = document.getElementById("diagram");
  if (!diagramElement) {
    console.error("Failed to load 'diagram-code' element");
    return;
  }

  diagramElement.innerHTML = svg;
  diagramElement.setAttribute('data-processed', 'true');
}

const renderElement = document.getElementById("render");
if (!renderElement) {
    console.error("Failed to load 'render' element");
} else {
  renderElement.onclick = render;
}
