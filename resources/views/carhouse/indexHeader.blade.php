<div class="main-header index-header">


    <!-- Pushy Menu -->
    <nav class="pushy pushy-left">
        <div class="pushy-content">
            <ul>

                <li class="pushy-link"><a href="{{route('home')}}">Главная</a></li>
                <li class="pushy-link"><a href="{{route('availablecars.index')}}">Машины в наличии</a></li>
                <li class="pushy-link"><a href="{{route('blog.index')}}">Блог</a></li>
                <li class="pushy-link"><a href="{{route('contacts')}}">Контакты</a></li>
                <li class="pushy-link"><a href="{{route('rastamozhka')}}">Таможенный калькулятор</a></li>
            </ul>
        </div>
    </nav>

    <!-- Site Overlay -->
    <div class="site-overlay"></div>

    <header class="header">

        <div class="main-nav_wrap">

        <nav class="main-nav">

                <div class="main-nav__logo_wrap">
                    <a class="main-nav__logo" href="{{route('home')}}">
                        <img src="{{asset(env('THEME'))}}/img/logo.png" alt="CAR HOUSE">
                    </a>
                </div>

                <div class="main-nav__list_wrap">
                    <ul class="main-nav__list">
                        <li class="main-nav__item"><a class="main-nav__link" href="{{route('home')}}">Главная</a></li>
                        <li class="main-nav__item"><a class="main-nav__link" href="{{route('availablecars.index')}}">Машины в наличии</a></li>
                        <li class="main-nav__item"><a class="main-nav__link" href="{{route('blog.index')}}">Блог</a></li>
                        <li class="main-nav__item"><a class="main-nav__link" href="{{route('contacts')}}">Контакты</a></li>
                        <li class="main-nav__item"><a class="main-nav__link" href="{{route('rastamozhka')}}">Таможенный калькулятор</a></li>
                    </ul>
                </div>

            <div class="toggle-button">
                <div class="row">
                    <div class="col-xs-12">
                        <button class="menu-btn">&#9776;</button>
                    </div>
                </div>
            </div>


        </nav>

        </div>

        <div class="banner__offer">
            <div class="banner__bg">
                <h3 class="banner__title">
                    Компания REALAUTO обеспечит Вас доступным авто из США
                </h3>
                <span class="banner__line"></span>
                <p class="banner__text">
                    Вы можете подобрать автомобиль из тех, что уже <a href="{{route('availablecars.index')}}"> есть в
                        наличии</a>, или воспользоваться нашим пакетом услуг по покупке и доставке новых или б/у авто из
                    США.
                </p>

            </div>
        </div>

    </header>

</div>




