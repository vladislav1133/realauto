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

		bottomCell.css("display", "none")

	})

	$(".table__row").click(function(){

		$(this).addClass("active-row");

		let cellArray = $(this).children();

		var bottomCell = cellArray.filter(function(style) {
  			return $(style).is(":visible");
		});

		var bottomCell = [];

		cellArray.each(function(){

			if($(this).is(":visible") != true){
				bottomCell.push($(this));
			};

		});

		$(this).after("<div class='bottom-cell_wrap'></div>");

		let map = new Map();

		let i = 0;

		$(bottomCell).each(function(){

			$(this).css("display", "block");

			map.set(i, $(this));

			i++;

		});

		$(".active-row").next().html(map);

	})

});