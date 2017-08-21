@extends(env('THEME').'.layouts.site')

@section('header')
    @include(env('THEME').'.layouts.header')
@endsection

@section('content')

    @include(env('THEME').'.indexBanner')

    <!-- Car list start-->
    <div class="car-list content-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-xs-12">
                    @include(env('THEME').'.indexSideBar')
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    @include(env('THEME').'.indexContent')

                </div>
            </div>
        </div>
    </div>
    <!-- Car list end-->

@endsection

@section('footer')
    @include(env('THEME').'.layouts.footer')
@endsection