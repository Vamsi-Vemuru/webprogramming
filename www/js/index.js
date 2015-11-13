var calc = function() {
	weight = document.getElementById("weight").value;
	height_in = (parseInt(document.getElementById("feet").value * 12) + parseInt(document.getElementById("inches").value)) * 0.0254 ;
	height_in = Math.pow(height_in,2);
	bmi = weight/height_in
	document.getElementById("Result").value = bmi;
	if (bmi < 18.5) {
		document.getElementById("Result").value += "\nunderweight";
	} else if (bmi >= 18.5 && bmi < 25) {
		document.getElementById("Result").value += "\nnormal weight";
	} else if (bmi >= 25 && bmi < 30) {
		document.getElementById("Result").value += "\noverweight";
	} else if (bmi > 30) {
		document.getElementById("Result").value += "\nobese";
	}
}