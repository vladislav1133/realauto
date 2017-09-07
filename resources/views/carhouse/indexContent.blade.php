
@if($cars)
    @foreach($cars as $car)
            <div class="list-car-box product">
                <div class="row">

                    <div class="col-lg-12 car-content">
                        <div class="header b-items-cars-one-info-header">
                            <h3>
                                <a>{{$car->name->mark}} {{$car->name->model}}</a>
                            </h3>
                        </div>
                        <div class="line-border"></div>
                    </div>

                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 list-car-pic clearfix">
                        <img class="img-responsive product-img" src="{{$car['path_to_image']}}" alt="vencer_sarthe_supercar" >
                    </div>

                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 car-content clearfix">

                        <div class="item">

                            <div class="col-md-6 col-sm-6 col-xs-7 col-pad">
                                <p>
                                    <span>Марка:</span> {{$car->name->mark}}
                                </p>
                                <p>
                                    <span>Модель:</span>{{$car->name->model}}
                                </p>
                                <p>
                                    <span>Год: </span>{{$car->year}}
                                </p>
                            </div>

                            <div class="col-md-6 col-sm-6 col-xs-5 col-pad">
                                <p>
                                    <span>Пробег: </span>{{$car->odometer}}
                                </p>
                                <p>
                                    <span>Обьем: </span>{{$car->engine_type}}
                                </p>
                            </div>

                        </div>

                        <a href="#contact-us-popup" class="product-price-link btn details-button btn-contact-us-popup">Узнать стоимость</a>
                    </div>

                </div>
            </div>
        @endforeach
        {{$cars->links()}}
    @endif


