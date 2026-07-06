document.addEventListener("DOMContentLoaded", function () {
  if (!window.mermaid) return;

  document.querySelectorAll("pre code.language-mermaid").forEach(function (block) {
    var parent = block.parentElement;
    var container = document.createElement("div");
    container.className = "mermaid";
    container.textContent = block.textContent;
    parent.replaceWith(container);
  });

  mermaid.initialize({
    startOnLoad: true,
    theme: "default",
    securityLevel: "loose"
  });
});
