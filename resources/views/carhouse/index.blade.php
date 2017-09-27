@extends(env('THEME').'.layouts.site')

@section('header')
    @include(env('THEME').'.indexHeader')
@endsection

@section('content')

    <div class="car-list content-area">
        <div class="container">
            <div class="row">
                <div class="main-aside col-xs-12">
                    @include(env('THEME').'.indexSideBar')
                </div>
                <div class="col-xs-12">
                    <div id="table">
                        <div class="row">
                            <div id="main-table">
                                @include(env('THEME').'.indexContent')
                            </div>
                        </div>
                        <div class="row">
                            <div id="hide-table">

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@section('footer')
    @include(env('THEME').'.contactPopup')
    @include(env('THEME').'.layouts.footer')
@endsection



