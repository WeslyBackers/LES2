 $(function () {

//     $('#panel-2').on('click', function () {
//         $(this).append('clicked');
//     });

//     $('#panel-2').click(function() {
//         $(this).append('clicked');
//     });

//     $('#panel-2').hover(
//         Enter
//         function () {
//             $(this).css('background-color', '#5c2166');
//         },
//         Leave
//         function () {
//             $(this).css('background-color', '#ab47bc');
//         }
//     );

    // $('#panel-2').hover(
    //     // Enter
    //     function () {
    //         $(this).toggleClass('panel-2-hover');
    //     },
    //     // Leave
    //     function () {
    //         $(this).toggleClass('panel-2-hover');
    //     }
    // );

    // $('#panel-2')
    //     .on('mouseenter', function () {
    //         $(this).toggleClass('panel-2-hover');
    //     })
    //     .on('mouseleave', function () {
    //         $(this).toggleClass('panel-2-hover');
    //     }
    //     );


    $('#b1').on ('click',function(){
        var todo = $('#todotext').val();

        if (todo !== ''){
        $('#todoItems').append('<li>'+todo+'</li>');
        $('#todotext').val('');
    }
    });


    $('#todoItems').on ('click', 'li', function(){
        $(this).fadeOut();
    });

    $('#panel-2').on('dblclick', function(){
    
        $(this).off();
    
    });

    $('#panel-4').on('click', function(){

        $("#panel-4").hide();
    
    });

    $('#panel-3, #panel-5').on('click', function(){

        $("#panel-4").animate('slow',function(){

            
        });

    $('#blokje').on('keypress',function(){

        var key = $(event.which);

        if (key===)

    }
    
    });



})