@extends(env('THEME').'.layouts.site')

@section('header')

@endsection


@section('content')

    <div class="page-content-404">
        <div class="container">
            <div class="col-lg-12 col-md-12 c0p-sm-12 col-xs-12">
                <div class="error404">
                    <img src="{{asset(env('THEME').'/img/mac.png')}}" class="img-responsive" alt="mac">
                    <div class="e404">
                        <h1>404</h1>
                        <div class="title-error">Страница не найдена</div>
                        <a class="btn details-button btn-404" href="/">Перейти на главную</a>
                    </div>

                </div>
            </div>
        </div>
    </div>

@endsection

@section('footer')

@endsection

