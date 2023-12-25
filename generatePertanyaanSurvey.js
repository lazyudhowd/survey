function generatePertanyaanSurvey(){

	let target = document.getElementById("targetPertanyaanSurvey");

	let startNumber = 1;
	let startQuestionNumber = 1;

	for(let ii=0; ii<dataSurvey.subSurvey.length; ii++){

		let subBaru = document.createElement("div");

		let headerSub = document.createElement("h3");
		headerSub.setAttribute("class","laz-fs-6")
		headerSub.innerText = romanNumber[ii+startNumber]+". "+dataSurvey.subSurvey[ii].judulSub;

		let areaPertanyaanSub = document.createElement("div");

		for(let ij=0; ij<dataSurvey.subSurvey[ii].pertanyaanSurvey.length; ij++){

			let subPertanyaan= document.createElement("div");
			subPertanyaan.setAttribute("class","mt-3");
			subPertanyaan.innerText = startQuestionNumber+". "+dataSurvey.subSurvey[ii].pertanyaanSurvey[ij].label;

			let areaJawaban = document.createElement("div");

			for(let ik=0; ik<dataSurvey.subSurvey[ii].pertanyaanSurvey[ij].opsiJawaban.length; ik++){
				
				let subJawaban = document.createElement("div");

				let radioButton = document.createElement("input");
				radioButton.setAttribute("type","radio");
				radioButton.setAttribute("name","opsiforsub"+ii+"_pertanyaan"+ij);
				radioButton.id = "sub"+ii+"_pertanyaan"+ij+"_opsi"+ik;

				radioButton.value = dataSurvey.subSurvey[ii].pertanyaanSurvey[ij].opsiJawaban[ik].nilai;

				let labelRadio = document.createElement("label");
				labelRadio.setAttribute("for",radioButton.id)
				// labelRadio.for = radioButton.id;
				labelRadio.innerText = dataSurvey.subSurvey[ii].pertanyaanSurvey[ij].opsiJawaban[ik].label;

				subJawaban.appendChild(radioButton);
				subJawaban.appendChild(labelRadio);

				areaJawaban.appendChild(subJawaban);
			}

			areaPertanyaanSub.appendChild(subPertanyaan);
			areaPertanyaanSub.appendChild(areaJawaban);

			startQuestionNumber+=1;
		}

		subBaru.appendChild(headerSub);
		subBaru.appendChild(areaPertanyaanSub);

		target.appendChild(subBaru);
	}

}

function generatePertanyaanSurvey2(){

	let target = document.getElementById("targetPertanyaanSurvey1");

	let subol = document.createElement("ol");
	subol.setAttribute("class","laz-ol-style-lowerroman")

	let startNumber = 1;
	let startQuestionNumber = 1;

	for(let ii=0; ii<dataSurvey.subSurvey.length; ii++){

		let subBaru = document.createElement("div");

		let headerSub = document.createElement("h3");
		headerSub.innerText = romanNumber[ii+startNumber]+". "+dataSurvey.subSurvey[ii].judulSub;

		let areaPertanyaanSub = document.createElement("div");

		for(let ij=0; ij<dataSurvey.subSurvey[ii].pertanyaanSurvey.length; ij++){

			let subPertanyaan= document.createElement("div");
			subPertanyaan.innerText = startQuestionNumber+". "+dataSurvey.subSurvey[ii].pertanyaanSurvey[ij].label;

			let areaJawaban = document.createElement("div");

			for(let ik=0; ik<dataSurvey.subSurvey[ii].pertanyaanSurvey[ij].opsiJawaban.length; ik++){
				
				let subJawaban = document.createElement("div");

				let radioButton = document.createElement("input");
				radioButton.setAttribute("type","radio");
				radioButton.setAttribute("name","opsiforsub"+ii+"_pertanyaan"+ij);
				radioButton.id = "sub"+ii+"_pertanyaan"+ij+"_opsi"+ik;

				radioButton.value = dataSurvey.subSurvey[ii].pertanyaanSurvey[ij].opsiJawaban[ik].nilai;

				let labelRadio = document.createElement("label");
				labelRadio.setAttribute("for",radioButton.id)
				// labelRadio.for = radioButton.id;
				labelRadio.innerText = dataSurvey.subSurvey[ii].pertanyaanSurvey[ij].opsiJawaban[ik].label;

				subJawaban.appendChild(radioButton);
				subJawaban.appendChild(labelRadio);

				areaJawaban.appendChild(subJawaban);
			}

			areaPertanyaanSub.appendChild(subPertanyaan);
			areaPertanyaanSub.appendChild(areaJawaban);

			startQuestionNumber+=1;
		}

		subBaru.appendChild(headerSub);
		subBaru.appendChild(areaPertanyaanSub);

		target.appendChild(subBaru);
	}

}

