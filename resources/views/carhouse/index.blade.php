@extends(env('THEME').'.layouts.site')

@section('header')
    @include(env('THEME').'.header')
@endsection

@section('banner')
    @include(env('THEME').'.banner')
@endsection

@section('sidebar')
    @include(env('THEME').'.sidebar')
@endsection

@section('content')
    @include(env('THEME').'.indexContent')
@endsection

@section('footer')
    @include(env('THEME').'.footer')
@endsection


