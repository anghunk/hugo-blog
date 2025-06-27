var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");

// probe system default dark mode setting
var systemDefault = null
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  systemDefault = "dark";
} else {
  systemDefault = "light";
}

// use user preference if possible
var savedTheme = localStorage.getItem("dark-mode-storage") || systemDefault;
setTheme(savedTheme);

toggle.addEventListener("click", () => {
  if (toggle.src.endsWith("/img/moon.svg")) {
    setTheme("dark");
  } else if (toggle.src.endsWith("/img/sun.svg")) {
    setTheme("light");
  }

});

// change color scheme for giscus
// https://github.com/giscus/giscus/issues/336
function changeGiscusTheme(theme) {
  function sendMessage(message) {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) return;
    iframe.contentWindow.postMessage({
      giscus: message
    }, 'https://giscus.app');
  }
  sendMessage({
    setConfig: {
      theme: theme
    }
  });
}

function setTheme(mode) {
  localStorage.setItem("dark-mode-storage", mode);

  if (mode === "dark") {
    darkTheme.disabled = false;
    toggle.src = "/img/sun.svg";
  } else if (mode === "light") {
    darkTheme.disabled = true;
    toggle.src = "/img/moon.svg";
  }
  changeGiscusTheme(mode);
}

// set giscus theme after giscus has been loaded
function handleGiscusMessage(event) {
  if (event.origin !== 'https://giscus.app') return;
  if (!(typeof event.data === 'object' && event.data.giscus)) return;

  // const giscusData = event.data.giscus;
  setTheme(savedTheme);
  window.removeEventListener('message', handleMessage);
}

window.addEventListener('message', handleGiscusMessage);