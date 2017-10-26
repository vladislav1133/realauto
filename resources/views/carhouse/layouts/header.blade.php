<div class="common-header">


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


    <div class="container">

        <nav class="main-nav">


            <div class="row">

                <div class=" col-xs-2">
                    <a class="main-nav__logo" href="{{route('home')}}">
                        <img src="{{asset(env('THEME'))}}/img/logo.png" alt="CAR HOUSE">
                    </a>
                </div>

                <div>
                    <ul class="main-nav__list col-xs-10">
                        <li class="main-nav__item"><a class="main-nav__link" href="{{route('home')}}">Главная</a></li>
                        <li class="main-nav__item"><a class="main-nav__link" href="{{route('availablecars.index')}}">Машины в наличии</a></li>
                        <li class="main-nav__item"><a class="main-nav__link" href="{{route('blog.index')}}">Блог</a></li>
                        <li class="main-nav__item"><a class="main-nav__link" href="{{route('contacts')}}">Контакты</a></li>
                        <li class="main-nav__item"><a class="main-nav__link" href="{{route('rastamozhka')}}">Таможенный калькулятор</a></li>
                    </ul>
                </div>
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


</div>
