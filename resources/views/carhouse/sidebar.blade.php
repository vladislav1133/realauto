<!-- Sidebar start-->
<aside class="sidebar">
    <div class="section-heading">
        <div>
            <i class="fa fa-search"></i>
            <h2>Поиск</h2>
            <div class="border"></div>
            <h4>Искать автомобиль</h4>

            <div class="search-label">Марка:</div>
            <select id="search-marks" class="selectpicker">
                <option>Любая</option>
                @if($carMarks)
                    @foreach($carMarks as $mark)
                        <option>{{$mark}}</option>
                    @endforeach
                @endif
            </select>
            <div class="search-label">Модель:</div>
            <select id="search-models" class="selectpicker">
                <option>Любая</option>
            </select>
            <div class="search-label">Год:</div>
            <select id="search-years" class="selectpicker">
                <option>Любой</option>
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