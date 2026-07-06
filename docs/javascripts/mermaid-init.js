(function () {
  function isMermaidText(text) {
    var t = (text || "").trim();
    return /^(flowchart|graph|sequenceDiagram|classDiagram|stateDiagram|stateDiagram-v2|erDiagram|journey|gantt|pie|gitGraph|mindmap|timeline|quadrantChart|xychart-beta|block-beta|packet-beta|architecture-beta)\b/.test(t);
  }

  function convertMermaidCodeBlocks() {
    document.querySelectorAll("pre > code").forEach(function (block) {
      var pre = block.parentElement;
      if (!pre || pre.getAttribute("data-mermaid-converted") === "true") return;

      var text = block.textContent || "";
      var className = block.className || "";
      var looksLikeMermaid = className.indexOf("language-mermaid") !== -1 || isMermaidText(text);
      if (!looksLikeMermaid) return;

      var container = document.createElement("div");
      container.className = "mermaid";
      container.textContent = text.trim();
      pre.setAttribute("data-mermaid-converted", "true");
      pre.replaceWith(container);
    });
  }

  function renderMermaidDiagrams() {
    if (!window.mermaid) return;

    convertMermaidCodeBlocks();

    var diagrams = document.querySelectorAll(".mermaid:not([data-processed='true'])");
    if (!diagrams.length) return;

    try {
      mermaid.run({ nodes: diagrams });
    } catch (e) {
      console.error("Mermaid render failed", e);
    }
  }

  function initMermaid() {
    if (!window.mermaid) {
      window.setTimeout(initMermaid, 100);
      return;
    }

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
      window.setTimeout(renderMermaidDiagrams, 0);
    });
  }
})();
