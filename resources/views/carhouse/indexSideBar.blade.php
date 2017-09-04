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
            <select id="search-marks" data-size="5" data-width="240px" class="selectpicker">
                <option>Любая</option>
                @if($carMarks)
                    @foreach($carMarks as $mark)
                        <option>{{$mark}}</option>
                    @endforeach
                @endif
            </select>

            <!--MODELS-->
            <div class="search-label">Модель:</div>
            <select id="search-models" data-size="5" data-width="240px" class="selectpicker">
                <option>Любая</option>
            </select>

            <!--YEARS-->
            <div class="search-label">Год:</div>
            <select id="search-from" data-size="5" data-width="118px"  class="selectpicker">
                <option>От</option>
                @if($carYears)
                    @foreach($carYears as $year)
                        <option>{{$year}}</option>
                    @endforeach
                @endif
            </select>

            <select id="search-to" data-size="5" data-width="118px"  class="selectpicker">
                <option>До</option>
                @if($carYears)
                    @foreach($carYears as $year)
                        <option>{{$year}}</option>
                    @endforeach
                @endif
            </select>


        </div>
        <button id="search-auto" class="btn search-auto">Искать</button>
    </div>
</aside>
<!-- Sidebar end-->
