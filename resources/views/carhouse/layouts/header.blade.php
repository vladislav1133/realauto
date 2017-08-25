
<!-- Main header start-->
<div class="main-header">
    <div class="container">
        <nav class="navbar navbar-default">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand-logo" href="/">
                    <img src="{{asset(env('THEME'))}}/img/logo.png" alt="CAR HOUSE">
                </a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="/blog" >Блог</a></li>
                    <li><a  href="tel:@if($info){{$info->tel_numb}}@endif"><i class="fa fa-phone pr-5 pl-10"></i>  @if($info){{$info->tel_text}}@endif</a></li>
                    <li><a  href="mailto:@if($info){{$info->email}}@endif"><i class="nav-mail-icon fa fa-envelope-o pr-5 pl-10"></i>@if($info){{$info->email}}@endif</a></li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
            <!-- /.container -->
        </nav>
    </div>
</div>
<!-- Main header end-->



