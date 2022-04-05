/* ajax-finn-student */ 
 
function finn(brukernavn)
 {
 var foresporsel=new XMLHttpRequest();  /* oppretter request-objekt */      
 foresporsel.onreadystatechange=function()
 {
 if (foresporsel.readyState==4 && foresporsel.status==200)  /* responsen er fullført og vellykket */
 {
    var svar=foresporsel.responseText; /* responsteksten legges i variabelen svar */
	var del=svar.split(";");
	var fornavn=del[0];
	var etternavn=del[1];
	var klassekode=del[2];
	var bildenr=del[3];
	document.getElementById("fornavn").value=fornavn;
	document.getElementById("etternavn").value=etternavn;
	document.getElementById("klassekode").value=klassekode;
	document.getElementById("bildenr").value=bildenr.trim();
	}
	} 
 
  foresporsel.open("GET","ajax-finn-student.php?brukernavn="+brukernavn);
  foresporsel.send();  /* sender en request */ 
  } 