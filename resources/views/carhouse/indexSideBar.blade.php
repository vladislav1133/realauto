

<aside class="sidebar">
    <div id="search" class="section-heading">
        <div>
            <i class="fa fa-search"></i>
            <h2>Поиск</h2>
            <div class="border"></div>
            <h4>Искать автомобиль</h4>

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


            <button id="search-auto" class="btn search-auto">Искать</button>
            <button id="sad-auto" class="btn search-auto">Избранное</button>
            <a href="#contact-us-popup" id="contact-up-btn" class="btn search-auto">Связатся с нами</a>
        </div>
    </div>
</aside>

