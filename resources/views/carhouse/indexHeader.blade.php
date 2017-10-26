<div class="main-header index-header">
    <div class="container main-nav-container">

        <nav class="navbar navbar-default main-nav">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand-logo" href="{{route('home')}}">
                    <img src="{{asset(env('THEME'))}}/img/logo.png" alt="CAR HOUSE">
                </a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="{{route('home')}}" >Главная</a></li>
                    <li><a href="{{route('availablecars.index')}}" >Машины в наличии</a></li>
                    <li><a href="{{route('blog.index')}}" >Блог</a></li>
                    <li><a href="{{route('contacts')}}" >Контакты</a></li>
                    <li><a href="{{route('rastamozhka')}}" >Таможенный калькулятор</a></li>
                </ul>
            </div>
        </nav>
        <div class="banner__offer">
            <div class="banner__bg">
                <h3 class="banner__title">
                    Компания REALAUTO обеспечит Вас доступным авто из США
                </h3>
                <p class="banner__text">
                    Вы можете подобрать автомобиль из тех, что уже <a href="{{route('availablecars.index')}}"> есть в наличии</a>, или воспользоваться нашим пакетом услуг по покупке и доставке новых или б/у авто из США.
                </p>

            </div>
        </div>

    </div>
    <div id="double-nav-container" class="double-nav-container">
        <div class="container">
            <nav class="navbar navbar-default double-nav">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-2" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand-logo" href="{{route('home')}}">
                        <img src="{{asset(env('THEME'))}}/img/logo.png" alt="CAR HOUSE">
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="{{route('home')}}" >Главная</a></li>
                        <li><a href="{{route('availablecars.index')}}" >Машины в наличии</a></li>
                        <li><a href="{{route('blog.index')}}" >Блог</a></li>
                        <li><a href="{{route('contacts')}}" >Контакты</a></li>
                        <li><a href="{{route('rastamozhka')}}" >Таможенный калькулятор</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</div>




