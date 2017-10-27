@extends(env('THEME').'.layouts.site')

@section('header')
    @include(env('THEME').'.indexHeader')
@endsection

@section('content')

    <div id="main-content" class="car-list content-area">

            <div id="aside">
                @include(env('THEME').'.indexSideBar')
            </div>


            <div class="content-area__table" id="content">
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



