'use strict';

let vueTable = Vue.component('table-vue', {
    props: ['cars'],
    template: `
                    <div class="table__row-cell" style="position: relative; width: 100px; margin: 0 auto;">
                   
                        <img class="product__img"
                             src="{{car.path_to_image}}"
                             title="Смотреть фото"
                             data-car-id="{{car.lot_id}}"
                             onError="this.onerror=null;this.src='/carhouse/img/car-blank.png';">
                        <div v-if="car.highlights==='RUN AND DRIVE'" title="На ходу" style="    cursor: pointer;
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
                                <a href="{{car.url}}" target="_blank">{{car.lot_id}}</a>
                            </div>
                            <div style="display: inline" class="favorite__btn_wrap">
                                <button class="product__btn favorite__btn" data-lot="{{car.lot_id}}"
                                        title="Добавить в избранное"><i class="fa fa-bookmark-o"></i>
                                </button>
                            </div>
                            <a v-if="car.source === 'copart.com'" style="font-size: 25px; margin-left: 7px;" href="{{car.url}}" target="_blank">C</a>
                            <a v-else style="font-size: 25px; color: #A20106; margin-left: 7px;" href="{{car.url}}" target="_blank">A</a>
                    </div>
                    <div class="table__row-cell">{{car.year}}</div>
                    <div class="table__row-cell">{{car.brand}}</div>
                    <div class="table__row-cell">{{car.model}}</div>
                    <div class="table__row-cell">{{car.engine_type}}</div>
                    <div class="table__row-cell">{{car.fuel}}</div>
                    <div class="table__row-cell">{{car.transmission}}</div>
                    <div class="table__row-cell">{{car.odometer}}</div>
                    <div class="table__row-cell">{{car.drive}}</div>
                    <div class="table__row-cell">{{car.highlights}}</div>
                    <div class="table__row-cell">{{car.primary_damage}}</div>
                    <div class="table__row-cell">{{car.secondary_damage}}</div>
                    <div class="table__row-cell sale_date">{{car.sale_date}}</div>
                    <div class="table__row-cell">{{car.current_bid}}</div>
                    <div class="table__row-cell buy-now_green">{{car.buy_it_now}}</div>
                    <div class="table__row-cell">
                        {{car.location}}
                        <button class="btn btn-rem-loc rem-btn" data-loc="{{car.location}}">Исключить из поиска
                        </button>
                    </div>
                    <div class="table__row-cell">
                        {{car.doc_type}}
                        <button class="btn btn-rem-doc rem-btn" data-doc="{{car.doc_type}}">Исключить из поиска
                        </button>
                    </div>

                    <div class='bottom-cell_wrap'>
                        <div class='thead-bottom'></div>
                        <div class='tbody-bottom'></div>
                    </div>
            `,
    methods: {
        test: function () {
          console.log(this.cars)
        },
        foot: function (event) {

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
        }
    },
    created: function (){
        tableMain();
        this.test()
    }
});

Vue.component('pagination', {
    template: `<div class="pagination">
      <div class="pagination__left">
        <a href="#" v-if="hasPrev()" @click.prevent="changePage(prevPage)">Предыдущая</a>
      </div>
      <div class="pagination__mid">
        <ul>
          <li v-if="hasFirst()"><a href="#" @click.prevent="changePage(1)">1</a></li>
          <li v-if="hasFirst()">...</li>
          <li v-for="page in pages">
            <a href="#" @click.prevent="changePage(page)" :class="{ current: current == page }">
              {{ page }}
            </a>
          </li>
          <li v-if="hasLast()">...</li>
          <li v-if="hasLast()"><a href="#" @click.prevent="changePage(totalPages)">{{ totalPages }}</a></li>
        </ul>
      </div>
      <div class="pagination__right">
        <a href="#" v-if="hasNext()" @click.prevent="changePage(nextPage)">Следующая</a>
      </div>
    </div>`,
    props: {
        current: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 0
        },
        perPage: {
            type: Number,
            default: 10
        },
        pageRange: {
            type: Number,
            default: 2
        }
    },
    computed: {
        pages: function() {
            var pages = []

            for(var i = this.rangeStart; i <= this.rangeEnd; i++) {
                pages.push(i)
            }

            return pages
        },
        rangeStart: function() {
            var start = this.current - this.pageRange

            return (start > 0) ? start : 1
        },
        rangeEnd: function() {
            var end = this.current + this.pageRange

            return (end < this.totalPages) ? end : this.totalPages
        },
        totalPages: function() {
            return Math.ceil(this.total/this.perPage)
        },
        nextPage: function() {
            return this.current + 1
        },
        prevPage: function() {
            return this.current - 1
        }
    },
    methods: {
        hasFirst: function() {
            return this.rangeStart !== 1
        },
        hasLast: function() {
            return this.rangeEnd < this.total
        },
        hasPrev: function() {
            return this.current > 1
        },
        hasNext: function() {
            return this.current < this.total
        },
        changePage: function(page) {
            this.$emit('page-changed', page, Search.getSearchData());
        }
    }
});

const tableVue = new Vue({
    el: '.table-container',
    data: {
        endpoint: '/api/cars',
        cars: [],
        currentPage: 1,
        perPage: 10,
        total: 0

    },
    methods: {

        getCars: function (page, searchData) {
        searchData['page'] = page;

            this.$http.post(this.endpoint, searchData).then(function (response) {

                console.log(response);
                this.cars = response.data.cars.data;
                this.currentPage = response.data.cars.current_page;
                this.total = response.data.carsCount;
            }, function (error) {
                console.log("ошибка запроса");
            });
        }

    },
    created: function (){
        this.getCars(1, Search.getSearchData());
        console.log(this.total)

    },
    // render: h => h(vueTable)

});

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
