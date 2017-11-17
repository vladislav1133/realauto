<aside class="sidebar">

    <form id="global-search" class="global-search">


            <div class="input-group">
                <input id="search-query" type="text" placeholder="Глобальный поиск" class="form-control">
                <span class="input-group-btn">

                    <button class="btn btn-default" type="submit">
                        <i class="fa fa-search"></i>
                    </button>

                    <button type="button" class="btn btn-default global-search__info" id="global-advice">
                        <i class="fa fa-question"></i>
                        <div class="popup">Поисковые коды</br>
                        Год: 4 цифры</br>
                        Номер лота: 8 цифр</br>
                        Vin: 17 символов</br>
                        Расположение: 2 символа</br><div class="tri"></div></div>
                    </button>
                </span>
            </div><!-- /input-group -->

        </form>

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
                <div class="search__label">Источник:</div>
            </div>

            <div class="search__col col-xs-12">
                <select
                        id="search-source"
                        class="selectpicker search__select"
                        data-title="Все"
                >
                    <option value="iaai.com" selected>IAAI</option>
                    <option value="copart.com">COPART</option>
                </select>
            </div>

            <div class="col-xs-12">
                <div class="search__label">Тип транспорта:</div>
            </div>


            <div class="search__col col-xs-12">
                <select
                        id="search-type"
                        class="selectpicker search__select"
                        data-title="Все"
                >
                    <option value="AUTOMOBILE" selected>АВТОМОБИЛИ</option>
                    <option value="MOTORCYCLE">МОТОЦИКЛЫ</option>


                </select>
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
                    @if($search['marks'])
                        <option value="all" selected>ВСЕ</option>
                        @foreach($search['marks'] as $mark)
                            <option value="{{$mark}}">{{$mark}}</option>
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
                    @if($search['years'])

                        @foreach($search['years'] as $year)
                            <option value="{{$year}}" @if($year == reset($search['years'])) selected @endif>{{$year}}</option>
                        @endforeach
                    @endif
                </select>
            </div>

            <div class="search__col search__col_right col-xs-6">
                <select
                        id="search-to"
                        class="selectpicker search__select"
                        data-title="До"
                >
                    @if($search['years'])

                        @foreach($search['years'] as $year)
                            <option value="{{$year}}" @if($year == end($search['years'])) selected @endif>{{$year}}</option>
                        @endforeach
                    @endif
                </select>
            </div>

            <div class="col-xs-12 search__col">
                <div class="search__label">Основные моменты:</div>
            </div>

            <div class="search__col search__col col-xs-12">
                <select
                        id="search-highlight"
                        class="selectpicker search__select"
                        multiple
                        data-title="Все"
                        data-actions-box="true"
                        data-select-all-text="Выделить все"
                        data-deselect-all-text="Убрать все"
                >
                    @if($search['highlights'])
                        @foreach($search['highlights'] as $highlight)
                            <option value="{{$highlight}}">{{$highlight}}</option>
                        @endforeach
                    @endif
                </select>
            </div>

            <div class="col-xs-12 search__col">
                <div class="search__label">Основные повреждения:</div>
            </div>

            <div class="search__col col-xs-12">
                <select
                        id="search-damage"
                        class="selectpicker search__select"
                        multiple
                        data-title="Все"
                        data-live-search="true"
                        data-actions-box="true"
                        data-select-all-text="Выделить все"
                        data-deselect-all-text="Убрать все"
                >
                    @if($search['damage'])
                        @foreach($search['damage'] as $pDamage)
                            <option value="{{$pDamage}}">{{$pDamage}}</option>
                        @endforeach
                    @endif
                </select>
            </div>

            <div class="col-xs-12 search__col">
                <div class="search__label">Привод:</div>
            </div>

            <div class="search__col col-xs-12">
                <select
                        id="search-drive"
                        class="selectpicker search__select"
                        multiple
                        data-title="Все"
                        data-actions-box="true"
                        data-select-all-text="Выделить все"
                        data-deselect-all-text="Убрать все"
                >
                    @if($search['drive'])
                        @foreach($search['drive'] as $drive)
                            <option value="{{$drive}}">{{$drive}}</option>
                        @endforeach
                    @endif
                </select>
            </div>

            <div class="col-xs-12 search__col">
                <div class="search__label">Топливо:</div>
            </div>

            <div class="search__col col-xs-12">
                <select
                        id="search-fuel"
                        class="selectpicker search__select"
                        multiple
                        data-title="Все"
                        data-actions-box="true"
                        data-select-all-text="Выделить все"
                        data-deselect-all-text="Убрать все"
                >
                    @if($search['fuel'])
                        @foreach($search['fuel'] as $fuel)
                            <option value="{{$fuel}}">{{$fuel}}</option>
                        @endforeach
                    @endif
                </select>
            </div>


            <div class="col-xs-12 search__col">
                <div class="search__label">Расположение:</div>
            </div>
            <div class="search__col search__col_left col-xs-6 ">
                <select
                        id="search-loc-add"
                        class="selectpicker search__select"
                        multiple
                        data-title="Добавить"
                        data-live-search="true"
                        data-actions-box="true"
                        data-select-all-text="Выделить все"
                        data-deselect-all-text="Убрать все"
                >
                    @if($search['location'])
                        @foreach($search['location'] as $locAdd)
                            <option value="{{$locAdd}}">{{$locAdd}}</option>
                        @endforeach
                    @endif
                </select>
            </div>

            <div class="search__col search__col_right col-xs-6 ">

                <select
                        id="search-loc-rem"
                        class="selectpicker search__select"
                        multiple
                        data-title="Исключить"
                        data-live-search="true"
                        data-actions-box="true"
                        data-select-all-text="Выделить все"
                        data-deselect-all-text="Убрать все"
                >
                    @if($search['location'])
                        @foreach($search['location'] as $locRem)
                            <option value="{{$locRem}}">{{$locRem}}</option>
                        @endforeach
                    @endif
                </select>
            </div>


            <div class="col-xs-12">
                <div class="search__label">Документы:</div>
            </div>

            <div class="search__col search__col_left col-xs-6 ">
                <select
                        id="search-doc-add"
                        class="selectpicker search__select"
                        multiple
                        data-title="Добавить"
                        data-live-search="true"
                        data-actions-box="true"
                        data-select-all-text="Выделить все"
                        data-deselect-all-text="Убрать все"
                >
                    @if($search['doc_type'])
                        @foreach($search['doc_type'] as $docAdd)
                            <option value="{{$docAdd}}">{{$docAdd}}</option>
                        @endforeach
                    @endif
                </select>
            </div>

            <div class="search__col search__col_right col-xs-6 ">

                <select
                        id="search-doc-rem"
                        class="selectpicker search__select"
                        multiple
                        data-title="Исключить"
                        data-live-search="true"
                        data-actions-box="true"
                        data-select-all-text="Выделить все"
                        data-deselect-all-text="Убрать все"
                >
                    @if($search['doc_type'])
                        @foreach($search['doc_type'] as $docRem)
                            <option value="{{$docRem}}">{{$docRem}}</option>
                        @endforeach
                    @endif
                </select>
            </div>
            <div class="col-xs-12">
                <div class="checkbox">
                    <label>
                        <input id="search-buy-now" type="checkbox" value="">
                        <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                        <b>Купить сейчас</b>
                    </label>
                </div>
            </div>

            <div class="col-xs-12">
                <b>Найдено: </b><span class="total-cars">{{$carsTotal}}</span>
            </div>
            <div class="col-xs-12">
                <a id="search-btn" class="btn search-btn"><span class="search-btn-title"><span
                                class="fa fa-search search-btn-icon"></span>Искать</span></a>
            </div>
            <div class="col-xs-12">
                <a id="contact-us-btn" href="#contact-us-popup" class="btn search-btn ">Связаться с нами</a>
            </div>
            <div class="col-xs-12">
                <div class="favorite-wrapper">
                    <a id="favorite-search-btn" class="btn search-btn search-btn_favorite">Избранное</a>
                </div>
            </div>

        </div>
    </div>
</aside>
