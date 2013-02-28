function changecategory(pilcat) {
	if (pilcat == 0) {
		document.getElementById("tasks1").style.opacity = 1 ;
		document.getElementById("tasks2").style.opacity = 1 ;
		document.getElementById("tasks3").style.opacity = 0 ;
		document.getElementById("dashboard_add").style.opacity = 1 ;
		document.getElementById("catakademik").style.color = "#EDF600" ;
		document.getElementById("catorganisasi").style.color = "" ;
} else {
		document.getElementById("tasks1").style.opacity = 0 ;
		document.getElementById("tasks2").style.opacity = 0 ;
		document.getElementById("tasks3").style.opacity = 1 ;
		document.getElementById("dashboard_add").style.opacity = 1 ;
		document.getElementById("catorganisasi").style.color = "#EDF600" ;
		document.getElementById("catakademik").style.color = "" ;
	}
}

function popup_form(formdiv_id) {

    var formdiv = document.getElementById(formdiv_id);
    formdiv.style.display="block";

}

