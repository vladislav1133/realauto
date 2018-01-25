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
                    title="Добавить в избранное" v-on:click="addFav($event)"><i class="fa fa-bookmark-o"></i>
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
            addFav: function(e){
                this.$emit('addFav', $(e.path[1]).data("lot"))
            }
        }
    }
</script>
