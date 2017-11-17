@extends(env('THEME').'.layouts.site')

@section('header')
    @include(env('THEME').'.indexHeader')
@endsection

@section('content')

    <div id="main-content" class="car-list content-area">

        <div class="main-content_inner">

            <div class="side-bar">
                @include(env('THEME').'.indexSideBar')
            </div>

            <div class="for-side-bar-fixed"></div>

            <div class="content content-area__table">
                <div id="table">
                    <div id="main-table">
                        @include(env('THEME').'.indexContent')
                    </div>
                    <div id="hide-table"></div>
                </div>
            </div>
        </div>

        <a class="simple-ajax-popup" href="realauto/cars/property/copart.com/AUTOMOBILE">Load another content via ajax</a>
        <div id="car-gallery">
            <ul class="pgwSlider">
                <li><img src="http://www.news1130.com/wp-content/blogs.dir/sites/9/2015/06/24/rcoon.jpg"></li>
                <li><img src="http://www.news1130.com/wp-content/blogs.dir/sites/9/2015/06/24/rcoon.jpg"></li>
                <li><img src="http://www.news1130.com/wp-content/blogs.dir/sites/9/2015/06/24/rcoon.jpg"></li>
                <li><img src="http://www.news1130.com/wp-content/blogs.dir/sites/9/2015/06/24/rcoon.jpg"></li>
                <li><img src="http://www.news1130.com/wp-content/blogs.dir/sites/9/2015/06/24/rcoon.jpg"></li>
            </ul>
        </div>

    </div>

@endsection



@section('footer')
    @include(env('THEME').'.contactPopup')
    @include(env('THEME').'.layouts.footer')
@endsection



