function generatePertanyaanDataMasuk(){

	let target = document.getElementById("targetDataMasukLazismu");

	let startNumber = 1;
	let startQuestionNumber = 1;

	for(let ii=0; ii<schemaDataMasuk.subSurvey.length; ii++){

		let subBaru = document.createElement("div");
		subBaru.setAttribute("class","mt-3 border p-3");

		let headerSub = document.createElement("h3");
		headerSub.setAttribute("class","laz-fs-6 font-weight-bold")
		headerSub.innerText = romanNumber[ii+startNumber]+". "+schemaDataMasuk.subSurvey[ii].judulSub;

		let areaPertanyaanSub = document.createElement("div");

		for(let ij=0; ij<schemaDataMasuk.subSurvey[ii].pertanyaanSurvey.length; ij++){

			let subPertanyaan= document.createElement("div");
			subPertanyaan.setAttribute("class","row mt-2 pl-md-2 pr-md-4 justify-content-center justify-content-md-start");

			let labelPertanyaan = document.createElement("label");
			labelPertanyaan.setAttribute("class","col-12 col-md-2");
			labelPertanyaan.setAttribute("for","dataMasukLazismu_sub"+ii+"_pertanyaan_"+ij);
			labelPertanyaan.innerText = startQuestionNumber+". "+schemaDataMasuk.subSurvey[ii].pertanyaanSurvey[ij].label;

			subPertanyaan.appendChild(labelPertanyaan);

			let inputText = document.createElement("input");
			inputText.setAttribute("type","text");
			inputText.id = "dataMasukLazismu_sub"+ii+"_pertanyaan_"+ij;
			inputText.setAttribute("class","col-10 col-md-10");

			subPertanyaan.appendChild(inputText);

			areaPertanyaanSub.appendChild(subPertanyaan);

			startQuestionNumber+=1;
		}

		subBaru.appendChild(headerSub);
		subBaru.appendChild(areaPertanyaanSub);

		target.appendChild(subBaru);
	}

}
