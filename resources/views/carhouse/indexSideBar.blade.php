

<aside class="sidebar">
    <div id="search" class="section-heading">

        <div class="row">

            <div class="col-xs-12">
                <i class="fa fa-search"></i>
                <div class="search-title"><div style="font-size: 27px;">Поиск</div><a id="search-clear-btn" class="search-clear-btn">Сбросить</a></div>
                <div class="border"></div>
                <h4>Искать автомобиль</h4>
            </div>


            <div class="search-col col-xs-12 col-sm-6 col-md-12">
                <!--MARK-->
                <div class="search-label">Марка:</div>
                <select id="search-marks" data-size="5" class="selectpicker search-select">
                    <option>Любая</option>
                    @if($carMarks)
                        @foreach($carMarks as $mark)
                            <option>{{$mark}}</option>
                        @endforeach
                    @endif
                </select>

                <!--MODELS-->
                <div class="search-label">Модель:</div>
                <select id="search-models" data-size="5" class="selectpicker search-select">
                    <option>Любая</option>
                </select>

            </div>

            <div class="search-col col-xs-12 col-sm-6 col-md-12">

                <!--YEARS-->
                <div class="search-label">Год:</div>
                <div class="search-from">
                    <select id="search-from" data-size="5"  class="selectpicker search-select">
                        <option>От</option>
                        @if($carYears)
                            @foreach($carYears as $year)
                                <option>{{$year}}</option>
                            @endforeach
                        @endif
                    </select>
                </div>

                <div class="search-to">
                    <select id="search-to" data-size="5"  class="selectpicker search-select">
                        <option>До</option>
                        @if($carYears)
                            @foreach($carYears as $year)
                                <option>{{$year}}</option>
                            @endforeach
                        @endif
                    </select>
                </div>
            </div>

            <div class="search-col col-xs-12 col-sm-6 col-md-12">
                <div class="search-label">Привод: </div>

                <div class="search-drive">
                    <select id="search-drive" data-size="5" class="selectpicker search-select">
                        <option value="1">Любой</option>
                        <option value="2">Передний</option>
                        <option value="3">Задний</option>
                        <option value="4">Полный</option>
                    </select>
                </div>

            </div>

            <div class="col-xs-12">
                <div class="row">
                    <div class="search-btn-col search-btn-slot col-md-12 col-sm-6  col-xs-12 col-lg-12">
                        <a id="search-btn" class="btn search-btn"><span class="search-btn-title"><span class="fa fa-search search-btn-icon"></span>Искать</span></a>
                    </div>
                    <div class="search-btn-col search-btn-slot col-md-12 col-sm-6 col-xs-12 col-lg-12">
                        <div class="favorite-wrapper">
                            <a id="favorite-search-btn" class="btn search-btn search-btn_favorite">Избранное</a>
                        </div>
                    </div>
                    <div class="search-btn-col search-btn-slot col-md-12 col-sm-6  col-xs-12 col-lg-12">
                        <a id="contact-up-btn" href="#contact-us-popup"  class="btn search-btn ">Связаться с нами</a>
                    </div>
                </div>

            </div>

        </div>
    </div>
</aside>

