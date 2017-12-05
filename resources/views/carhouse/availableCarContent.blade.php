<div id="main-content" class="car-list content-area">

    <div class="main-content_inner" style="margin-top: 50px">

        <div class="side-bar">
            @include(env('THEME').'.availableCarSideBar')
        </div>

        <div class="for-side-bar-fixed"></div>

        <div class="content content-area__table">
            <div id="table">
                <div id="main-table">
                    @include(env('THEME').'.availableCarTable')
                </div>
                <div id="hide-table"></div>
            </div>
        </div>
    </div>


</div>