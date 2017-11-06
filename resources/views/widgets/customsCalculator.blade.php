<div class="calculator">

            <!-- Nav tabs -->
            <ul class="nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#light-car" aria-controls="light-car" role="tab" data-toggle="tab"><img src="{{asset('public\carhouse\img\calc-lightCar.png')}}" alt=""></a></li>
                <li role="presentation"><a href="#electric-car" aria-controls="electric-car" role="tab" data-toggle="tab"><img src="{{asset('public\carhouse\img\calc-electricCar.png')}}" alt=""></a></li>
                <li role="presentation"><a href="#moto" aria-controls="moto" role="tab" data-toggle="tab"><img src="{{asset('public\carhouse\img\calc-bike.png')}}" alt=""></a></li>
            </ul>


            <!-- Tab panes -->
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="light-car">
                    <!-- Light Car -->
                    <form id="light-car-calculator" action="" class="custom-calc">
                            <div>
                                <h5>Цена авто</h5>
                            
                            
                                <input  name='price' type="number" class="form-control custom-culc__input" value="20000" min="100" max="1000000">
                            
                            
                                <select name="currency" class="form-control">
                                    <option value="EUR">€</option>
                                    <option value="USD">$</option>
                                </select>
                            </div>
                            <div>
                                <h5>Двигатель</h5>
                            
                                <select  name="drive" class="form-control">
                                    @for($i = 0.5; $i<3; $i+=0.1)

                                        <option @if($i>1.4 && $i<1.6) selected="selected" @endif value="{{$i}}">{{$i}}</option>
                                    @endfor
                                </select>


                                <select  name="fuel" class="form-control">
                                        <option value="gas">Бензин</option>
                                        <option value="diesel">Дизель</option>
                                </select>

                            </div>

                            <div class="buttonBlock">
                                <button type="submit" class="btn btn-default">Расчитать</button>
                            </div>

                            <div class="resultBlock">
                                <div class="check">
                                </div>
                            </div>
                    </form>
                </div>
                <div role="tabpanel" class="tab-pane" id="electric-car">
                    <!-- Electric Car -->
                    <form id="electric-car-calculator" class="custom-calc">
                            <div>
                                <h5>Цена авто</h5>
                            
                            
                                <input name="price" type="number" class="form-control custom-culc__input" value="20000" min="100" max="1000000">
                            
                            
                                <select name="currency" class="form-control">
                                    <option value="EUR">€</option>
                                    <option value="USD">$</option>
                                </select>
                            </div>
                            <div>
                                <h5>Мощность</h5>
                            
                                <input name="power" type="number" class="form-control custom-culc__input" value="80" min="1" max="10000">
                            </div>

                            <div class="buttonBlock">
                                <button type="submit" class="btn btn-default">Расчитать</button>
                            </div>

                            <div class="resultBlock">
                                <div class="check">
                                </div>
                            </div>
                    </form>
                </div>
                <div role="tabpanel" class="tab-pane" id="moto">

                    <form id="moto-calculator" action="" class="custom-calc">
                            <div>
                                <h5>Цена авто</h5>
                            
                                <input  name='price' type="number" class="form-control custom-culc__input" value="20000" min="100" max="1000000">
                                
                                <select name="currency" class="form-control">
                                    <option value="EUR">€</option>
                                    <option value="USD">$</option>
                                </select>
                            </div>
                            <div>
                                <h5>Двигатель</h5>
                            
                                <input  name='drive' type="number" class="form-control custom-culc__input" value="150" min="10" max="20000">
                            </div>

                            <div class="buttonBlock">
                                <button type="submit" class="btn btn-default">Расчитать</button>
                            </div>

                            <div class="resultBlock">
                                <div class="check">
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>

</div>
