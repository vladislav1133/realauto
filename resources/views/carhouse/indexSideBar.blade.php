

<aside class="sidebar">
    <div id="search" class="section-heading">

        <div class="row">

            <div class="col-xs-12">
                <i class="fa fa-search"></i>
                <div class="search-title"><div style="font-size: 27px;">Поиск</div><a id="search-clear-btn" class="search-clear-btn">Сбросить</a></div>
                <div class="border"></div>
                <h4>Искать автомобиль</h4>
            </div>


            <div class="search-col col-xs-12 col-sm-6 col-md-4">

                <!--MARK-->
                <div class="search-label">Марка:</div>
                <select id="search-marks"  class="selectpicker search-select" data-title="Не выбрано">
                    @if($search['marks'])
                        @foreach($search['marks'] as $mark)
                            <option>{{$mark}}</option>
                        @endforeach
                    @endif
                </select>

                <!--MODELS-->
                <div class="search-label">Модель:</div>
                <select id="search-models" class="selectpicker search-select" data-title="Не выбрано">

                </select>

            </div>

            <div class="search-col col-xs-12 col-sm-6 col-md-4">

                <!--YEARS-->
                <div class="search-label">Год:</div>
                <div class="search-from">
                    <select id="search-from" class="selectpicker search-select" data-title="От">
                        @if($search['years'])
                            @foreach($search['years'] as $year)
                                <option>{{$year}}</option>
                            @endforeach
                        @endif
                    </select>
                </div>

                <div class="search-to">
                    <select id="search-to"  class="selectpicker search-select" data-title="До">
                        @if($search['years'])
                            @foreach($search['years'] as $year)
                                <option>{{$year}}</option>
                            @endforeach
                        @endif
                    </select>
                </div>
            </div>

            <div class="search-col col-xs-12 col-sm-6 col-md-4">
                <div class="search-label">Привод: </div>

                <div class="search-drive">
                    <select multiple id="search-drive" class="selectpicker search-select" data-actions-box="true" title="Не выбрано">
                        <option value="0">Передний</option>
                        <option value="1">Задний</option>
                        <option value="2">Полный</option>
                    </select>
                </div>

                <div class="search-label">Топливо: </div>
                <div class="search-drive">
                    <select multiple id="search-fuel" class="selectpicker search-select" data-actions-box="true" title="Не выбрано">
                        @if($search['fuel'])
                            @foreach($search['fuel'] as $year)
                                <option>{{$year}}</option>
                            @endforeach
                        @endif
                    </select>
                </div>
            </div>

            <div class="search-col col-xs-12 col-sm-6 col-md-4 ">
                <div class="search-label">Документ: </div>

                <div class="search-drive">
                    <select multiple id="search-doc-add"  data-live-search="true" class="selectpicker search-select" data-actions-box="true" title="Добавить">
                        @if($search['docType'])
                            @foreach($search['docType'] as $year)
                                <option>{{$year}}</option>
                            @endforeach
                        @endif
                    </select>
                </div>

                <div class="search-drive">
                    <select multiple id="search-doc-remove" data-live-search="true"  class="selectpicker search-select" data-actions-box="true" title="Исключить">
                        @if($search['docType'])
                            @foreach($search['docType'] as $year)
                                <option>{{$year}}</option>
                            @endforeach
                        @endif
                    </select>
                </div>

            </div>

            <div class="search-col col-xs-12 col-sm-6 col-md-4">
                <div class="search-label">Основные моменты: </div>

                <div class="search-drive">
                    <select multiple id="search-highlight" class="selectpicker search-select" data-actions-box="true" title="Не выбрано">
                        <option>ENGINE START PROGRAM</option>
                        <option>ENHANCED VEHICLES</option>
                        <option>RUNS AND DRIVES</option>
                    </select>
                </div>

                <div class="search-label">Расположение: </div>

                <div class="search-drive">
                    <select multiple id="search-highlight" data-live-search="true" class="selectpicker search-select" data-actions-box="true" title="Не выбрано">
                        @if($search['location'])
                            @foreach($search['location'] as $year)
                                <option>{{$year}}</option>
                            @endforeach
                        @endif
                    </select>
                </div>
            </div>

            <div class="col-xs-12">
                <b>Total: </b><span id="total-cars">{{$carsTotal}}</span>
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

