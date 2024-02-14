var settings = [ "page_disguiser", "cloak_mode", "prevent_close" ];

function updateSettings() {
	settings.forEach((mode) => {
		if(document.getElementById(mode).checked) {
			localStorage.setItem(mode, 'true')
		}else{
			localStorage.setItem(mode, 'false')
		}
	});

	window.location.reload();
}

settings.forEach((mode) => {
	if(getCookie(mode) == 'true') {
		document.getElementById(mode).setAttribute('checked', '')
	}
});
