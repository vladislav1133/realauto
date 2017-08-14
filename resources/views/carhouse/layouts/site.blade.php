<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <title>Car House - Car Listing Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">


    <!-- External CSS libraries -->
    <link rel="stylesheet" type="text/css" href="{{env('THEME')}}/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="{{env('THEME')}}/css/bootstrap-select.min.css">
    <link rel="stylesheet" type="text/css" href="{{env('THEME')}}/css/animate.min.css">
    <link rel="stylesheet" type="text/css" href="{{env('THEME')}}/css/slider.css">
    <link rel="stylesheet" type="text/css" href="{{env('THEME')}}/css/font-awesome-4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="{{env('THEME')}}/css/font-awesome-4.5.0/css/font-awesome.min.css">
    <!-- Custom stylesheet -->
    <link rel="stylesheet" type="text/css" href="{{env('THEME')}}/css/style.css">

    <!-- Google fonts -->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Oleo+Script:400,700" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="{{env('THEME')}}/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="{{env('THEME')}}/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="{{env('THEME')}}/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="{{env('THEME')}}/js/html5shiv.min.js"></script>
    <script src="{{env('THEME')}}/js/respond.min.js"></script>
    <![endif]-->
</head>
<body>

@yield('header')


@yield('banner')

<!-- Car list start-->
<div class="car-list content-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-xs-12">
                @yield('sidebar')

                @yield('news')

                @yield('carBox')
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div id="content">
                    @yield('content')
                </div>

            </div>
        </div>
    </div>
</div>
<!-- Car list end-->

@yield('footer')

<script src="{{env('THEME')}}/js/jquery-2.2.0.min.js"></script>
<script src="{{env('THEME')}}/js/bootstrap.min.js"></script>
<script src="{{env('THEME')}}/js/bootstrap-slider.js"></script>

<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="{{env('THEME')}}/js/ie10-viewport-bug-workaround.js"></script>
<!-- Custom javascript -->
<script src="{{env('THEME')}}/js/search.js"></script>
<script src="{{env('THEME')}}/js/bootstrap-select.min.js"></script>

</body>
</html>