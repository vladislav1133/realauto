<div class="calculator">

    <div class="container">
        <div>
            <!-- Nav tabs -->
            <ul class="nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#light-car" aria-controls="light-car" role="tab" data-toggle="tab">light-car</a></li>
                <li role="presentation"><a href="#electric-car" aria-controls="electric-car" role="tab" data-toggle="tab">electric-car</a></li>
                <li role="presentation"><a href="#moto" aria-controls="moto" role="tab" data-toggle="tab">moto</a></li>
            </ul>


            <!-- Tab panes -->
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="light-car">
                    <!-- Light Car -->
                    <form id="light-car-calculator" action="" class="custom-calc">
                        <div class="container">


                            <div class="col-xs-12">
                                <h5>Цена авто</h5>
                            </div>
                            <div class="col-xs-11">
                                <input  name='price' type="number" class="form-control custom-culc__input" value="20000" min="100" max="1000000">
                            </div>
                            <div class="col-xs-1">
                                <select name="currency" class="selectpicker search__select">
                                    <option value="EUR">€</option>
                                    <option value="USD">$</option>
                                </select>
                            </div>
                            <div class="col-xs-12">
                                <h5>Двигатель</h5>
                            </div>
                            <div class="col-xs-12">
                                <select  name="drive" class="selectpicker search__select">
                                    @for($i = 0.5; $i<3; $i+=0.1)

                                        <option @if($i>1.4 && $i<1.6) selected="selected" @endif value="{{$i}}">{{$i}}</option>
                                    @endfor
                                </select>
                            </div>

                            <div class="col-xs-4">
                                <button type="submit" class="btn btn-default">count</button>
                            </div>

                            <div class="col-xs-12">
                                <div class="row">
                                    <div class="check">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
                <div role="tabpanel" class="tab-pane" id="electric-car">
                    <!-- Electric Car -->
                    <form id="electric-car-calculator" class="custom-calc">

                        <div class="container">


                            <div class="col-xs-12">
                                <h5>Цена авто</h5>
                            </div>
                            <div class="col-xs-11">
                                <input name="price" type="number" class="form-control custom-culc__input" value="20000" min="100" max="1000000">
                            </div>
                            <div class="col-xs-1">
                                <select name="currency" class="selectpicker search__select">
                                    <option value="EUR">€</option>
                                    <option value="USD">$</option>
                                </select>
                            </div>
                            <div class="col-xs-12">
                                <h5>Мощность</h5>
                            </div>
                            <div class="col-xs-12">
                                <input name="power" type="number" class="form-control custom-culc__input" value="80" min="1" max="10000">
                            </div>

                            <div class="col-xs-4">
                                <button type="submit" class="btn btn-default">count</button>
                            </div>

                            <div class="col-xs-12">
                                <div class="row">
                                    <div class="check">
                                    </div>
                                </div>

                            </div>
                        </div>



                    </form>
                </div>
                <div role="tabpanel" class="tab-pane" id="moto">

                    <form id="moto-calculator" action="" class="custom-calc">
                        <div class="container">
                            <!-- Moto -->
                            <div class="col-xs-12">
                                <h5>Цена авто</h5>
                            </div>
                            <div class="col-xs-11">
                                <input  name='price' type="number" class="form-control custom-culc__input" value="20000" min="100" max="1000000">
                            </div>
                            <div class="col-xs-1">
                                <select name="currency" class="selectpicker search__select">
                                    <option value="EUR">€</option>
                                    <option value="USD">$</option>
                                </select>
                            </div>
                            <div class="col-xs-12">
                                <h5>Двигатель</h5>
                            </div>
                            <div class="col-xs-12">
                                <input  name='drive' type="number" class="form-control custom-culc__input" value="150" min="10" max="20000">
                            </div>

                            <div class="col-xs-4">
                                <button type="submit" class="btn btn-default">count</button>
                            </div>

                            <div class="col-xs-12">
                                <div class="row">
                                    <div class="check">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>


</div>
