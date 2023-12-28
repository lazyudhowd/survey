function printSurvey(){
	let targetAreaSurvey = document.getElementById("areaSurvey");

	let targetForm = document.getElementById("form1");
	targetForm.style.width = "900px";

	html2canvas(targetAreaSurvey).then(canvas => {
		canvas.toBlob(function(blob){
			window.saveAs(blob,"myimage.png");
			targetForm.style.removeProperty('width');
		});
	});
}

function totalSemuaSurvey(){
	let totalNilai = 0;

	for(let ii=0; ii<registerSurvey.length; ii++){
		
		let radio = document.getElementsByName(registerSurvey[ii]);

		for(let ij=0; ij<radio.length; ij++){
			if(radio[ij].checked){
				totalNilai += parseInt(radio[ij].value);
			}
		}
	}

	let rekomendasiIndex = 0

	for(let ii=0; ii<dataRekomendasi.length; ii++){
		if(dataRekomendasi[ii].min <= totalNilai){
			if(dataRekomendasi[ii].max >= totalNilai){
				rekomendasiIndex = ii;
				break;
			}
		}
	}

	document.getElementById("labelSkor").innerText = "SKOR "+totalNilai;

	document.getElementById("labelRekomendasi").innerText = dataRekomendasi[rekomendasiIndex].label;

	console.log("Total Nilai : "+totalNilai);
}
