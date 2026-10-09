(function () {
  // Paste your AdSense publisher id here, for example "ca-pub-1234567890123456".
  // Leave it empty and the page shows no ad.
  var client = "";
  if (!client) return;
  var script = document.createElement("script");
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + encodeURIComponent(client);
  document.head.appendChild(script);
})();
