@extends(env('THEME').'.layouts.site')

@section('header')
    @include(env('THEME').'.layouts.header')
@endsection

@section('content')
    <div class="blog-body">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-xs-12">

                    <div class="thumbnail blog-box clearfix">
                        <h3>
                            Кто мы такие?
                        </h3>
                        <p>
                            Мы - компания, предоставляющая услуги по подбору, приобретению, доставке, таможенной очистке и восстановлению автомобилей в США.
                        </p>
                        <h3>
                            Кто мы такие?
                        </h3>
                        <p>
                            Попав на главную страницу нашего сайта, Вы увидите перечень автомобилей и мотоциклов, предлагаемый передовыми аукционами США. Пользуясь нашей поисковой системой, вы сможете подобрать себе автомобиль, рассчитать его стоимость  с учетом таможенных платежей, а так же запросить расчет полной стоимости автомобиля от начала торгов до получения автомобиля в собственность.
                        </p>
                        <h3>
                            Избранное
                        </h3>
                        <p>
                            Вы можете получить комплексную оценку по всем лотам, в которых Вы заинтересованы. Для этого все автомобили и мотоциклы, которые Вас заинтересовали, отметьте флажком <b>«Избранное»</b> , нажмите на кнопку <b>«связаться с нами»</b>,  отметьте поле <b>«прикрепить избранное»</b>, заполните поля с информацией о себе,  напишите комментарий и нажмите <b>«Отправить»</b>. Пример Вы можете посмотреть на скриншотах ниже.
                        </p>
                        <img class="col-xs-12  col-md-4" src="carhouse/img/faq/favorite-car.png" alt="">
                        <img class="col-xs-12 col-md-4" src="carhouse/img/faq/search-btn.jpg" alt="">
                        <img class="col-xs-12 col-md-4" src="carhouse/img/faq/contact-us.jpg" alt="">

                        <h3>Термины</h3>
                        <p>В отличии от стандартных сайтов по продаже автомобилей – у нас Вы сможете столкнуться с терминами, которые ранее Вы не встречали. Для упрощения пользования нашим ресурсом все значения, написанные на английском языке будут переводиться на русскаий при наведении указателя мышки на необходимый параметр в таблице.
                            Ниже приведен полный перечень терминов и их перевод:
                        </p>

                        <h3>
                            Тип привода
                        </h3>
                        <table class="col-xs-12">
                            <tbody>
                            <tr>
                                <th class="col-xs-6">FRONT WHEEL DRIVE</th>
                                <th class="col-xs-6">Передний привод</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">ALL WHEEL DRIVE</th>
                                <th class="col-xs-6">Полный привод</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">REAR WHEEL DRIVE</th>
                                <th class="col-xs-6">Задний привод</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">4X4 DRIVE</th>
                                <th class="col-xs-6">Полный привод</th>
                            </tr>
                            </tbody>
                        </table>


                        <h3>
                            Основные моменты
                        </h3>

                        <table class="col-xs-12">
                            <tbody>
                            <tr>
                                <th class="col-xs-6">ENHANCED VEHICLES</th>
                                <th class="col-xs-6">Уточняйте дополнительно</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">RUN AND DRIVE</th>
                                <th class="col-xs-6">На ходу</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">ENGINE START PROGRAM</th>
                                <th class="col-xs-6">Двигатель запускается</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">VEHICLE WON\'T START</th>
                                <th class="col-xs-6">Двигатель не запускается</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">ENGINE START PROGRAM WITH JUMP</th>
                                <th class="col-xs-6">Двигатель запускается с устройством пуска</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6"> CANNOT TEST START, ENGINE DAMAGE</th>
                                <th class="col-xs-6">Тест пуска двигателя невозможно провести, двигатель поврежден</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6"> CANNOT TEST START</th>
                                <th class="col-xs-6">Тест пуска двигателя невозможно провести</th>
                            </tr>

                            <tr>
                                <th class="col-xs-6"> DID NOT TEST START</th>
                                <th class="col-xs-6">Пуск двигателя не тестировался</th>
                            </tr>
                            </tbody>
                        </table>
                        <table class="col-xs-12">
                            <tbody>
                            <tr>
                                <th class="col-xs-6">ALL OVER</th>
                                <th class="col-xs-6">Повсеместные повреждения</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">BIOHAZARDOUS/CHEMICAL</th>
                                <th class="col-xs-6">Биологическая/химическая опасность</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">BURN – ENGINE</th>
                                <th class="col-xs-6">Пожар — двигатель</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6"> BURN – INTERIOR</th>
                                <th class="col-xs-6">Пожар — салон</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">BURN</th>
                                <th class="col-xs-6">Пожар</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">CASH FOR CLUNKERS</th>
                                <th class="col-xs-6">Наличные за старые автомобили</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6"> DAMAGE HISTORY</th>
                                <th class="col-xs-6">История повреждений</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">FRAME DAMAGE REPORTED</th>
                                <th class="col-xs-6">Заявленное повреждение рамы</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6"> FRONT END</th>
                                <th class="col-xs-6">Передняя часть</th>
                            </tr>

                            <tr>
                                <th class="col-xs-6">MECHANICAL</th>
                                <th class="col-xs-6">Механические повреждения</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">MINOR DENT/SCRATCHES</th>
                                <th class="col-xs-6">Незначительные выбоины/царапины</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">NORMAL WEAR</th>
                                <th class="col-xs-6">Естественный износ</th>
                            </tr>

                            <tr>
                                <th class="col-xs-6">PARTIAL/INCOMPLETE REPAIR</th>
                                <th class="col-xs-6">Частичный/неполный ремонт</th>
                            </tr>

                            <tr>
                                <th class="col-xs-6">REJECTED REPAIR</th>
                                <th class="col-xs-6">В ремонте было отказано</th>
                            </tr>

                            <tr>
                                <th class="col-xs-6">ROLLOVER</th>
                                <th class="col-xs-6">Переворот</th>
                            </tr>

                            <tr>
                                <th class="col-xs-6">REAR END</th>
                                <th class="col-xs-6">Задняя часть</th>
                            </tr>

                            <tr>
                                <th class="col-xs-6">SIDE</th>
                                <th class="col-xs-6">Боковая часть</th>
                            </tr>

                            <tr>
                                <th class="col-xs-6">STRIPPED</th>
                                <th class="col-xs-6">Снята обшивка</th>
                            </tr>

                            <tr>
                                <th class="col-xs-6"> TOP/ROOF</th>
                                <th class="col-xs-6">Верхняя часть/крыша</th>
                            </tr>

                            <tr>
                                <th class="col-xs-6">UNKNOWN</th>
                                <th class="col-xs-6">Неизвестно</th>
                            </tr>

                            <tr>
                                <th class="col-xs-6">UNDERCARRIAGE</th>
                                <th class="col-xs-6">Ходовая часть</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">MISSING/ALTERED VIN</th>
                                <th class="col-xs-6">Отсутствующий/измененный VIN</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">VANDALISM</th>
                                <th class="col-xs-6">Вандализм</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">REPLACED VIN</th>
                                <th class="col-xs-6">Замененный VIN</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">WATER/FLOOD</th>
                                <th class="col-xs-6">Затопление/Наводнение</th>
                            </tr>

                            <tr>
                                <th class="col-xs-6">WATER/FLOOD</th>
                                <th class="col-xs-6">Затопление/Наводнение</th>
                            </tr>

                            <tr>
                                <th class="col-xs-6">HAIL</th>
                                <th class="col-xs-6">Град</th>
                            </tr>

                            <tr>
                                <th class="col-xs-6">TRANSMISSION</th>
                                <th class="col-xs-6">Поврежденная трансмиссия</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">THEFT</th>
                                <th class="col-xs-6">В угоне</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">REPOSSESSION</th>
                                <th class="col-xs-6">Изъята банком</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">FRONT & REAR</th>
                                <th class="col-xs-6">Передняя и задняя часть</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">ENGINE DAMAGE</th>
                                <th class="col-xs-6">Поврежденный двигатель</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">ELECTRICAL</th>
                                <th class="col-xs-6">Поврежденное эл. оборудование</th>
                            </tr>
                            <tr>
                                <th class="col-xs-6">COLLISION</th>
                                <th class="col-xs-6">участник ДТП</th>
                            </tr>
                            </tbody>
                        </table>

                        <h2>Таможенный калькулятор</h2>

                        <p>Для приблизительного расчета покупки и доставки автомобиля Вы можете воспользоваться нашим таможенным калькулятором</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('footer')
    @include(env('THEME').'.layouts.footer')
@endsection