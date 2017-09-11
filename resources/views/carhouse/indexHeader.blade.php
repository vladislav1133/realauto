
<!-- Main header start-->
<div class="main-header">
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
                <a class="navbar-brand-logo" href="/">
                    <img src="{{asset(env('THEME'))}}/img/logo.png" alt="CAR HOUSE">
                </a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="/" >Главная</a></li>
                    <li><a href="/availablecars" >Машины в наличии</a></li>
                    <li><a href="/blog" >Блог</a></li>
                    <li><a href="/blog" >Контакты</a></li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
            <!-- /.container -->
        </nav>
        <div class="banner__offer">
            <div class="banner__bg">
                <h3 class="banner__title">
                    Компания REALAUTO обеспечит Вас доступным авто из США
                </h3>
                <p class="banner__text">
                    Вы можете подобрать автомобиль из тех, что уже <a href="{{route('availableCars')}}"> есть в наличии</a>, или воспользоваться нашим пакетом услуг по покупке и доставке новых или б/у авто из США.
                </p>

            </div>
        </div>
        <div class="banner__car"></div>
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
                    <a class="navbar-brand-logo" href="/">
                        <img src="{{asset(env('THEME'))}}/img/logo.png" alt="CAR HOUSE">
                    </a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="/" >Главная</a></li>
                        <li><a href="/availablecars" >Машины в наличии</a></li>
                        <li><a href="/blog" >Блог</a></li>
                        <li><a href="/blog" >Контакты</a></li>

                    </ul>
                </div>
                <!-- /.navbar-collapse -->
                <!-- /.container -->
            </nav>
        </div>
    </div>
</div>
<!-- Main header end-->



