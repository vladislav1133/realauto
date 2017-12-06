
@if($cars)
    <div class="table-container">
        <div class="table car-table" data-empty="Автомобили не найдеы">
            <div class="thead" id="vueTest">
                <div class="thead__cell">Фото</div>
                <div class="thead__cell">Лот</div>
                <div class="thead__cell">Год</div>
                <div class="thead__cell">Марка</div>
                <div class="thead__cell">Модель</div>
                <div class="thead__cell">Двигатель</div>
                <div class="thead__cell">Топливо</div>
                <div class="thead__cell">КПП</div>
                <div class="thead__cell">Одометр</div>
                <div class="thead__cell">Тип привода</div>
                <div class="thead__cell">Основные моменты</div>
                <div class="thead__cell">Основные повреждения</div>
                <div class="thead__cell">Вторичные повреждения</div>
                <div class="thead__cell">Дата</br> аукциона</div>
                <div class="thead__cell">Текушая</br> ставка</div>
                <div class="thead__cell">Купить сейчас</div>
                <div class="thead__cell">Расположение</div>
                <div class="thead__cell">Тип документа</div>
            </div>
            <div class="tbody" id="table-body">

                <div class="table__row" v-for="item in cars">

                    <div class="table__row-cell" v-for="items in item">@{{items}}</div>

                </div>
            </div>
        </div>
        <div class="table-pagination">
        </div>
    </div>

@endif