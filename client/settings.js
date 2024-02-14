var settings = [ "page_disguiser", "cloak_mode", "prevent_close" ];

function updateSettings() {
	settings.forEach((mode) => {
		if(document.getElementById(mode).checked) {
			localStorage.setItem(mode, 'true')
		}else{
			localStorage.removeItem(mode)
		}
	});

	window.location.reload();
}

settings.forEach((mode) => {
	if(localStorage.getItem(mode)) {
		document.getElementById(mode).setAttribute('checked', '')
	}
});
