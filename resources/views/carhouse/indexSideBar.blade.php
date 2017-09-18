<!-- Sidebar start-->
<aside class="sidebar">
    <div class="section-heading">
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
            <select id="search-from" data-size="5" data-width="220px"  class="selectpicker">
                <option>От</option>
                @if($carYears)
                    @foreach($carYears as $year)
                        <option>{{$year}}</option>
                    @endforeach
                @endif
            </select>

            <select id="search-to" data-size="5" data-width="220px"  class="selectpicker">
                <option>До</option>
                @if($carYears)
                    @foreach($carYears as $year)
                        <option>{{$year}}</option>
                    @endforeach
                @endif
            </select>


        </div>
        <div class="row">
            <button id="search-auto" class="col-xs-6 btn search-auto">Искать</button>
            <button id="sad-auto" class="col-xs-6 btn search-auto">Избранное</button>
            <button id="seadasadsrch-auto" class="col-xs-12 btn search-auto">Связатся с нами</button>
        </div>

    </div>
</aside>
<!-- Sidebar end-->
