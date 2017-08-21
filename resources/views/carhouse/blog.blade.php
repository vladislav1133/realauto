@extends(env('THEME').'.layouts.site')

@section('header')
    @include(env('THEME').'.layouts.header')
@endsection

@section('content')
    {!! $content !!}
@endsection

@section('footer')
    @include(env('THEME').'.layouts.footer')
@endsection