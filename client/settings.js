var settings = [ "page_disguiser", "cloak_mode", "prevent_close" ];

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

function updateSettings() {
	settings.forEach((mode) => {
		if(document.getElementById(mode).checked) {
			setCookie(mode, true)
		}else{
			setCookie(mode, false)
		}
	});

	window.location.reload();
}

settings.forEach((mode) => {
	if(getCookie(mode) == 'true') {
		document.getElementById(mode).setAttribute('checked', '')
	}
});
