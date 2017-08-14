//Pagination
$(document).on('click','.pagination a', function (e) {
    e.preventDefault();

    var page = $(this).attr('href').split('page=')[1];

    getCars(page);

    $('html, body').animate({
        scrollTop: $("#content").offset().top-50
    }, 500)
});

$(document).on('click','#search-auto', function (e) {
    e.preventDefault();

    getCars();
});

//Get models of mark
$(document).on('change','#search-marks', function (e) {
    e.preventDefault();
    var mark=$('#search-marks').val();
    getSearchModels(mark);
});


$(document).on('change','#search-models', function (e) {
    e.preventDefault();

    var mark=$('#search-marks').val();
    var model=$('#search-models').val();
    getSearchYears(mark,model);
});


function getSearchModels(mark) {

    $.ajax({

        url:'/ajax/models/'+mark

    }).done(function(response){

        if(response.models.length!==0){
            response.models.unshift('Любая');
            var models=response.models;



            var $el = $("#search-models");

            $el.empty(); // remove old options

            $.each(models, function(key,value) {

                $el.append($("<option></option>").text(value));
            });

            $('.selectpicker').selectpicker('refresh');

            var mark=$('#search-marks').val();
            var model=$('#search-models').val();
            getSearchYears(mark,model);
        }


    });
}

function getSearchYears(mark,model) {

    if (typeof(mark)==='undefined') mark = 0;
    if (typeof(model)==='undefined') model = 0;

    if (mark==='Любая') mark = 0;
    if (model==='Любая') model = 0;


    $.ajax({

        url:'/ajax/years/'+mark+'/'+model

    }).done(function(response){
        if(response.years.length!==0) {

            var years=response.years;
            years.unshift('Любой');

            var $el = $("#search-years");

            $el.empty(); // remove old options


            $.each(years, function(key,value) {

                $el.append($("<option></option>").text(value));
            });

            $('.selectpicker').selectpicker('refresh');
        }
    });
}


function getCars(page) {

    var mark=$('#search-marks').val();
    var model=$('#search-models').val();
    var year=$('#search-years').val();

    if (typeof(mark)==='undefined') mark = 0;
    if (typeof(model)==='undefined') model = 0;
    if (typeof(year)==='undefined') year = 0;

    if (mark==='Любая') mark = 0;
    if (model==='Любая') model = 0;
    if (year==='Любой') year = 0;
    $.ajax({
        url:'/ajax/cars/'+mark+'/'+model+'/'+year+'?page='+page
    }).done(function(data){
        $('#content').html(data);
    });
}