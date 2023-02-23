function launch(link) {
	
	window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = link.trim();
		
		window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
	
}