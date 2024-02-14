function getSetting(mode) {
	if(localStorage.getItem(mode)) {
		return true;
	}else{
		return false;
	}
}

if(getSetting('page_disguiser')) {
	document.title = "Classes";
	
	document.getElementById("favicon").href = "https://ssl.gstatic.com/classroom/favicon.png"
}

if(getSetting('prevent_close')) {
	window.addEventListener('beforeunload', function(e) {
    e.preventDefault();
    
    let confirm = "Heads up! An attempt has been made to close this page.";
    
    e.returnValue = confirm;
    (e || window.event).returnValue = confirm;
    return confirm;
});
}
