import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
})

async function render() {
  const codeElement = document.getElementById("diagram-code");
  const code = codeElement.innerText;

  // Render the diagram using the Mermaid.js library
  const { svg } = await mermaid.render('mermaid', code);

  const diagramElement = document.getElementById("diagram");
  diagramElement.innerHTML = svg;
  diagramElement.setAttribute('data-processed', 'true');
}

document.getElementById("render").onclick = render;
