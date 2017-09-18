//Pagination
$(document).on('click','.pagination a', function (e) {
    e.preventDefault();


    var page = $(this).attr('href').split('page=')[1];

    getCars(page);

    $('html, body').animate({
        scrollTop: $("#content").offset().top-95
    }, 300)
});

$(document).on('click','#search-auto', function (e) {
    e.preventDefault();

    $('#body-body').empty()

    $('#body-body').append('<tr><td style="display: table-cell;" ><img src="https://cs.copart.com/v1/AUTH_svc.pdoc00001/PIX81/2f607a16-49dd-4650-88b2-9f257ebfc628.JPG" alt=""></td> <td>1223545</td> <td>2013</td> <td>CHEVROLET</td> <td>TRAX LS</td> <td>1.4L4</td> <td>GAS</td> <td>14783 mi</td> <td>передняя часть</td> <td>Вторичные повреждения: незначительные выбоины/царапины</td> <td>FL - TAMPA SOUTH</td> <td>-</td> <td>SDSDS</td> </tr>')

    $('#body-body').trigger('footable_initialize');
    //getCars();
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

            $('#hide-table').html(data);

            $('#hide-table .car-table').footable();

            setTimeout(function () {
                var hideTable = $('#hide-table .row').get(0)
                $('#main-table').html(hideTable)
            }, 1000);

        }

        else {
          $('#content ').html('<h3>К сожалению, по Вашему запросу авто не найдено</h3>')
        }

    });

}