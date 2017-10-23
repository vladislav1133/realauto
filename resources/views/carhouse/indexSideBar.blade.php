<aside class="sidebar">
    <div id="search" class=" search">

        <div class="row">

            <div class="col-xs-12">
                <form id="search-query" action="">

                    <!-- -------------------------->
                    <div class="input-group">
                        <input id="search-query" type="text" placeholder="Глобальный поиск" class="form-control">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="submit">
                                <i class="fa fa-search"></i>
                            </button>
                        </span>
                    </div><!-- /input-group -->
                    <!-- -------------------------->
                </form>
            </div>

            <div class="col-xs-12">
                <div class="search__head">
                    <div class="row">
                        <div class="col-xs-11">
                            <b>Искать</b> автомобиль
                            <div class="">
                                <a id="search-clear-btn" href="#">Сбросить всё</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-xs-12">
                <div class="search__label">Тип транспорта:</div>
            </div>

            <div class="search__col col-xs-12">
                <select id="search-type" class="selectpicker search__select">
                    <option value="car">Car</option>
                    <option value="moto">Moto</option>
                </select>
            </div>

            <div class="col-xs-12">
                <div class="search__label">Марка:</div>
            </div>

            <div class="search__col col-xs-12">
                <select id="search-marks" data-live-search="true" class="selectpicker search__select" data-title="Все">
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

            <div class="col-xs-12 search__col">
                <div class="search__label">Основные повреждения:</div>
            </div>

            <div class="search__col col-xs-12">
                <select id="search-damage" data-actions-box="true" multiple data-live-search="true"
                        class="selectpicker search__select" data-title="Все">
                    @if($search['damage'])
                        @foreach($search['damage'] as $pDamage)
                            <option>{{$pDamage}}</option>
                        @endforeach
                    @endif
                </select>
            </div>

            <div class="col-xs-12 search__col">
                <div class="search__label">Основные. моменты:</div>
            </div>

            <div class="search__col search__col col-xs-12">
                <select multiple id="search-highlight" class="selectpicker search__select" data-actions-box="true"
                        title="Все">
                    @if($search['highlights'])
                        @foreach($search['highlights'] as $highlight)
                            <option>{{$highlight}}</option>
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
                    @if($search['drive'])
                        @foreach($search['drive'] as $drive)
                            <option>{{$drive}}</option>
                        @endforeach
                    @endif
                </select>
            </div>

            <div class="search__col search__col_right col-xs-6">
                <select multiple id="search-fuel" class="selectpicker search__select" data-actions-box="true"
                        title="Все">
                    @if($search['fuel'])
                        @foreach($search['fuel'] as $fuel)
                            <option>{{$fuel}}</option>
                        @endforeach
                    @endif
                </select>
            </div>


            <div class="col-xs-12 search__col">
                <div class="search__label">Расположение:</div>
            </div>
            <div class="search__col search__col_left col-xs-6 ">
                <select multiple id="search-loc-add" data-live-search="true" class="selectpicker search__select"
                        data-actions-box="true" title="Добавить">
                    @if($search['location'])
                        @foreach($search['location'] as $locAdd)
                            <option>{{$locAdd}}</option>
                        @endforeach
                    @endif
                </select>
            </div>

            <div class="search__col search__col_right col-xs-6 ">

                <select multiple id="search-loc-rem" data-live-search="true" class="selectpicker search__select"
                        data-actions-box="true" title="Исключить">
                    @if($search['location'])
                        @foreach($search['location'] as $locRem)
                            <option>{{$locRem}}</option>
                        @endforeach
                    @endif
                </select>
            </div>


            <div class="col-xs-12">
                <div class="search__label">Документы:</div>
            </div>

            <div class="search__col search__col_left col-xs-6 ">
                <select multiple id="search-doc-add" data-live-search="true" class="selectpicker search__select"
                        data-actions-box="true" title="Добавить">
                    @if($search['docType'])
                        @foreach($search['docType'] as $docAdd)
                            <option>{{$docAdd}}</option>
                        @endforeach
                    @endif
                </select>
            </div>

            <div class="search__col search__col_right col-xs-6 ">

                <select multiple id="search-doc-rem" data-live-search="true" class="selectpicker search__select"
                        data-actions-box="true" title="Исключить">
                    @if($search['docType'])
                        @foreach($search['docType'] as $docRem)
                            <option>{{$docRem}}</option>
                        @endforeach
                    @endif
                </select>
            </div>
            <div class="col-xs-12">
                <input id="search-buy-now" style="display: inline-block" type="checkbox"><label
                        for="search-buy-now">Купить сейчас</label>
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
            <div class="col-xs-12">
                <div class="favorite-wrapper">
                    <a id="favorite-search-btn" class="btn search-btn search-btn_favorite">Избранное</a>
                </div>
            </div>

        </div>
    </div>
</aside>
