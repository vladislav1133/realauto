<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <title>@if($meta['meta_title']){{$meta['meta_title']}} @else {{'RealAuto!!'}} @endif</title>
    <meta name="description" content="@if($meta['meta_description']){{$meta['meta_description']}} @else {{'RealAuto'}} @endif">
    <meta name="keywords" content="@if($meta['meta_keywords']){{$meta['meta_keywords']}} @else {{'RealAuto'}} @endif">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">


    <!-- External CSS libraries -->
    <link rel="stylesheet" type="text/css" href="{{asset(env('THEME'))}}/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="{{asset(env('THEME'))}}/css/bootstrap-select.min.css">
    <link rel="stylesheet" type="text/css" href="{{asset(env('THEME'))}}/css/animate.min.css">
    <link rel="stylesheet" type="text/css" href="{{asset(env('THEME'))}}/css/slider.css">
    <link rel="stylesheet" type="text/css" href="{{asset(env('THEME'))}}/css/font-awesome-4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="{{asset(env('THEME'))}}/css/font-awesome-4.5.0/css/font-awesome.min.css">
    <!-- Custom stylesheet -->
    <link rel="stylesheet" type="text/css" href="{{asset(env('THEME'))}}/css/style.css">

    <!-- Google fonts -->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Oleo+Script:400,700" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="{{asset(env('THEME'))}}/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

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

<script src="{{asset(env('THEME'))}}/js/jquery-2.2.0.min.js"></script>
<script src="{{asset(env('THEME'))}}/js/bootstrap.min.js"></script>
<script src="{{asset(env('THEME'))}}/js/bootstrap-slider.js"></script>

<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="{{asset(env('THEME'))}}/js/ie10-viewport-bug-workaround.js"></script>
<!-- Custom javascript -->
@if(Route::currentRouteName()=='home')
<script src="{{asset(env('THEME'))}}/js/search.js"></script>
@endif
<script src="{{asset(env('THEME'))}}/js/bootstrap-select.min.js"></script>

</body>
</html>