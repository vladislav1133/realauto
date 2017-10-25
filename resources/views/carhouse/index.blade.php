@extends(env('THEME').'.layouts.site')

@section('header')
    @include(env('THEME').'.indexHeader')
@endsection

@section('content')

    <div id="main-content" class="car-list content-area">
        <div class="container">
                <div id="main-aside" class="main-aside col-xs-12 col-sm-3">
                    @include(env('THEME').'.indexSideBar')
                </div>
                <div class="col-xs-12 col-sm-9 content-area__table">
                    <div id="table">
                            <div id="main-table">
                                @include(env('THEME').'.indexContent')
                            </div>
                            <div id="hide-table"></div>
                    </div>
                </div>
        </div>
    </div>

@endsection



@section('footer')
    @include(env('THEME').'.contactPopup')
    @include(env('THEME').'.layouts.footer')
@endsection



