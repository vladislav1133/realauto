<aside class="sidebar">
    <div id="search" class=" search">

        <div class="row">

            <div class="col-xs-12">
                <div class="search__head">
                   <div class="row">
                       <div class="col-xs-11">
                           <b>Искать</b> автомобиль
                       </div>


                   </div>
                </div>
            </div>
            <div class="col-xs-12">
                <div class="search__label">Марка:</div>
            </div>

            <div class="search__col col-xs-12">
                <select id="search-marks" class="selectpicker search__select" data-title="Все">
                    @if($search['marks'])
                        @foreach($search['marks'] as $mark)
                            <option>{{$mark}}</option>
                        @endforeach
                    @endif
                </select>
            </div>

            <div class="col-xs-12">
                <div class="search__label">Модель:</div>
            </div>

            <div class="search__col col-xs-12">

                <select id="search-models" class="selectpicker search__select" data-title="Все">
                </select>
            </div>


            <div class="col-xs-12">
                <div class="search__label">Год:</div>
            </div>

            <div class="search__col search__col_left col-xs-6">
                <select id="search-from" class="selectpicker search__select" data-title="От">
                    @if($search['years'])
                        @foreach($search['years'] as $year)
                            <option>{{$year}}</option>
                        @endforeach
                    @endif
                </select>
            </div>

            <div class="search__col search__col_right col-xs-6">
                <select id="search-to" class="selectpicker search__select" data-title="До">
                    @if($search['years'])
                        @foreach($search['years'] as $year)
                            <option>{{$year}}</option>
                        @endforeach
                    @endif
                </select>
            </div>

            <div class="col-xs-6">
                <div class="search__label">Привод:</div>
            </div>

            <div class="col-xs-6 search__col_right">
                <div class="search__label">Топливо:</div>
            </div>

            <div class="search__col search__col_left col-xs-6">
                <select multiple id="search-drive" class="selectpicker search__select" data-actions-box="true"
                        title="Все">
                    <option value="0">Front-wheel Drive</option>
                    <option value="1">Rear-wheel Drive</option>
                    <option value="2">All Wheel Drive</option>
                </select>
            </div>

            <div class="search__col search__col_right col-xs-6">
                <select multiple id="search-fuel" class="selectpicker search__select" data-actions-box="true"
                        title="Все">
                    @if($search['fuel'])
                        @foreach($search['fuel'] as $year)
                            <option>{{$year}}</option>
                        @endforeach
                    @endif
                </select>
            </div>

            <div class="col-xs-6">
                <div class="search__label">Расположение:</div>
            </div>

            <div class="col-xs-6 search__col_right">
                <div class="search__label">Осн. моменты:</div>
            </div>

            <div class="search__col search__col_left col-xs-6">
                <select multiple id="search-location" data-live-search="true" class="selectpicker search__select"
                        data-actions-box="true" title="Все">
                    @if($search['location'])
                        @foreach($search['location'] as $year)
                            <option>{{$year}}</option>
                        @endforeach
                    @endif
                </select>
            </div>

            <div class="search__col search__col_right col-xs-6">

                    <select multiple id="search-highlight" class="selectpicker search__select" data-actions-box="true"
                            title="Все">
                        <option>ENGINE START PROGRAM</option>
                        <option>ENHANCED VEHICLES</option>
                        <option>RUNS AND DRIVES</option>
                    </select>
            </div>

            <div class="col-xs-12">
                <div class="search__label">Документы:</div>
            </div>

            <div class="search__col search__col_left col-xs-6 ">
                <select multiple id="search-doc-add" data-live-search="true" class="selectpicker search__select"
                        data-actions-box="true" title="Добавить">
                    @if($search['docType'])
                        @foreach($search['docType'] as $year)
                            <option>{{$year}}</option>
                        @endforeach
                    @endif
                </select>
            </div>

            <div class="search__col search__col_right col-xs-6 ">

                <select multiple id="search-doc-remove" data-live-search="true" class="selectpicker search__select"
                        data-actions-box="true" title="Исключить">
                    @if($search['docType'])
                        @foreach($search['docType'] as $year)
                            <option>{{$year}}</option>
                        @endforeach
                    @endif
                </select>

            </div>

            <div class="col-xs-12">
                <b>Всего: </b><span id="total-cars">{{$carsTotal}}</span>
            </div>
            <div class="col-xs-12">
                <a id="search-btn" class="btn search-btn"><span class="search-btn-title"><span
                                class="fa fa-search search-btn-icon"></span>Искать</span></a>
            </div>
            <div class="col-xs-12">
                <a id="contact-up-btn" href="#contact-us-popup" class="btn search-btn ">Связаться с нами</a>
            </div>
            <div class="col-xs-6">
                <a id="favorite-search-btn" class="btn search-btn search-btn_favorite">Избранное</a>
            </div>

        </div>
    </div>
</aside>

