$(document).ready(function(){
	
	let tableWidth = $(".table").width();
	let cellWidth = $(".table__row .table__row-cell").width();
	let cell = $(".table__row-cell");
	let cellCount = Math.floor(tableWidth / cellWidth);



	let theadArray = $(".thead__cell");
	let theadBottom = theadArray.slice(cellCount, theadArray.length + 1);
    theadBottom.css("display", "none");



    let rowArray = $(".table__row");
	rowArray.each(function(){

		let cellArray = $(this).children();

		let bottomCell = cellArray.slice(cellCount, cellArray.length + 1);
		//let topCell = cellArray.splice(cellCount, bottomCell.length + 1);

		bottomCell.css("display", "none")

	});




	//----------------------------------------------------------
	$(".table__row").click(function(){

		if($(this).hasClass("active-row") == !true){

            $(this).addClass("active-row");

            $(this).after("<div class='bottom-cell_wrap'><div class='thead-bottom'></div><div class='tbody-bottom'></div></div>");

            let theadBottomClone = theadBottom.clone();
            let theadContent = $(this).next().children(".thead-bottom");
            $(theadBottomClone).each(function () {

                $(this).css("display", "block");
                $(theadContent).append($(this));

            });

            let cellArray = $(this).children();
            let bottomContent = $(this).next().children(".tbody-bottom");
            $(cellArray).each(function () {

                if($(this).is(":visible") != true){
                
                	let clone = $(this).clone();

                	clone.css("display", "block");

                	$(bottomContent).append(clone);
                }

            });

		}else {

            $(this).removeClass("active-row");

            delete cellArray;

            if($(this).next().hasClass("bottom-cell_wrap")){

                $(this).next().remove();

            }

        }

    });

});