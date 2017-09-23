

@if($cars)
    <div class="table-container">
        <table class="table car-table"  data-toggle-column="last" data-paging="true" data-empty="Автомобили не найдеы" style="background: #fff"
               data-page-size="15">
            <thead>
            <tr>
                <th>Фото</th>
                <th data-breakpoints="">Лот</th>
                <th data-breakpoints="xs">Год</th>
                <th>Марка</th>
                <th data-breakpoints="xs">Модель</th>
                <th data-breakpoints="xs">Двигателя</th>
                <th data-breakpoints="xs sm">Топливо</th>
                <th data-breakpoints="xs sm">Трансмисия</th>
                <th data-breakpoints="xs">Одометр</th>
                <th data-breakpoints="all">Тип привода</th>
                <th data-breakpoints="all">Основные повреждения</th>
                <th data-breakpoints="all">Вторичные повреждения</th>
                <th data-breakpoints="all">Купить сейчас</th>
                <th data-breakpoints="all">Дата аукциона</th>
                <th data-breakpoints="all">Расположение сейчас</th>
                <th data-breakpoints="all">Текушая цена</th>
                <th data-breakpoints="all">Тип документа</th>
            </tr>
            </thead>
            <tbody id="table-body">
            @foreach($cars as $k=>$car)
                <tr>
                    <td>
                        <a href="https://www.copart.com/lot/{{$car->lot_id}}" target="_blank"><div><img class="product__img" src="{{$car->path_to_image}}" alt=""></div></a>
                    </td>
                    <td>
                        <div>
                            <div>
                                <a href="https://www.copart.com/lot/{{$car->lot_id}}" target="_blank">
                                    {{$car->lot_id}}
                                </a>
                            </div>
                            <div>
                                <button class="product__btn favorite__btn" data-lot="{{$car->lot_id}}" title="Добавить в избранное"><i class="fa fa-bookmark-o"></i></button>
                            </div>
                        </div>
                    </td>
                    <td>{{$car->year}}</td>
                    <td>{{$car->name_delay->mark}}</td>
                    <td>{{$car->name_delay->model}}</td>
                    <td>{{$car->engine_type}}</td>
                    <td>{{$car->fuel}}</td>
                    <td>@if($car->transmission){{$car->transmission}}@else &mdash; @endif</td>
                    <td>{{$car->odometer}}</td>
                    <td>@if($car->drive){{$car->drive}}@else &mdash; @endif</td>
                    <td>@if($car->primary_damage){{$car->primary_damage}} @else &mdash; @endif</td>
                    <td>@if($car->secondary_damage){{$car->secondary_damage}} @else &mdash; @endif</td>
                    <td>@if($car->buy_it_now){{$car->buy_it_now}} @else &mdash; @endif</td>
                    <td>&mdash;</td>
                    <td>&mdash;</td>
                    <td>@if($car->current_bid){{$car->current_bid}}@else &mdash; @endif</td>
                    <td>@if($car->doc_type){{$car->doc_type}}@else &mdash; @endif</td>

                </tr>
            @endforeach
            </tbody>
        </table>
        <div class="table-pagination">
            {{$cars->links()}}
        </div>
        </div>

@endif


