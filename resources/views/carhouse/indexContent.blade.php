@if($cars)
    <div class="row">
        @foreach($cars as $k=>$car)
            <div class="col-lg-6">
                <div class="list-car-box product ">
                    <div class="row">


                        <div class="product__head">
                            <h3 class="product__title">
                                <a href="https://www.copart.com/lot/{{$car->lot_id}}"
                                   class="product__name">{{$car->year}} {{$car->name}}, №{{$car->lot_id}} </a>
                            </h3>
                        </div>


                        <div class="col-xs-12">
                            <a href="https://www.copart.com/lot/{{$car->lot_id}}">
                                <img class="product__img" src="{{$car['path_to_image']}}"
                                     alt="car photo">
                            </a>

                        </div>

                        <div class="col-lg-12 product__list">

                            <p class="col-xs-12 product__property">
                                <span>Аукцион:</span> copart.com
                            </p>

                            <p class="col-xs-12 product__property">
                                <span>Тип Двигателя:</span> {{$car->engine_type}}
                            </p>

                            <p class="col-xs-12 product__property">
                                <span>Топливо:</span> {{$car->fuel}}
                            </p>

                            <p class="col-xs-12 product__property">
                                <span>Трансмиссия: </span>@if($car->transmission){{$car->transmission}}
                                @else &mdash; @endif
                            </p>

                            <p class="col-xs-12 product__property">
                                <span>Одометр:</span>{{$car->odometer}}
                            </p>

                            <p class="col-xs-12 product__property">
                                <span>Основные повреждения: </span>@if($car->primary_damage){{$car->primary_damage}}
                                @else &mdash; @endif
                            </p>

                            <p class="col-xs-12 product__property">
                                <span>Вторичные повреждения: </span>@if($car->secondary_damage){{$car->secondary_damage}}
                                @else &mdash; @endif
                            </p>

                            <p class="col-xs-12 product__property">
                                <span>Расположение сейчас: </span>@if($car->location){{$car->location}}
                                @else &mdash; @endif
                            </p>

                            <p class="col-xs-12 product__property">
                                <span>Дата Аукциона: </span>&mdash;
                            </p>

                            <p class="col-xs-12 product__property">
                                <span>Купить сейчас: </span>@if($car->buy_it_now){{$car->buy_it_now}}
                                @else &mdash; @endif
                            </p>
                        </div>


                        <div class="col-lg-6">
                            <a class="details-button product__btn" href="https://www.copart.com/lot/{{$car->lot_id}}"
                               target="_blank">
                                Подробнее
                            </a>
                        </div>
                        <div class="col-lg-6">
                            <button data-lot="{{$car->lot_id}}" class="details-button product__btn favorite__btn" onclick="">
                                В избранное
                            </button>
                        </div>

                        <div class="col-lg-12">
                            <a class="details-button product__btn btn-contact-us-popup" href="#contact-us-popup">
                                Рассчитать
                                лот</a>
                        </div>


                    </div>
                </div>

            </div>
        @endforeach
            {{$cars->links()}}
    </div>
@endif


