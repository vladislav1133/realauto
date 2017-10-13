<form id="customs-calculator" class="custom-calc">

    <div class="container">

        <h2>Калькулятор </h2>

        <div class="col-xs-12">
            <h5>Цена авто</h5>
        </div>
        <div class="col-xs-11">
            <input id="input-price" type="number" class="form-control custom-culc__input" value="5000">
        </div>
        <div class="col-xs-1">
            <select id="select-currency" class="selectpicker search__select">
                <option value="EUR">€</option>
                <option value="USD">$</option>
            </select>
        </div>
        <div class="col-xs-12">
            <h5>Двигатель</h5>
        </div>
        <div class="col-xs-12">
            <select id="search-drive-amount" class="selectpicker search__select">
                @for($i = 0.5; $i<3; $i+=0.1)

                    <option @if($i==0.5) selected="selected" @endif value="{{$i}}">{{$i}}</option>
                @endfor
            </select>
        </div>

        <div class="col-xs-4">
            <button type="submit" class="btn btn-default">count</button>
        </div>

        <div class="col-xs-12">
            <div class="row">
                <div id="check">
                </div>
            </div>

        </div>
    </div>



</form>