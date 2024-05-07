// your code here
function changeHeading(){
	let input1 = document.getElementById("name").value;
	let input2 = document.getElementById("year").value;

	let changeUrl = document.getElementById("url");
	let innerHtml = `?name=${input1}&year=${input2}`
	changeUrl.innerHtml += innerHtml;
}