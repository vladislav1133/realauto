@extends(env('THEME').'.layouts.site')

@section('header')
    @include(env('THEME').'.indexHeader')
@endsection

@section('content')

    <div id="main-content" class="car-list content-area">

            <div class="side-bar">
                @include(env('THEME').'.indexSideBar')
            </div>

            <div class="content content-area__table">
                <div id="table">
                    <div id="main-table">
                        @include(env('THEME').'.indexContent')
                    </div>
                    <div id="hide-table"></div>
                </div>
            </div>
    </div>

@endsection



@section('footer')
    @include(env('THEME').'.contactPopup')
    @include(env('THEME').'.layouts.footer')
@endsection



