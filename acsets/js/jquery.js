$(document).ready(function () {
    //progressbar : load data
    $('#my-prb').progressbar({
        value:false, 
        change: function () {
            var c_value = $('#my-prb').progressbar('value');
            $('#my-prb-label').html(c_value + '%');
        },
        complete : function () {
            $('#my-prb-label').html('Đã xong');
        },
    });
    
    // Datepicker : lợi thế set được từ ngày nào đến ngày nào và ngày tháng ra sao
    $('.birtday').datepicker({
        dateFormat: 'dd/mm/yy',
        minDate :'02/05/2018',
        maxDate : '08/05/2018'
    });

    // Tooltip
    $('.my-tooltip').tooltip({
        track : true
    });

    //Accordion
    $('.my-accordion').accordion({
        heightStyle : 'content'
    });

    //autocomplete
    var data = ['thư viện lập trình ' , 'code jquery' , 'jquery' , 'ngô khắc tiến']
    $('.complete').autocomplete({
        delay: 100,
        source: data
    });

    //menu
    $('.my-menu').menu();

    // TABS
    $('.myTabs').tabs(
        {
            collapsible: true,  // cái này dùng để khi click 2 lần vào title thì sẽ ẩn content
        }
    );

    //Spinner
    $('.mySpinner').spinner(
        {
            min:0,
            max : 100,
            step : 2,
            stop : function () {
                let vl = $(this).spinner('value');
                $('.SpinnerValue').html(vl);
            },
            // change : function () {  // tăng hay giảm xong trỏ ra ngoài nó mới thay đỏi
            //     let vl = $(this).spinner('value');
            //     $('.SpinnerValue').html(vl);
            // }
        }
    );

    //Slider
    $('.mySlider1').slider({
        range: "min",           // xét màu của thanh 
        min:0,
        max : 100,
        step : 2,
        stop : function () {
            let vl = $(this).slider('value');
            $('.Slidervalue1').html(vl +'%');
        },
    });
    $('.mySlider2').slider({
        range: "min",            // xét màu của thanh 
        orientation: 'vertical' ,
        min:0,
        max : 100,
        step : 2,
        stop : function () {
            let vl = $(this).slider('value');
            $('.Slidervalue2').html(vl + '%');
        },
    });

    // Draggable
    $('.MyDraggable').draggable(  // mặc định ô con sẽ đi ra bên ngoài được
        {
            
            //containment : 'parent' , // thuộc tính sẽ giữ thành phần con ở trong ko ra ngoài cha được
            //scroll : true , // thành phần này ko dùng chung với containment , và phải có thuộc tính overflow
            // revert : true , // khi kéo đến đâu thả ra quay lại vị trí ban đầu
            // helper:'clone' ,
            // axis : 'x',   // dùng để chỉ kéo trên chục x (có 2 giá trị x , y) 
            drag : function () {                            // khi tác động lên nó sẽ đổi màu và thả có stop sẽ ăn theo stop
                $(this).css('background-color', 'green');
            },
            stop : function () {                            // khi dừng tác động lên nó thì sẽ kích hoạt
                $(this).css('background-color', 'yellow');
            },
        }
    );

    //Droppable
    $('.tooltip-Droppable').tooltip({
        track : true
    });
    
    $('.MyDraggable2').draggable({
        // revert: "valid",            // cái này ko cho phép vào droppable  , và phải có tên trong accept mới được kích hoạt
        revert: "invalid" ,             // cái này cho phép các thành phần vào bên trong khi accept có tên nó còn ko có ko kích hoạt
    } );

    $('.MyDraggable3').draggable({
        revert: "valid",             // phải kết hợp với droppable mới kích hoạt
        // revert: "invalid" ,            
    } );
    
    // $('.myDroppable').droppable( ); // mặc định cho tất cả cho vào
    
    $('.myDroppable').droppable({
        // accept : '*',                                // * cho xem tất cả cho vào khung   
        accept : '.MyDraggable2 , .MyDraggable3',                        // thuộc tính này cho class hay id có value như vậy tác động lên
        activate : function () {                          // tác động lên
            $(this).css('background-color', 'blue');
        },
        over : function () {                            // hơ lên
            $(this).css('background-color', 'yellow');
        },
        out : function () {                             // cho ra khỏi khung cha
            $(this).css('background-color', 'green');
        },
        drop : function () {                            // thả ra
            $(this).css('background-color', 'pink');
        },
        // deactivate : function () {                          // khi ko active nữa sẽ kích hoạt
        //     $(this).css('background-color', 'deepskyblue');
        // },
    } );

    // Resizable : dùng để tăng kích thước khung
    $('.Resizable_1').resizable({
        alsoResize : '.Resizable_2' , 
    });

    $('.Resizable_2').resizable({
        alsoResize : '.Resizable_1' ,       // dùng để khi kích thước thay đổi thì khung còn có value (class khung khác) thế cũng thay đổi theo
        // aspectRatio :   4/3 ,               // dùng để đặt tỉ lệ chiều dài và chiều rộng cho khung 
        animate : true ,                    // tạo hiệu ứng khi kéo đến điểm nào đó nó sẽ chạy từ từ
        ghost : true ,                      // luôn đi với animate , cũng để tạo hiệu ứng , khi kéo sẽ tạo khung mờ
    });

    // Sortable 
    $('.MySortable1').sortable(
        {
            connectWith: ".MySortable2 , .MySortable3",        // là những danh sách khác muốn kết nối với nhau trong quá trình sắp xếp
            activate : function () {                          // tác động active lên sẽ đổi màu thẻ li
                $('.MySortable1 li').css('background-color', 'red');
            },
            deactivate : function () {                          // khi ko active nữa sẽ kích hoạt
                $('.MySortable1 li').css('background-color', 'deepskyblue');
            },
            placeholder: "ui-state-highlight"
        }
    );  // mặc định sắp xếp trong một cột 
    $('.MySortable2').sortable(
        {
            connectWith : ".MySortable1 , .MySortable3",       // là những danh sách khác muốn kết nối với nhau trong quá trình sắp xếp
            activate : function () {                          // tác động active lên sẽ đổi màu thẻ li
                $('.MySortable2 li').css('background-color', 'blue');
            },
            deactivate : function () {                          // khi ko active nữa sẽ kích hoạt
                $('.MySortable2 li').css('background-color', 'deepskyblue');
            },
            placeholder: "ui-state-highlight"
        }
        
    );
    $('.MySortable3').sortable(
        {
            connectWith : ".MySortable1 , .MySortable2",       // là những danh sách khác muốn kết nối với nhau trong quá trình sắp xếp
            activate : function () {                          // tác động active lên sẽ đổi màu thẻ li
                $('.MySortable3 li').css('background-color', 'yellow');
            },
            deactivate : function () {                          // khi ko active nữa sẽ kích hoạt
                $('.MySortable3 li').css('background-color', 'deepskyblue');
            },
            placeholder: "ui-state-highlight",
        }
        
    );
    
    //Selectable
    

});

//progressbar : load data
function StartProgressbar() {
    var c_value = $('#my-prb').progressbar('value') + 1 ;
    $('#my-prb').progressbar('value' , c_value);
    if(c_value < 100){
        setTimeout('StartProgressbar()', 100);
    }
}
