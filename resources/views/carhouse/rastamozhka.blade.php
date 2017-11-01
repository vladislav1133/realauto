@extends(env('THEME').'.layouts.site')

@section('header')
    @include(env('THEME').'.layouts.header')
@endsection

@section('content')

    <div class="" style="height: 100px;"></div>
    @include('widgets.customsCalculator')
@endsection



@section('footer')
    @include(env('THEME').'.layouts.footer')
@endsection



