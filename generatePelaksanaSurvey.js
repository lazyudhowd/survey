function generatePertanyaanPelaksanaSurvey(){

	let target = document.getElementById("targetPelaksanaSurvey");

	let startNumber = 2;
	let startQuestionNumber = 1;

	for(let ii=0; ii<schemaPelaksanaSurvey.subSurvey.length; ii++){

		let subBaru = document.createElement("div");
		subBaru.setAttribute("class","mt-3 border p-3");

		let headerSub = document.createElement("h3");
		headerSub.setAttribute("class","laz-fs-6 font-weight-bold")
		headerSub.innerText = romanNumber[ii+startNumber]+". "+schemaPelaksanaSurvey.subSurvey[ii].judulSub;

		let areaPertanyaanSub = document.createElement("div");

		for(let ij=0; ij<schemaPelaksanaSurvey.subSurvey[ii].pertanyaanSurvey.length; ij++){

			let subPertanyaan= document.createElement("div");
			subPertanyaan.setAttribute("class","row mt-2");

			let idProperty = "pelaksanaSurveyLazismu_sub"+ii+"_pertanyaan_"+ij;

			let labelPertanyaan = document.createElement("label");
			labelPertanyaan.setAttribute("class","col-3");
			labelPertanyaan.setAttribute("for",idProperty);
			labelPertanyaan.innerText = startQuestionNumber+". "+schemaPelaksanaSurvey.subSurvey[ii].pertanyaanSurvey[ij].label;

			let inputText = document.createElement("input");
			inputText.id = idProperty
			inputText.setAttribute("type","text");
			inputText.setAttribute("class","col-8");

			subPertanyaan.appendChild(labelPertanyaan);
			subPertanyaan.appendChild(inputText);

			areaPertanyaanSub.appendChild(subPertanyaan);

			startQuestionNumber+=1;
		}

		subBaru.appendChild(headerSub);
		subBaru.appendChild(areaPertanyaanSub);

		target.appendChild(subBaru);
	}

}