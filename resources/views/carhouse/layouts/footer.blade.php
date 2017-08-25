<!-- Footer start-->
<footer class="main-footer">
    <div class="container">
        <div class="row">
            <div class="footer-item col-lg-4 col-md-4 col-sm-6 col-xs-12" >
                <a class="footer-item-link" href="#">
                    <i class="fa fa-map-marker"></i>
                    @if($info){{$info->address}}@endif
                </a>
            </div>
            <div class="footer-item col-lg-4 col-md-4 col-sm-6 col-xs-12" >
                <a class="footer-item-link" href="tel:@if($info){{$info->tel_numb}}@endif"><i class="fa fa-phone"></i>  @if($info){{$info->tel_text}}@endif</a>
            </div>
            <div class="footer-item col-lg-4 col-md-4 col-sm-6 col-xs-12" >
                <a class="footer-item-link" href="mailto:@if($info){{$info->email}}@endif">
                    <i class="fa fa-envelope-o "></i> @if($info){{$info->email}}@endif
                </a>
            </div>
        </div>
    </div>
</footer>
<!-- Footer end-->