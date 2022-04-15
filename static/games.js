function crazygames() {
	
	window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
				let site = "https://www.crazygames.com"
        let url = site.trim();
		
		window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
	
}

function yandexgames() {

	window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
				let site = "https://yandex.com/games/"
        let url = site.trim();
		
		window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
	
}

function addictinggames() {

		window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
				let site = "https://www.addictinggames.com/"
        let url = site.trim();
		
		window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
	
}