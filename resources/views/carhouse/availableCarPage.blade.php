
<div class="acar-body">
    <div class="container">
        <div class="col-lg-12 col-md-12 col-xs-12">
            <div class="thumbnail acar-box acar-box_full clearfix">

                <div class="row">

                    <div class=" col-lg-6 col-md-5">
                        <div class="ac-gallery">
                            <div class="ac-gallery__body">
                                <div class="ac-gallery__img">
                                    <div >
                                        <ul id="custom-slider" class="bxslider">
                                            @foreach($car->gallery as $img)
                                                <li><img src="/{{$img}}"/></li>
                                                @endforeach
                                        </ul>
                                    </div>
                                </div>
                                <div class="ac-gallery__list ">
                                    <div id="slider-pager" class="ac-gallery__row">
                                        @foreach($car->gallery as $k=>$img)
                                        <a class="ac-gallery__item"  data-slide-index="{{$k}}" href=""><img class="ac-gallery__mini-img" src="{{$img}}"/></a>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5">
                        <div class="acar-box__main-info">
                            <h3 class="acar-box__title">
                                {{$car->mark}} {{$car->model}}, {{$car->year}}
                            </h3>

                            <div class="acar-box__price acar-box__price_full">
                                {{$car->price}} $
                            </div>

                            <div class="acar-box__stats acar-box__stats_full">
                                <div><strong>Двигатель: </strong>{{$car->engine_type}}</div>
                                <div><strong>Топливо: </strong>{{$car->fuel}}</div>
                                <div><strong>Трансмиссия: </strong>{{$car->transmission}}</div>
                                <div><strong>Привод: </strong>{{$car->drive}}</div>
                                <div><strong>Пробег: </strong>{{$car->odometer}}</div>
                            </div>

                            <div class="acar-box__addition">
                                <strong>Дополнительно: </strong>
                                {!!$car->description!!}
                            </div>

                            <div class="acar-box__property">
                                <div><strong>Комплектация</strong></div>
                                <ul class="acar-box__property-list">
                                    @if(!empty($car->equipment))

                                        @foreach($car->equipment as $item)
                                            <li><strong>* {{$item}}</strong></li>
                                        @endforeach

                                    @else

                                        <li><strong>Отсутствует</strong></li>

                                    @endif


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

        </div>
    </div>
</div>

