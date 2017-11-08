@if($cars)
    <div class="table-container">
        <table class="table car-table" data-toggle-column="last" data-paging="true" data-empty="Автомобили не найдеы"
               style="background: #fff"
               data-page-size="15">
            <thead>
            <tr>
                <th>Фото</th>
                <th data-breakpoints="">Лот</th>
                <th data-breakpoints="xs">Год</th>
                <th>Марка</th>
                <th data-breakpoints="xs">Модель</th>
                <th data-breakpoints="xs">Двигатель</th>
                <th data-breakpoints="xs sm">Топливо</th>
                <th data-breakpoints="xs sm">КПП</th>
                <th data-breakpoints="xs sm">Одометр</th>
                <th data-breakpoints="all">Тип привода</th>
                <th data-breakpoints="all">Основные моменты</th>
                <th data-breakpoints="all">Основные повреждения</th>
                <th data-breakpoints="all">Вторичные повреждения</th>
                <th data-breakpoints="xs sm md">Дата</br> аукциона</th>
                <th data-breakpoints="xs sm md">Текушая</br> ставка</th>
                <th data-breakpoints="xs">Купить сейчас</th>
                <th data-breakpoints="all">Расположение</th>
                <th data-breakpoints="all">Тип документа</th>

            </tr>
            </thead>
            <tbody id="table-body">
            @foreach($cars as $k=>$car)
                <tr @if(($k +1)%2 === 0)class="second-row"@endif>
                    <td>
                        <a href="https://www.copart.com/lot/{{$car->lot_id}}" target="_blank">
                            <div><img class="product__img" src="{{$car->path_to_image}}" alt="" onError="this.onerror=null;this.src='/carhouse/img/car-blank.png';"></div>
                        </a>
                    </td>
                    <td>
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
                    </td>

                    <td>@if($car->year){{$car->year}}@else &mdash; @endif</td>

                    <td>@if($car->mark){{$car->mark}}@else &mdash; @endif</td>

                    <td>@if($car->model){{$car->model}}@else &mdash; @endif</td>

                    <td>@if($car->engine_type){{$car->engine_type}}@else &mdash; @endif</td>

                    <td>@if($car->fuel){{$car->fuel}}@else &mdash; @endif</td>

                    <td>@if($car->transmission){{$car->transmission}}@else &mdash; @endif</td>

                    <td>@if($car->odometer){{$car->odometer}}@else &mdash; @endif</td>

                    <td>@if($car->drive){{$car->drive}}@else &mdash; @endif</td>

                    <td>
                        @if($car->highlights)
                            <div title="{{$language['highlights'][$car->highlights] or ''}}">{{$car->highlights}}</div>
                        @else
                        &mdash;
                        @endif
                    </td>

                    <td>
                        @if($car->primary_damage)
                            <div title="{{$language['damage'][$car->primary_damage] or ''}}">{{$car->primary_damage}}</div>
                        @else
                            &mdash;
                        @endif
                    </td>

                    <td>
                        @if($car->secondary_damage)
                           <div title="{{$language['damage'][$car->secondary_damage] or ''}}">{{$car->secondary_damage}}</div>
                        @else
                            &mdash;
                        @endif
                    </td>

                    <td class="sale_date">@if($car->sale_date){{$car->sale_date}}@else &mdash; @endif</td>

                    <td>@if($car->current_bid)${{$car->current_bid}}@else &mdash; @endif</td>

                    <td>@if($car->buy_it_now)<div class="buy-now_green">${{$car->buy_it_now}}</div>@else &mdash; @endif</td>


                    <td>@if($car->location){{$car->location}}
                        <button class="btn btn-rem-loc rem-btn" data-loc="{{$car->location}}">Исключить из поиска
                        </button>@else &mdash; @endif
                    </td>

                    <td>@if($car->doc_type){{$car->doc_type}}
                        <button class="btn btn-rem-doc rem-btn" data-doc="{{$car->doc_type}}">Исключить из поиска
                        </button>@else &mdash; @endif
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
        <div class="table-pagination">
            {{$cars->links()}}
        </div>
    </div>

@endif


