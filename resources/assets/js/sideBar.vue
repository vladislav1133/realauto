<template>
    <aside class="sidebar sticky-wrapper">

        <form id="global-search" class="global-search">


            <div class="input-group">
                <input id="search-query" type="text" placeholder="Глобальный поиск" class="form-control">
                <span class="input-group-btn">

                    <button class="btn btn-default" type="submit">
                        <i class="fa fa-search"></i>
                    </button>

                    <button type="button" class="btn btn-default global-search__info" id="global-advice">
                        <i class="fa fa-question"></i>
                        <div class="popup">Поисковые коды</br>
                            Год: 4 цифры</br>
                            Номер лота: 8 цифр</br>
                            Vin: 17 символов</br>
                            Расположение: 2 символа</br><div class="tri"></div>
                        </div>
                    </button>
                </span>
            </div><!-- /input-group -->

        </form>

        <div id="search" class="search">

            <div class="row">

                <div class="col-xs-12">
                    <div class="search__head">
                        <b>Искать транспорт</b>
                        <button id="search-btn-top" class="search__head-btn" @click="search()"><i class="fa fa-search"></i></button>
                    </div>
                </div>
                <div class="col-xs-12">
                    <b>Найдено: </b><span class="total-cars">{{total}}</span>
                </div>
                <div class="col-xs-12">
                    <a id="search-clear-btn" href="#">Сбросить всё</a>
                </div>
                <div class="col-xs-12">
                    <div class="checkbox">
                        <label>
                            <input id="search-buy-now-top" type="checkbox" value="">
                            <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                            <b>Купить сейчас</b>
                        </label>
                    </div>
                </div>

                <div class="col-xs-12">
                    <div class="search__label">Источник:</div>
                </div>

                <div class="search__col col-xs-12">
                    <select
                            id="search-source"
                            class="selectpicker search__select"
                            data-title="Все"
                    >
                        <option value="all" selected>ВСЕ</option>
                        <option id="clickTarget" value="iaai.com">IAAI</option>
                        <option value="copart.com">COPART</option>
                    </select>
                </div>

                <div class="col-xs-12">
                    <div class="search__label">Тип транспорта:</div>
                </div>


                <div class="search__col col-xs-12">
                    <select
                            id="search-type"
                            class="selectpicker search__select"
                            data-title="Все"
                    >
                        <option value="AUTOMOBILE" selected>АВТОМОБИЛИ</option>
                        <option value="MOTORCYCLE">МОТОЦИКЛЫ</option>


                    </select>
                </div>


                <div class="col-xs-12">
                    <div class="search__label">Марка:</div>
                </div>

                <div class="search__col col-xs-12">
                    <select
                            id="search-marks"
                            class="selectpicker search__select"
                            data-live-search="true"
                            data-title="Все"
                    >

                        <option value="all" selected>ВСЕ</option>

                        <option v-for="mark in options.marks" :value="mark">{{mark}}</option>

                    </select>
                </div>

                <div class="col-xs-12">
                    <div class="search__label">Модель:</div>
                </div>

                <div class="search__col col-xs-12">

                    <select
                            id="search-models"
                            class="selectpicker search__select"
                            data-title="Все"
                            multiple
                            data-live-search="true"
                            data-actions-box="true"
                            data-select-all-text="Выделить все"
                            data-deselect-all-text="Убрать все"
                    >
                    </select>
                </div>


                <div class="col-xs-12">
                    <div class="search__label">Год:</div>
                </div>

                <div class="search__col search__col_left col-xs-6">
                    <select
                            id="search-from"
                            class="selectpicker search__select"
                            data-title="От"
                    >

                        <option value="" selected ></option>

                    </select>
                </div>

                <div class="search__col search__col_right col-xs-6">
                    <select
                            id="search-to"
                            class="selectpicker search__select"
                            data-title="До"
                    >

                        <option value="" selected ></option>

                    </select>
                </div>

                <div class="col-xs-12 search__col">
                    <div class="search__label">Основные моменты:</div>
                </div>

                <div class="search__col search__col col-xs-12">
                    <select
                            id="search-highlight"
                            class="selectpicker search__select"
                            multiple
                            data-title="Все"
                            data-actions-box="true"
                            data-select-all-text="Выделить все"
                            data-deselect-all-text="Убрать все"
                    >

                        <option value=""></option>

                    </select>
                </div>

                <div class="col-xs-12 search__col">
                    <div class="search__label">Основные повреждения:</div>
                </div>

                <div class="search__col col-xs-12">
                    <select
                            id="search-damage"
                            class="selectpicker search__select"
                            multiple
                            data-title="Все"
                            data-live-search="true"
                            data-actions-box="true"
                            data-select-all-text="Выделить все"
                            data-deselect-all-text="Убрать все"
                    >
                        <option value=""></option>
                    </select>
                </div>

                <div class="col-xs-12 search__col">
                    <div class="search__label">Привод:</div>
                </div>

                <div class="search__col col-xs-12">
                    <select
                            id="search-drive"
                            class="selectpicker search__select"
                            multiple
                            data-title="Все"
                            data-actions-box="true"
                            data-select-all-text="Выделить все"
                            data-deselect-all-text="Убрать все"
                    >

                        <option value=""></option>

                    </select>
                </div>

                <div class="col-xs-12 search__col">
                    <div class="search__label">Топливо:</div>
                </div>

                <div class="search__col col-xs-12">
                    <select
                            id="search-fuel"
                            class="selectpicker search__select"
                            multiple
                            data-title="Все"
                            data-actions-box="true"
                            data-select-all-text="Выделить все"
                            data-deselect-all-text="Убрать все"
                    >

                        <option value=""></option>

                    </select>
                </div>


                <div class="col-xs-12 search__col">
                    <div class="search__label">Расположение:</div>
                </div>
                <div class="search__col search__col_left col-xs-6 ">
                    <select
                            id="search-loc-add"
                            class="selectpicker search__select"
                            multiple
                            data-title="Добавить"
                            data-live-search="true"
                            data-actions-box="true"
                            data-select-all-text="Выделить все"
                            data-deselect-all-text="Убрать все"
                    >

                        <option value=""></option>

                    </select>
                </div>

                <div class="search__col search__col_right col-xs-6 ">

                    <select
                            id="search-loc-rem"
                            class="selectpicker search__select"
                            multiple
                            data-title="Исключить"
                            data-live-search="true"
                            data-actions-box="true"
                            data-select-all-text="Выделить все"
                            data-deselect-all-text="Убрать все"
                    >

                        <option value=""></option>

                    </select>
                </div>


                <div class="col-xs-12">
                    <div class="search__label">Документы:</div>
                </div>

                <div class="search__col search__col_left col-xs-6 ">
                    <select
                            id="search-doc-add"
                            class="selectpicker search__select"
                            multiple
                            data-title="Добавить"
                            data-live-search="true"
                            data-actions-box="true"
                            data-select-all-text="Выделить все"
                            data-deselect-all-text="Убрать все"
                    >

                        <option value=""></option>

                    </select>
                </div>

                <div class="search__col search__col_right col-xs-6 ">

                    <select
                            id="search-doc-rem"
                            class="selectpicker search__select"
                            multiple
                            data-title="Исключить"
                            data-live-search="true"
                            data-actions-box="true"
                            data-select-all-text="Выделить все"
                            data-deselect-all-text="Убрать все"
                    >

                        <option value=""></option>

                    </select>
                </div>
                <div class="col-xs-12">
                    <div class="checkbox">
                        <label>
                            <input id="search-buy-now-bottom" type="checkbox" value="">
                            <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                            <b>Купить сейчас</b>
                        </label>
                    </div>
                </div>

                <div class="col-xs-12">
                    <b>Найдено: </b><span class="total-cars"></span>
                </div>
                <div class="col-xs-12">
                    <a id="search-btn" class="btn search-btn"><span class="search-btn-title"><span
                            class="fa fa-search search-btn-icon"></span>Искать</span></a>
                </div>
                <div class="col-xs-12">
                    <a id="contact-us-btn" href="#contact-us-popup" class="btn search-btn ">Связаться с нами</a>
                </div>
                <div class="col-xs-12">
                    <div class="favorite-wrapper">
                        <a id="favorite-search-btn" class="btn search-btn search-btn_favorite">Избранное</a>
                    </div>
                </div>

            </div>
        </div>
    </aside>

</template>

<script>
    import {get} from './helpers/api.js';
    export default {
        props: ["total"],
        data(){
            return{
                options: {}
            }
        },
        methods: {
            getOptions: function () {

                get(`cars/property/copart.com/AUTOMOBILE`)
                    .then((res) => {
                        this.options = res.data
                    }).catch(function (error) {
                        console.log(error)
                    });
            },
            search: function(){
                this.$emit('search', 1, this.$parent.$options.methods.getSearchData());
            },
            updateOption: function () {

            }
        },
        created: function (){
            this.getOptions();
        },
        mounted: function () {
            //let b1 = document.querySelector("#clickTarget");
            //b1.onclick = bc;
            //function bc(){};
            //$(".search__select:first").addClass("open");
            //$('.dropdown-menu.inner:first').click()
            //console.log($(".dropdown-menu.inner:first"))
            window.onload=function(){
                setTimeout(function(){
                    $(".search__select:first").addClass("open");
                    $(".inner:first").children().first().next().triggerHandler("click");

                },2000);
            }


            //$(".selectpicker").trigger("changed.bs.select")
        }
    }
</script>