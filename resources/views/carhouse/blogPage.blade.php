@if($article)


<!-- Blog body start-->
<div class="blog-body">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-xs-12">
                <!-- blog-box start-->
                <div class="thumbnail blog-box clearfix">
                    <!-- detail -->
                    <div class="caption detail">
                        <!-- Title -->
                        <h1 class="title">
                            <a href="{{route('blog.show',['alias'=>$article->alias])}}">{{$article->title}}</a>
                        </h1>
                        <!-- Post Materials-->
                        <div class="post-materials">
                            <div class="blog-header">
                                <div class="blog-clock_wrap">
                               <i class="fa fa-clock-o"></i> {{$article->created_at->format('d M Y')}}
                               </div>
                            </div>
                            {!! $article->text !!}
                        </div>
                    </div>
                </div>
                <!-- blog-box end-->
            </div>
        </div>
    </div>
</div>
<!-- Blog body end-->

@endif