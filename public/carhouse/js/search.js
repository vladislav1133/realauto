//Pagination
$(document).on('click','.pagination a', function (e) {
    e.preventDefault();


    var page = $(this).attr('href').split('page=')[1];

    getCars(page);

    $('html, body').animate({
        scrollTop: $("#content").offset().top-95
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

        url:'/car/models/'+mark

    }).done(function(response){
        console.log(response);
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

        url:'/car/years/'+mark+'/'+model

    }).done(function(response){
        console.log(response);
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
    var from=$('#search-from').val();
    var to=$('#search-to').val();



    if (mark === 'Любая') mark = 0;
    if (model === 'Любая') model = 0;
    if (to === 'До') to = 0;
    if (from === 'От') from = 0;

    if (typeof(mark) === 'undefined') mark = 0;
    if (typeof(model) === 'undefined') model = 0;
    if (typeof(to) === 'undefined') to = 0;
    if (typeof(from) === 'undefined') from = 0;


    $.ajax({
        url:'/cars/'+mark+'/'+model+'/'+from+'/'+to+'?page='+page
    }).done(function(data){

        if(data){
            $('#content').html(data);
        }
        else {
          $('#content').html('<h3>К сожалению, по Вашему запросу авто не найдено</h3>')
        }
    });
}