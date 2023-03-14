const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

        document.body.innerHTML = ''; //Reset documents contents
        const iframe = document.createElement("iframe");
        iframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);
        iframe.style.position = "fixed";
        iframe.style.top = iframe.style.bottom = iframe.style.left = iframe.style.right = 0;
        iframe.style.border = iframe.style.outline = "none";
        iframe.style.width = iframe.style.height = "100%";
        document.body.appendChild(iframe);
    });
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};
