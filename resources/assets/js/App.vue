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
        <div class="thead__cell">Дата</br> аукциона</div>
        <div class="thead__cell">Текушая</br> ставка</div>
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
        <pagVue
                :current="currentPage"
                :total="total"
                :per-page="perPage"
                @page-changed="getCars"
        ></pagVue>
    </div>
        </div>
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
                        console.log(res);
                        this.cars = res.data.data.data;
                        this.currentPage = res.data.data.current_page;
                        this.total = res.data.data.total;
                    });
            }


        },
        created: function (){
            this.getCars(1, MainSearch.getSearchData());
        }
    }
</script>
