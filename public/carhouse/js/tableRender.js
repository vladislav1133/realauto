$(document).ready(function(){
	
	let tableWidth = $(".table").width();
	let cellWidth = $(".table__row .table__row-cell").width();
	let cell = $(".table__row-cell")

	let cellCount = Math.floor(tableWidth / cellWidth);

	let rowArray = $(".table__row");

	rowArray.each(function(){

		let cellArray = $(this).children();

		let bottomCell = cellArray.slice(cellCount, cellArray.length + 1);
		let topCell = cellArray.splice(cellCount, bottomCell.length + 1);

		//console.log(topCell.length);
		console.log(bottomCell.length + topCell.length);
		bottomCell.css("display", "none")

	})

	//console.log(cellCount);

	//console.log($(".table__row .table__row-cell")[1])




});