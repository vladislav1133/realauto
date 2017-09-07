<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <title>@if($meta['meta_title']){{$meta['meta_title']}} @else {{'RealAuto!!'}} @endif</title>
    <meta name="description" content="@if($meta['meta_description']){{$meta['meta_description']}} @else {{'RealAuto'}} @endif">
    <meta name="keywords" content="@if($meta['meta_keywords']){{$meta['meta_keywords']}} @else {{'RealAuto'}} @endif">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <!-- External CSS libraries -->
    <link rel="stylesheet" type="text/css" href="{{asset(env('THEME'))}}/css/app.css">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="{{asset(env('THEME'))}}/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="{{asset(env('THEME'))}}/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="{{asset(env('THEME'))}}/js/html5shiv.min.js"></script>
    <script src="{{asset(env('THEME'))}}/js/respond.min.js"></script>
    <![endif]-->
</head>
<body>

@yield('header')

@yield('content')

@yield('footer')

<script src="{{asset('js/app.js')}}"></script>
<!-- Custom javascript -->
@if(Route::currentRouteName()=='home')
<script src="{{asset(env('THEME'))}}/js/search.js"></script>

<script src="{{asset(env('THEME'))}}/js/common.js"></script>
@endif


</body>
</html>