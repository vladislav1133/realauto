@extends(env('THEME').'.layouts.site')

@section('header')
    @include(env('THEME').'.indexHeader')
@endsection

@section('content')

    <div id="main-content" class="car-list content-area">

        <div class="hidden">

                <div id="car-gallery">
                    <ul class="rslides">
                    </ul>
                </div>
            </div>


        <div class="main-content_inner">

            <div class="side-bar">
                @include(env('THEME').'.indexSideBar')
            </div>

            <div class="for-side-bar-fixed"></div>

            <div class="content content-area__table">
                        @include(env('THEME').'.indexContent')
            </div>
        </div>


    </div>



@endsection



@section('footer')
    @include(env('THEME').'.contactPopup')
    @include(env('THEME').'.layouts.footer')
@endsection



