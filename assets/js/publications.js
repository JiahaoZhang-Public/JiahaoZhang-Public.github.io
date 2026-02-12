(function () {
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "absolute";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand("copy");
        document.body.removeChild(area);
        resolve();
      } catch (err) {
        document.body.removeChild(area);
        reject(err);
      }
    });
  }

  function bindBibtexButtons() {
    var buttons = document.querySelectorAll(".js-copy-bibtex");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var targetId = button.getAttribute("data-bibtex-id");
        var bibNode = document.getElementById(targetId);
        if (!bibNode) return;
        var bibText = bibNode.textContent || "";
        copyText(bibText).then(function () {
          var original = button.textContent;
          button.textContent = "Copied";
          button.classList.add("is-copied");
          setTimeout(function () {
            button.textContent = original;
            button.classList.remove("is-copied");
          }, 1200);
        });
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindBibtexButtons);
  } else {
    bindBibtexButtons();
  }
})();
