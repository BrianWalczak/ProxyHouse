function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getSetting(mode) {
	if(getCookie(mode) == 'true') {
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
