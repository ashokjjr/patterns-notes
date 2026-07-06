function renderMermaidDiagrams() {
  if (!window.mermaid) return;

  document.querySelectorAll("pre code.language-mermaid").forEach(function (block) {
    var parent = block.parentElement;
    var container = document.createElement("div");
    container.className = "mermaid";
    container.textContent = block.textContent;
    parent.replaceWith(container);
  });

  var diagrams = document.querySelectorAll(".mermaid:not([data-processed='true'])");
  if (!diagrams.length) return;

  mermaid.run({
    nodes: diagrams
  });
}

function initMermaid() {
  if (!window.mermaid) return;

  mermaid.initialize({
    startOnLoad: false,
    theme: "default",
    securityLevel: "loose"
  });

  renderMermaidDiagrams();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMermaid);
} else {
  initMermaid();
}

if (typeof document$ !== "undefined") {
  document$.subscribe(function () {
    renderMermaidDiagrams();
  });
}
