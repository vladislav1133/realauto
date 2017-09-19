<div class="hidden">
    <form id="contact-us-popup" class="cu-form " action="">
        <div class="row">
            <h2 class="cu-form__header col-xs-12">Напишите нам</h2>
            <p>Наш менеджер в ближайщее время свяжется с вами</p>
            {{ csrf_field() }}
            <label class="col-xs-10 col-xs-offset-1 form__label cu-form__label" for="tel">Телефон:</label>
            <input class="col-xs-10 col-xs-offset-1 cu-form__input input-text " type="tel" id="tel" name="tel">
            <label class="col-xs-10 col-xs-offset-1 cu-form__label form__label"  for="name">Имя:</label>
            <input class="col-xs-10 col-xs-offset-1 cu-form__input input-text " type="text" id="name" name="name">
            <button class="col-xs-10 col-xs-offset-1 btn cu-form__btn ">отправить</button>
        </div>
    </form>
</div>