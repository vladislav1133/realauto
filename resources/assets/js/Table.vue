<template>
    <div class="table__row">
    <div class="table__row-cell" style="position: relative; width: 100px; margin: 0 auto;">

        <img class="product__img"
             :src="path_to_image"
             title="Смотреть фото"
             :data-car-id="lot_id"
             onError="this.onerror=null;this.src='/carhouse/img/car-blank.png';">
        <div v-if="highlights==='RUN AND DRIVE'" title="На ходу" style="    cursor: pointer;
                                                                position: absolute;
                                                                top: 0;
                                                                right: 1px;
                                                                color: white;
                                                                text-transform: uppercase;
                                                                background: green;
                                                                width: 18px;
                                                                height: 18px;
                                                                border-radius: 50%;">
            R
        </div>
    </div>
    <div class="table__row-cell">
        <div>
            <a :href="url" target="_blank">{{lot_id}}</a>
        </div>
        <div style="display: inline" class="favorite__btn_wrap">
            <button class="product__btn favorite__btn" :data-lot="lot_id"
                    title="Добавить в избранное"><i class="fa fa-bookmark-o"></i>
            </button>
        </div>
        <a v-if="source === 'copart.com'" style="font-size: 25px; margin-left: 7px;" :href="car.url" target="_blank">C</a>
        <a v-else style="font-size: 25px; color: #A20106; margin-left: 7px;" :href="car.url" target="_blank">A</a>
    </div>
    <div class="table__row-cell">{{year}}</div>
    <div class="table__row-cell">{{brand}}</div>
    <div class="table__row-cell">{{model}}</div>
    <div class="table__row-cell">{{engine_type}}</div>
    <div class="table__row-cell">{{fuel}}</div>
    <div class="table__row-cell">{{transmission}}</div>
    <div class="table__row-cell">{{odometer}}</div>
    <div class="table__row-cell">{{drive}}</div>
    <div class="table__row-cell">{{highlights}}</div>
    <div class="table__row-cell">{{primary_damage}}</div>
    <div class="table__row-cell">{{secondary_damage}}</div>
    <div class="table__row-cell sale_date">{{sale_date}}</div>
    <div class="table__row-cell">{{current_bid}}</div>
    <div class="table__row-cell buy-now_green">{{buy_it_now}}</div>
    <div class="table__row-cell">
        {{location}}
        <button class="btn btn-rem-loc rem-btn" :data-loc="location">Исключить из поиска
        </button>
    </div>
    <div class="table__row-cell">
        {{doc_type}}
        <button class="btn btn-rem-doc rem-btn" :data-doc="doc_type">Исключить из поиска
        </button>
    </div>
    <div class='bottom-cell_wrap'>
        <div class='thead-bottom'></div>
        <div class='tbody-bottom'></div>
    </div>
    </div>
</template>

<script>
    export default {
        props: ['cars', 'car', 'path_to_image', 'highlights', 'url', 'lot_id', 'source', 'year', 'brand',
            'model','engine_type','fuel','transmission','odometer','drive','primary_damage','secondary_damage','sale_date',
            'current_bid','buy_it_now','location', 'doc_type'],
        methods: {
            // foot: function (event) {
            //
            //     let theadBottom = $(".thead__cell").filter(function() {
            //         return $(this).is(':hidden');
            //     });
            //
            //     if(!($(event.target).parents(".table__row").hasClass("active-row"))){
            //
            //         $(event.target).parents(".table__row").addClass("active-row");
            //
            //         let theadBottomClone = theadBottom.clone();
            //         let theadContent = $(event.target).parents(".table__row").find(".thead-bottom");
            //         $(theadBottomClone).each(function () {
            //
            //             //$(this).css("display", "block");
            //             $(theadContent).append($(this));
            //             $(this).slideDown();
            //
            //         });
            //
            //         let cellArray = $(event.target).parents(".table__row").children(".table__row-cell");
            //         let bottomContent = $(event.target).parents(".table__row").find(".tbody-bottom");
            //
            //         $(cellArray).each(function () {
            //
            //             if(!($(this).is(":visible"))){
            //
            //                 let clone = $(this).clone();
            //
            //                 //clone.css("display", "block");
            //
            //                 $(bottomContent).append(clone);
            //                 clone.slideDown();
            //             }
            //
            //         });
            //
            //         $(event.target).parents(".table__row").find(".more-btn").text("Закрыть");
            //
            //     }else {
            //
            //         $(event.target).parents(".table__row").removeClass("active-row");
            //
            //         let thead = $(event.target).parents(".table__row").find(".thead-bottom");
            //         let tbody = $(event.target).parents(".table__row").find(".tbody-bottom");
            //
            //         thead.children().each(function (){
            //             $(this).slideUp(400 ,function (){
            //                 $(this).remove();
            //             });
            //         });
            //
            //         tbody.children().each(function (){
            //             $(this).slideUp(400 ,function (){
            //                 $(this).remove();
            //             });
            //         });
            //
            //         $(event.target).parents(".table__row").find(".more-btn").text("Подробнее");
            //
            //     }
            // }
        },
        created: function (){
            // tableMain();
        }
    }
    function tableMain() {
        let tableWidth = $(".table").width();
        let cellWidth = $(".table__row .table__row-cell").width();
        let cellCount = Math.floor(tableWidth / cellWidth);



        let theadArray = $(".thead__cell");
        let theadBottom = theadArray.slice(cellCount, theadArray.length + 1);
        theadArray.css("display", "inline-block");
        theadBottom.css("display", "none");

        $(".more-btn").remove();

        let rowArray = $(".table__row");
        rowArray.each(function(){

            let cellArray = $(this).children(".table__row-cell");

            let topCell = cellArray.slice(0, cellCount);
            topCell.css("display", "inline-block");
            topCell.last().append("<br><a class='more-btn' v-on:click='foot(event)'>Подробнее</a>");
            let bottomCell = cellArray.slice(cellCount, cellArray.length + 1);
            bottomCell.css("display", "none");

        });

    }
    $(window).resize(function () {
        tableMain();
    });
</script>
