function launch(link) {
	window.navigator.serviceWorker.register('./sw.js', {
		scope: __uv$config.prefix
	}).then(() => {
		let url = link.trim();

		if(getSetting("cloak_mode") == false) {
			document.body.innerHTML = ''; //Reset documents contents
    	const iframe = document.createElement("iframe");
    	iframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);
    	iframe.style.position = "fixed";
    	iframe.style.top = iframe.style.bottom = iframe.style.left = iframe.style.right = 0;
    	iframe.style.border = iframe.style.outline = "none";
    	iframe.style.width = iframe.style.height = "100%";
    	document.body.appendChild(iframe);
		}else{
			win = window.open();
			win.document.body.style.margin = '0';
      win.document.body.style.height = '100vh';
      var iframe = win.document.createElement('iframe');
      iframe.style.border = 'none';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.margin = '0';
      iframe.src = location.protocol + '//' + location.host + __uv$config.prefix + __uv$config.encodeUrl(url);
      win.document.body.appendChild(iframe);

			//Checking if the disguiser is enabled
			if(getSetting('page_disguiser') == true) {
				win.document.title = "Classes";
				
				win.document.getElementsByTagName("head")[0].innerHTML += '<link id="favicon" rel="shortcut icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png" />'
			}
			
		}
	});
}