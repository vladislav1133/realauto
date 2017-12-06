
@if($cars)
    <div class="table-container">
        <div class="table car-table" data-empty="Автомобили не найдеы">
            <div class="thead" id="vueTest">
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

                <div class="table__row" v-for="car in cars">
                    <!--@{{item.path_to_image}}-->
                    <div class="table__row-cell" style="position: relative; width: 100px; margin: 0 auto;">
                        <img class="product__img"
                             src="@{{car.path_to_image}}"
                             alt=""
                             title="Смотреть фото"
                             data-car-id="@{{car.car_id}}"
                             onError="this.onerror=null;this.src='/carhouse/img/car-blank.png';"
                        >
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
                            <div>
                                <a href="@{{car.url}}" target="_blank">@{{car.lot_id}}</a>
                            </div>
                            <div style="display: inline" class="favorite__btn_wrap">
                                <button class="product__btn favorite__btn" data-lot="@{{car.lot_id}}"
                                        title="Добавить в избранное"><i class="fa fa-bookmark-o"></i>
                                </button>
                            </div>

                            <a v-if="car.source === 'copart.com'" style="font-size: 25px" href="@{{car.url}}" target="_blank">C</a>
                            <a v-else style="font-size: 25px; color: #A20106;" href="@{{car.url}}" target="_blank">A</a>
                        </div>
                    </div>
                    <div class="table__row-cell">@{{car.year}}</div>
                    <div class="table__row-cell">@{{car.brand}}</div>
                    <div class="table__row-cell">@{{car.model}}</div>
                    <div class="table__row-cell">@{{car.engine_type}}</div>
                    <div class="table__row-cell">@{{car.fuel}}</div>
                    <div class="table__row-cell">@{{car.transmission}}</div>
                    <div class="table__row-cell">@{{car.odometer}}</div>
                    <div class="table__row-cell">@{{car.drive}}</div>
                    <div class="table__row-cell">@{{car.highlights}}</div>
                    <div class="table__row-cell"></div>
                    <div class="table__row-cell"></div>
                    <div class="table__row-cell"></div>
                    <div class="table__row-cell"></div>
                    <div class="table__row-cell"></div>
                    <div class="table__row-cell"></div>
                    <div class="table__row-cell"></div>

                </div>
            </div>
        </div>
        <div class="table-pagination">
        </div>
    </div>

@endif