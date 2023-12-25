function printSurvey(){
	let targetAreaSurvey = document.getElementById("areaSurvey");

	html2canvas(targetAreaSurvey).then(canvas => {
		canvas.toBlob(function(blob){
			window.saveAs(blob,"myimage.png");
		});
	});
}