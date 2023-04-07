function launch(link) {
	window.navigator.serviceWorker.register('./sw.js', {
		scope: __uv$config.prefix
	}).then(() => {
		let url = link.trim();
		
		document.body.innerHTML = ''; //Reset documents contents
    const iframe = document.createElement("iframe");
    iframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);
    iframe.style.position = "fixed";
    iframe.style.top = iframe.style.bottom = iframe.style.left = iframe.style.right = 0;
    iframe.style.border = iframe.style.outline = "none";
    iframe.style.width = iframe.style.height = "100%";
    document.body.appendChild(iframe);
	});
}