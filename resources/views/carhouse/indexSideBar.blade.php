

<aside class="sidebar">
    <div id="search" class="section-heading">

        <div class="row">

            <div class="col-xs-12">
                <i class="fa fa-search"></i>
                <h2>Поиск</h2>
                <div class="border"></div>
                <h4>Искать автомобиль</h4>
            </div>


            <div class="col-xs-12">
                <!--MARK-->
                <div class="search-label">Марка:</div>
                <select id="search-marks" data-size="5" data-width="220px" class="selectpicker">
                    <option>Любая</option>
                    @if($carMarks)
                        @foreach($carMarks as $mark)
                            <option>{{$mark}}</option>
                        @endforeach
                    @endif
                </select>

                <!--MODELS-->
                <div class="search-label">Модель:</div>
                <select id="search-models" data-size="5" data-width="220px" class="selectpicker">
                    <option>Любая</option>
                </select>

            </div>

            <div class="col-xs-12">

                <!--YEARS-->
                <div class="search-label">Год:</div>
                <div class="search-from">
                    <select id="search-from" data-size="5" data-width="220px"  class="selectpicker">
                        <option>От</option>
                        @if($carYears)
                            @foreach($carYears as $year)
                                <option>{{$year}}</option>
                            @endforeach
                        @endif
                    </select>
                </div>

                <div class="search-to">
                    <select id="search-to" data-size="5" data-width="220px"  class="selectpicker">
                        <option>До</option>
                        @if($carYears)
                            @foreach($carYears as $year)
                                <option>{{$year}}</option>
                            @endforeach
                        @endif
                    </select>
                </div>
            </div>



            <div class="col-xs-12">
                <div class="row">
                    <div class="search-btn-slot col-md-12 col-sm-6  col-xs-12 col-lg-12">
                        <button id="search-auto-btn" class="btn search-btn search-btn_search ">Искать</button>
                    </div>
                    <div class="search-btn-slot col-md-12 col-sm-6 col-xs-12 col-lg-12">
                        <button id="favorite-search-btn" class="btn search-btn ">Избранные</button>
                    </div>
                    <div class="search-btn-slot col-md-12 col-sm-6  col-xs-12 col-lg-12">
                        <button id="search-clear-btn" class="btn search-btn">Сборись</button>
                    </div>
                    <div class="search-btn-slot col-md-12 col-sm-6  col-xs-12 col-lg-12">
                        <a id="contact-up-btn" href="#contact-us-popup"  class="btn search-btn ">Связатся с нами</a>
                    </div>
                </div>

            </div>

        </div>
    </div>
</aside>

