
@if($cars)
    <div class="table-container">
        <table class="table car-table" data-toggle-column="last" data-paging="true" data-empty="Автомобили не найдеы"
               style="background: #fff"
               data-page-size="15">
            <thead>
            <tr>
                <th>Фото</th>
                <th>Цена</th>
                <th data-breakpoints="xs">Год</th>
                <th>Марка</th>
                <th data-breakpoints="xs">Модель</th>
                <th data-breakpoints="xs">Двигатель</th>
                <th data-breakpoints="xs sm">Топливо</th>
                <th data-breakpoints="xs sm">КПП</th>
                <th data-breakpoints="xs sm">Одометр</th>
                <th data-breakpoints="xs sm">Тип привода</th>
            </tr>
            </thead>
            <tbody id="table-body">
            @foreach($cars as $k=>$car)
                <tr @if(($k +1)%2 === 0)class="second-row"@endif>


                    <td>
                        <div style="position: relative; width: 100px; margin: 0 auto;">

                            <a href="{{route('availablecars.show',$car->id)}}">
                                <img class="product__img"
                                     src="{{$car->path_to_image}}"
                                     alt=""
                                     title="Смотреть фото"
                                     data-car-id="{{$car->car_id}}"
                                     onError="this.onerror=null;this.src='/carhouse/img/car-blank.png';">
                            </a>
                        </div>

                    </td>

                    <td>{{$car->price}} $</td>

                    <td>{{$car->year}}</td>

                    <td>{{$car->mark}}</td>

                    <td>{{$car->model}}</td>

                    <td>{{$car->engine_type}}</td>

                    <td>{{$car->fuel}}</td>

                    <td>{{$car->transmission}}</td>

                    <td>{{$car->odometer}} km</td>

                    <td><div title="{{$language['drive'][$car->drive] or ''}}">{{$car->drive}}</div></td>

                </tr>
            @endforeach
            </tbody>
        </table>
        <div class="table-pagination">
            {{$cars->links()}}
        </div>
    </div>

@endif


