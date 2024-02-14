function getSetting(mode) {
	if(localStorage.getItem(mode) == 'true') {
		return true;
	}else{
		return false;
	}
}

if(getSetting('page_disguiser') == true) {
	document.title = "Classes";
	
	document.getElementById("favicon").href = "https://ssl.gstatic.com/classroom/favicon.png"
}

if(getSetting('prevent_close') == true) {
	window.addEventListener('beforeunload', function(e) {
    e.preventDefault();
    
    let confirm = "Heads up! An attempt has been made to close this page.";
    
    e.returnValue = confirm;
    (e || window.event).returnValue = confirm;
    return confirm;
});
}
