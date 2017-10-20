@extends(env('THEME').'.layouts.site')

@section('header')
    @include(env('THEME').'.indexHeader')
@endsection

@section('content')

    <div id="main-content" class="car-list content-area">
        <div class="container">
                <div class="main-aside col-xs-3">
                    @include(env('THEME').'.indexSideBar')
                </div>
                <div class="col-xs-9">
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



