
@if($cars)
    @foreach($cars as $car)
            <div class="list-car-box product">
                <div class="row">

                    <div class="col-lg-12 car-content">
                        <div class="header b-items-cars-one-info-header">
                            <h3>
                                <a>{{$car->name}} {{$car->year}}</a>
                            </h3>
                        </div>
                        <div class="line-border"></div>
                    </div>

                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 list-car-pic clearfix">
                        <img class="img-responsive product-img" src="{{$car['path_to_image']}}" alt="vencer_sarthe_supercar" >
                    </div>

                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 car-content clearfix">

                        <div class="item">

                            <div class="col-md-6 col-sm-6 col-xs-7 item__details item__details_left">
                                <p>
                                    <span>Объем:</span> {{$car->engine_type}}
                                </p>
                                <p>
                                    <span>Пробег:</span>{{$car->odometer}}
                                </p>
                                <p>
                                    <span>Трансмиссия: </span>{{$car->transmission}}
                                </p>
                                <p>
                                    <span>Лот: </span>{{$car->lot_id}}
                                </p>

                            </div>

                            <div class="col-md-6 col-sm-6 col-xs-5">
                                <p>
                                    <span>Первичные повреждения: </span>{{$car->primary_damage}}
                                </p>
                                <p>
                                    <span>Вторичные повреждения: </span>{{$car->secondary_damage}}
                                </p>
                            </div>

                            <div class="col-xs-12">
                                <a href="#contact-us-popup" class="product-price-link btn details-button btn-contact-us-popup">Рассчитать лот</a>
                                <a href="https://www.copart.com/lot/{{$car->lot_id}}" class="product-price-link btn details-button" target="_blank">Подробнее</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        @endforeach
        {{$cars->links()}}
    @endif


