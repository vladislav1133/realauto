@if($articles)
    <div class="blog-body">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-xs-12">
                @if(!$articles->isEmpty())
                    @foreach($articles as $article)
                            <div class="thumbnail blog-box clearfix">
                                <img src="{{asset($article->img)}}" alt="full-blog-01">
                                <div class="caption detail">
                                    <h1 class="title">
                                        <a href="{{route('blog.show',['alias'=>$article->alias])}}">{{$article->title}}</a>
                                    </h1>
                                    <div class="post-materials">
                                        <div class="header">
                                            <div class="blog-clock_wrap">
                                            <i class="fa fa-clock-o"></i> 8 MAY 2016
                                            </div>
                                        </div>
                                        <p>{{$article->review}}</p>
                                        <a href="{{route('blog.show',['alias'=>$article->alias])}}"
                                           class="btn btn-read-more">Читать</a>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                        {{$articles->links()}}
                    @else
                        <h1 class="empty-articles">Записей нет</h1>
                    @endif
                </div>
            </div>
        </div>
    </div>
@else
    <h1>Записей нет</h1>
@endif