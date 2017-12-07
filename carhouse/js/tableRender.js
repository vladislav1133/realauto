'use strict';

new Vue({
    el: '#table-body',
    data: {
        endpoint: '/api/cars',
        cars: []
    },
    methods: {

        getCars: function () {
            this.$http.get(this.endpoint).then(function (response) {
                this.cars = response.data.cars.data;
            }, function (error) {
                console.log("ошибка запроса");
            });
        },
        getArrayForFoot: function () {

        },
        foot: function (event) {

            let theadBottom = $(".thead__cell").filter(function() {
                return $(this).is(':hidden');
            });

            if(!($(event.target).hasClass("active-row"))){

                $(event.target).addClass("active-row");

                let theadBottomClone = theadBottom.clone();
                let theadContent = $(event.target).find(".thead-bottom");
                $(theadBottomClone).each(function () {

                    $(this).css("display", "block");
                    $(theadContent).append($(this));

                });

                let cellArray = $(event.target).children(".table__row-cell");
                let bottomContent = $(event.target).find(".tbody-bottom");

                $(cellArray).each(function () {

                    if(!($(this).is(":visible"))){

                        let clone = $(this).clone();

                        clone.css("display", "block");

                        $(bottomContent).append(clone);
                    }

                });

            }else {

                $(event.target).removeClass("active-row");

                $(event.target).find(".thead-bottom").empty();
                $(event.target).find(".tbody-bottom").empty();

            }
        }


    },
    created: function (){
        this.getCars();
        tableMain();
    },
    mounted: function () {

    }
});


function tableMain() {
    let tableWidth = $(".table").width();
    let cellWidth = $(".table__row .table__row-cell").width();
    let cellCount = Math.floor(tableWidth / cellWidth);



    let theadArray = $(".thead__cell");
    let theadBottom = theadArray.slice(cellCount, theadArray.length + 1);
    theadBottom.css("display", "none");



    let rowArray = $(".table__row");
    rowArray.each(function(){

        let cellArray = $(this).children(".table__row-cell");

        let bottomCell = cellArray.slice(cellCount, cellArray.length + 1);
        bottomCell.css("display", "none")

    });

    //----------------------------------------------------------

}
// $(".table__row").click(function(){
//
//     if(!($(this).hasClass("active-row"))){
//
//         $(this).addClass("active-row");
//
//         $(this).after("<div class='bottom-cell_wrap'><div class='thead-bottom'></div><div class='tbody-bottom'></div></div>");
//
//         let theadBottomClone = theadBottom.clone();
//         let theadContent = $(this).next().children(".thead-bottom");
//         $(theadBottomClone).each(function () {
//
//             $(this).css("display", "block");
//             $(theadContent).append($(this));
//
//         });
//
//         let cellArray = $(this).children();
//         let bottomContent = $(this).next().children(".tbody-bottom");
//         $(cellArray).each(function () {
//
//             if($(this).is(":visible")){
//
//                 let clone = $(this).clone();
//
//                 clone.css("display", "block");
//
//                 $(bottomContent).append(clone);
//             }
//
//         });
//
//     }else {
//
//         $(this).removeClass("active-row");
//
//         //delete cellArray;
//
//         if($(this).next().hasClass("bottom-cell_wrap")){
//
//             $(this).next().remove();
//
//         }
//
//     }
//
// });