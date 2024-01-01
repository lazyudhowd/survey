function generatePertanyaanIdentitasPenerimaManfaat(){

	let target = document.getElementById("targetIdentitasPenerimaManfaat");

	let startNumber = 3;
	let startQuestionNumber = 1;

	for(let ii=0; ii<schemaIdentitasPenerimaManfaat.subSurvey.length; ii++){

		let subBaru = document.createElement("div");
		subBaru.setAttribute("class","mt-3 border p-3");

		let headerSub = document.createElement("h3");
		headerSub.setAttribute("class","laz-fs-6 font-weight-bold")
		headerSub.innerText = romanNumber[ii+startNumber]+". "+schemaIdentitasPenerimaManfaat.subSurvey[ii].judulSub;

		let areaPertanyaanSub = document.createElement("div");

		for(let ij=0; ij<schemaIdentitasPenerimaManfaat.subSurvey[ii].pertanyaanSurvey.length; ij++){

			let subPertanyaan= document.createElement("div");
			subPertanyaan.setAttribute("class","row mt-2 pl-md-2 pr-md-4 justify-content-center justify-content-md-start");

			let idProperty = "identiasPenerimaManfaat"+ii+"_pertanyaan_"+ij;

			let labelPertanyaan = document.createElement("label");
			labelPertanyaan.setAttribute("class","col-12 col-md-2");
			labelPertanyaan.setAttribute("for",idProperty);
			labelPertanyaan.innerText = startQuestionNumber+". "+schemaIdentitasPenerimaManfaat.subSurvey[ii].pertanyaanSurvey[ij].label;

			if(schemaIdentitasPenerimaManfaat.subSurvey[ii].pertanyaanSurvey[ij].type == "option"){
				let select = document.createElement("select");
				select.id = idProperty;
				select.setAttribute("class","col-10 col-md-10")

				select.style.border = "0px";
				select.style.backgroundColor = "inherit";
				select.style.appearance = "none";
				select.style.borderBottom = "1px dotted black";
				select.style.paddingLeft = "14px";

				for(let ik=0; ik<schemaIdentitasPenerimaManfaat.subSurvey[ii].pertanyaanSurvey[ij].optionList.length; ik++){
					let option = document.createElement("option");
					option.value = schemaIdentitasPenerimaManfaat.subSurvey[ii].pertanyaanSurvey[ij].optionList[ik].value;
					option.text = schemaIdentitasPenerimaManfaat.subSurvey[ii].pertanyaanSurvey[ij].optionList[ik].label;
					select.appendChild(option);
				}

				subPertanyaan.appendChild(labelPertanyaan);
				subPertanyaan.appendChild(select);

				areaPertanyaanSub.appendChild(subPertanyaan);

			} else if(schemaIdentitasPenerimaManfaat.subSurvey[ii].pertanyaanSurvey[ij].type == "radio"){
				// let areaRadio = document.createElement("div");
				// areaRadio.setAttribute("class","col-8");

				let subJawaban = document.createElement("div");
				subJawaban.setAttribute("class","col-10 col-md-10");

				for(let ik=0; ik<schemaIdentitasPenerimaManfaat.subSurvey[ii].pertanyaanSurvey[ij].optionList.length; ik++){
					let radioButton = document.createElement("input");
					radioButton.setAttribute("type","radio");
					radioButton.setAttribute("name","opsiforsub"+ii+"_pertanyaan"+ij);
					radioButton.setAttribute("class","mr-1");
					radioButton.id = "sub"+ii+"_pertanyaan"+ij+"_opsi"+ik;

					radioButton.value = dataSurvey.subSurvey[ii].pertanyaanSurvey[ij].opsiJawaban[ik].nilai;

					let textForLabelRadio = dataSurvey.subSurvey[ii].pertanyaanSurvey[ij].opsiJawaban[ik].label
					textForLabelRadio += " ("+dataSurvey.subSurvey[ii].pertanyaanSurvey[ij].opsiJawaban[ik].nilai+")"

					let labelRadio = document.createElement("label");
					labelRadio.setAttribute("for",radioButton.id);
					labelRadio.innerText = textForLabelRadio;
				}

				subJawaban.appendChild(radioButton);
				subJawaban.appendChild(labelRadio);

				areaJawaban.appendChild(subJawaban);
			} else if(schemaIdentitasPenerimaManfaat.subSurvey[ii].pertanyaanSurvey[ij].type == "textarea"){
				let inputArea = document.createElement("textarea");
				inputArea.id = idProperty
				inputArea.rows = 3;
				inputArea.setAttribute("class","col-10 col-md-10");

				inputArea.style.border = "0px";
				inputArea.style.appearance = "none";
				inputArea.style.appearance = "none";
				inputArea.style.textDecoration = "underline";
				inputArea.style.textUnderlineOffset = "4px";
				inputArea.style.lineHeight = "20pt";
				inputArea.style.resize = "none";

				subPertanyaan.appendChild(labelPertanyaan);
				subPertanyaan.appendChild(inputArea);

				areaPertanyaanSub.appendChild(subPertanyaan);
			} else if(schemaIdentitasPenerimaManfaat.subSurvey[ii].pertanyaanSurvey[ij].type == "number"){
				let inputText = document.createElement("input");
				inputText.id = idProperty
				inputText.setAttribute("type","number");
				inputText.setAttribute("class","col-10 col-md-10");

				subPertanyaan.appendChild(labelPertanyaan);
				subPertanyaan.appendChild(inputText);

				areaPertanyaanSub.appendChild(subPertanyaan);
			} else {
				let inputText = document.createElement("input");
				inputText.id = idProperty
				inputText.setAttribute("type","text");
				inputText.setAttribute("class","col-10 col-md-10");

				subPertanyaan.appendChild(labelPertanyaan);
				subPertanyaan.appendChild(inputText);

				areaPertanyaanSub.appendChild(subPertanyaan);
			}
			

			startQuestionNumber+=1;
		}

		subBaru.appendChild(headerSub);
		subBaru.appendChild(areaPertanyaanSub);

		target.appendChild(subBaru);
	}

}
