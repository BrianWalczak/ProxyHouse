function isUrl(val = '') {
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

async function register() {
  if (!navigator.serviceWorker) throw new Error("Your browser doesn't support service workers.");

  await navigator.serviceWorker.register("/uv/sw.js", {
    scope: __uv$config.prefix,
  });
}

async function search() {
    try {
        await register();
    } catch (err) {
        alert("An error occurring when registering the service worker.");
        return console.error(err);
    }
    
    let url = input.value.trim();
    if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
    else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
    
    return url;
}
