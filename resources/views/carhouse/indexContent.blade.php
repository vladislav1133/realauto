@if($cars)
    <div class="table-container">
        <div class="table car-table" data-empty="Автомобили не найдеы">
            <div class="thead">
                <div>Фото</div>
                <div>Лот</div>
                <div>Год</div>
                <div>Марка</div>
                <div>Модель</div>
                <div>Двигатель</div>
                <div>Топливо</div>
                <div>КПП</div>
                <div>Одометр</div>
                <div>Тип привода</div>
                <div>Основные моменты</div>
                <div>Основные повреждения</div>
                <div>Вторичные повреждения</div>
                <div>Дата</br> аукциона</div>
                <div>Текушая</br> ставка</div>
                <div>Купить сейчас</div>
                <div>Расположение</div>
                <div>Тип документа</div>
            </div>
            <div class="tbody" id="table-body">
            @foreach($cars as $k=>$car)
                <div class="table__row" @if(($k +1)%2 === 0)class="second-row"@endif>
                    <div class="table__row-cell">
                        <a href="https://www.copart.com/lot/{{$car->lot_id}}" target="_blank">
                            <div><img class="product__img" src="{{$car->path_to_image}}" alt=""></div>
                        </a>
                    </div>
                    <div class="table__row-cell">
                        <div>
                            <div>
                                <a href="https://www.copart.com/lot/{{$car->lot_id}}" target="_blank">
                                    {{$car->lot_id}}
                                </a>
                            </div>
                            <div class="favorite__btn_wrap">
                                <button class="product__btn favorite__btn" data-lot="{{$car->lot_id}}"
                                        title="Добавить в избранное"><i class="fa fa-bookmark-o"></i></button>
                            </div>
                        </div>
                    </div>

                    <div class="table__row-cell">@if($car->year){{$car->year}}@else &mdash; @endif</div>

                    <div class="table__row-cell">@if($car->mark){{$car->mark}}@else &mdash; @endif</div>

                    <div class="table__row-cell">@if($car->model){{$car->model}}@else &mdash; @endif</div>

                    <div class="table__row-cell">@if($car->engine_type){{$car->engine_type}}@else &mdash; @endif</div>

                    <div class="table__row-cell">@if($car->fuel){{$car->fuel}}@else &mdash; @endif</div>

                    <div class="table__row-cell">@if($car->transmission){{$car->transmission}}@else &mdash; @endif</div>

                    <div class="table__row-cell">@if($car->odometer){{$car->odometer}}@else &mdash; @endif</div>

                    <div class="table__row-cell">@if($car->drive){{$car->drive}}@else &mdash; @endif</div>

                    <div class="table__row-cell">
                        @if($car->highlights)
                            <div title="{{$language['highlights'][$car->highlights] or ''}}">{{$car->highlights}}</div>
                        @else
                        &mdash;
                        @endif
                    </div>

                    <div class="table__row-cell">
                        @if($car->primary_damage)
                            <div title="{{$language['damage'][$car->primary_damage] or ''}}">{{$car->primary_damage}}</div>
                        @else
                            &mdash;
                        @endif
                    </div>

                    <div class="table__row-cell">
                        @if($car->secondary_damage)
                           <div title="{{$language['damage'][$car->secondary_damage] or ''}}">{{$car->secondary_damage}}</div>
                        @else
                            &mdash;
                        @endif
                    </div>

                    <div class="table__row-cell sale_date">@if($car->sale_date){{$car->sale_date}}@else &mdash; @endif</div>

                    <div class="table__row-cell">@if($car->current_bid)${{$car->current_bid}}@else &mdash; @endif</div>

                    <div class="table__row-cell">@if($car->buy_it_now)<div class="buy-now_green">${{$car->buy_it_now}}</div>@else &mdash; @endif</div>


                    <div class="table__row-cell">@if($car->location){{$car->location}}
                        <button class="btn btn-rem-loc rem-btn" data-loc="{{$car->location}}">Исключить из поиска
                        </button>@else &mdash; @endif
                    </div>

                    <div class="table__row-cell">@if($car->doc_type){{$car->doc_type}}
                        <button class="btn btn-rem-doc rem-btn" data-doc="{{$car->doc_type}}">Исключить из поиска
                        </button>@else &mdash; @endif
                    </div>
                </div>
            @endforeach
            </div>
        </div>
        <div class="table-pagination">
            {{$cars->links()}}
        </div>
    </div>

@endif