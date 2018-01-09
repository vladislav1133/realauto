<template>
    <div class="table-container">
        <div class="table car-table" data-empty="Автомобили не найдеы">
    <div class="thead">
        <div class="thead__cell">Фото</div>
        <div class="thead__cell">Лот</div>
        <div class="thead__cell">Год</div>
        <div class="thead__cell">Марка</div>
        <div class="thead__cell">Модель</div>
        <div class="thead__cell">Двигатель</div>
        <div class="thead__cell">Топливо</div>
        <div class="thead__cell">КПП</div>
        <div class="thead__cell">Одометр</div>
        <div class="thead__cell">Тип привода</div>
        <div class="thead__cell">Основные моменты</div>
        <div class="thead__cell">Основные повреждения</div>
        <div class="thead__cell">Вторичные повреждения</div>
        <div class="thead__cell">Дата<br> аукциона</div>
        <div class="thead__cell">Текушая<br> ставка</div>
        <div class="thead__cell">Купить сейчас</div>
        <div class="thead__cell">Расположение</div>
        <div class="thead__cell">Тип документа</div>
    </div>
    <div class="tbody" id="table-body">
        <tableVue :cars="cars"
                  v-for="(car, index) in cars"
                  :key="index"
                  :car="car"
                  :path_to_image="car.path_to_image"
                  :url="car.url"
                  :highlights="car.highlights"
                  :lot_id="car.lot_id"
                  :source="car.source"
                  :year="car.year"
                  :brand="car.brand"
                  :model="car.model"
                  :engine_type="car.engine_type"
                  :fuel="car.fuel"
                  :transmission="car.transmission"
                  :odometer="car.odometer"
                  :drive="car.drive"
                  :primary_damage="car.primary_damage"
                  :secondary_damage="car.secondary_damage"
                  :sale_date="car.sale_date"
                  :current_bid="car.current_bid"
                  :buy_it_now="car.buy_it_now"
                  :location="car.location"
                  :doc_type="car.doc_type"
        ></tableVue>
    </div>

        </div>
        <pagVue
                :current="currentPage"
                :total="total"
                :per-page="perPage"
                @page-changed="getCars"
        ></pagVue>
    </div>
</template>

<script>
    import {MainSearch} from './MainSearch';
    import {post} from './helpers/api.js';
    export default {
        data() {
            return {
                cars: [],
                currentPage: 1,
                perPage: 10,
                total: 0
            }
        },
        methods: {

            getCars: function (page, searchData) {
                searchData['page'] = page;

                post(`/api/cars`, searchData)
                    .then((res) => {
                        this.cars = res.data.data.data;
                        this.currentPage = res.data.data.current_page;
                        this.total = res.data.data.total;
                    })
            }

        },
        created: function (){
            this.getCars(this.currentPage, MainSearch.getSearchData());
        },
        mounted: function () {
                
        },
        updated: function () {
            this.$nextTick(function () {
                tableMain();
            })
        }
    }
        $("body").on('click','.more-btn',function () {

            let theadBottom = $(".thead__cell").filter(function() {
                return $(this).is(':hidden');
            });

            if(!($(event.target).parents(".table__row").hasClass("active-row"))){

                $(event.target).parents(".table__row").addClass("active-row");

                let theadBottomClone = theadBottom.clone();
                let theadContent = $(event.target).parents(".table__row").find(".thead-bottom");
                $(theadBottomClone).each(function () {

                    //$(this).css("display", "block");
                    $(theadContent).append($(this));
                    $(this).slideDown();

                });

                let cellArray = $(event.target).parents(".table__row").children(".table__row-cell");
                let bottomContent = $(event.target).parents(".table__row").find(".tbody-bottom");

                $(cellArray).each(function () {

                    if(!($(this).is(":visible"))){

                        let clone = $(this).clone();

                        //clone.css("display", "block");

                        $(bottomContent).append(clone);
                        clone.slideDown();
                    }

                });

                $(event.target).parents(".table__row").find(".more-btn").text("Закрыть");

            }else {

                $(event.target).parents(".table__row").removeClass("active-row");

                let thead = $(event.target).parents(".table__row").find(".thead-bottom");
                let tbody = $(event.target).parents(".table__row").find(".tbody-bottom");

                thead.children().each(function (){
                    $(this).slideUp(400 ,function (){
                        $(this).remove();
                    });
                });

                tbody.children().each(function (){
                    $(this).slideUp(400 ,function (){
                        $(this).remove();
                    });
                });

                $(event.target).parents(".table__row").find(".more-btn").text("Подробнее");

            }
        });
    function tableMain() {
        let tableWidth = $(".thead").width();
        let cellWidth = $(".table__row .table__row-cell").outerWidth();
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
            topCell.last().append("<a class='more-btn'>Подробнее</a>");
            let bottomCell = cellArray.slice(cellCount, cellArray.length + 1);
            bottomCell.css("display", "none");

        });

    }
    $(window).resize(function () {
        tableMain();
    });
</script>
