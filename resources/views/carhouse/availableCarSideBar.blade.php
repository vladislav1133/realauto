<aside class="sidebar">


    <div id="search" class="search">

        <div class="row">

            <div class="col-xs-12">
                <div class="search__head">
                    <b>Искать транспорт</b>
                    <button id="search-btn-top" class="search__head-btn"><i class="fa fa-search"></i></button>
                </div>
            </div>
            <div class="col-xs-12">
                <b>Найдено: </b><span class="total-cars">{{$carsTotal}}</span>
            </div>
            <div class="col-xs-12">
                <a id="search-clear-btn" href="#">Сбросить всё</a>
            </div>
            <div class="col-xs-12">
                <div class="checkbox">
                    <label>
                        <input id="search-buy-now-top" type="checkbox" value="">
                        <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                        <b>Купить сейчас</b>
                    </label>
                </div>
            </div>


            <div class="col-xs-12">
                <div class="search__label">Марка:</div>
            </div>

            <div class="search__col col-xs-12">
                <select
                        id="search-marks"
                        class="selectpicker search__select"
                        data-live-search="true"
                        data-title="Все"
                >
                    @if(array_key_exists('marks',$search))
                        <option value="all" selected>ВСЕ</option>
                        @foreach($search['marks'] as $mark)
                            <option value="{{mb_strtoupper($mark)}}">{{mb_strtoupper($mark)}}</option>
                        @endforeach
                    @endif
                </select>
            </div>

            <div class="col-xs-12">
                <div class="search__label">Модель:</div>
            </div>

            <div class="search__col col-xs-12">

                <select
                        id="search-models"
                        class="selectpicker search__select"
                        data-title="Все"
                        multiple
                        data-live-search="true"
                        data-actions-box="true"
                        data-select-all-text="Выделить все"
                        data-deselect-all-text="Убрать все"
                >
                </select>
            </div>


            <div class="col-xs-12">
                <div class="search__label">Год:</div>
            </div>

            <div class="search__col search__col_left col-xs-6">
                <select
                        id="search-from"
                        class="selectpicker search__select"
                        data-title="От"
                >
                    @if(array_key_exists('years',$search))

                        @foreach($search['years'] as $year)
                            <option value="{{$year}}">{{$year}}</option>
                        @endforeach
                    @endif
                </select>
            </div>

            <div class="search__col search__col_right col-xs-6" style="margin-bottom: 20px;">
                <select
                        id="search-to"
                        class="selectpicker search__select"
                        data-title="До"
                >
                    @if(array_key_exists('years',$search))

                        @foreach($search['years'] as $year)
                            <option value="{{$year}}">{{$year}}</option>
                        @endforeach
                    @endif
                </select>
            </div>


            <div class="col-xs-12">
                <a id="search-btn" class="btn search-btn"><span class="search-btn-title"><span
                                class="fa fa-search search-btn-icon"></span>Искать</span></a>
            </div>
            <div class="col-xs-12">
                <a id="contact-us-btn" href="#contact-us-popup" class="btn search-btn ">Связаться с нами</a>
            </div>
        </div>
    </div>
</aside>
