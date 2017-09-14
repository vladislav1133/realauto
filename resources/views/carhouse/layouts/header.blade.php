
<div class="main-header main-header_default">
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
                <ul class="nav navbar-nav navbar-right navbar-right_margin">
                    <li><a href="{{route('home')}}" >Главная</a></li>
                    <li><a href="{{route('availablecars.index')}}" >Машины в наличии</a></li>
                    <li><a href="{{route('blog.index')}}" >Блог</a></li>
                    <li><a href="{{route('contacts')}}" >Контакты</a></li>
                </ul>
            </div>
        </nav>
    </div>
</div>



