document.getElementById("btnPrintSurvey").addEventListener("click",printSurvey,false);

// menambahkan function
for(let ii=0; ii<registerSurvey.length; ii++){
	
	let radio = document.getElementsByName(registerSurvey[ii]);

	for(let ij=0; ij<radio.length; ij++){
		radio[ij].addEventListener("change",totalSemuaSurvey)
	}
}
