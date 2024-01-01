document.getElementById("btnPrintSurvey").addEventListener("click",printSurvey,false);

// menambahkan function
for(let ii=0; ii<registerSurvey.length; ii++){
	
	let radio = document.getElementsByName(registerSurvey[ii]);

	for(let ij=0; ij<radio.length; ij++){
		radio[ij].addEventListener("change",totalSemuaSurvey)
	}
}

document.getElementById("dataMasukLazismu_sub0_pertanyaan_0").addEventListener("click", function(){
	this.setAttribute("type","date");
	this.showPicker();
}, false);

document.getElementById("dataMasukLazismu_sub0_pertanyaan_0").addEventListener("change", function(){
	this.setAttribute("type","text");
	let date = new Date(this.value);

	let displayValue = dayName[date.getDay()-1].ind+" / "+date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();

	this.value = displayValue;
}, false);

document.getElementById("pelaksanaSurveyLazismu_sub0_pertanyaan_0").addEventListener("click", function(){
	this.setAttribute("type","date");
	this.showPicker();
}, false);

document.getElementById("pelaksanaSurveyLazismu_sub0_pertanyaan_0").addEventListener("change", function(){
	this.setAttribute("type","text");
	let date = new Date(this.value);

	let displayValue = dayName[date.getDay()-1].ind+" / "+date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();

	this.value = displayValue;
}, false);
