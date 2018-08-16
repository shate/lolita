$(document).ready(function(){

    switch ($('html').attr('lang')){

        case 'ru': $.ajax({
            url: 'js/locale_ru.js',
            dataType: "script",
            async: false,
        });
            break;
        case 'de': $.ajax({
            url: 'js/locale_de.js',
            dataType: "script",
            async: false,
        });
            break;
    }

    skrollr.init();

    $('#selected').toggle(function() {
            $('.list_lang').slideDown();
        },
        function() {
            $('.list_lang').slideUp();
        }
    );

    $('#sel').toggle(function() {
            $('.list_lang_up').slideDown();
        },
        function() {
            $('.list_lang_up').slideUp();
        }
    );
    $('.list_lang li').click(function() {

        var current = $('#selected').html();

        $('#selected').html($(this).children().html());
        $(this).children().html(current);
        $('.list_lang').slideUp();
    });
    $('.list_lang_up li').click(function() {

        var current = $('#sel').html();
        $('#sel').html($(this).children().html());
        $(this).children().html(current);
        $('.list_lang_up').slideUp();
    });
    $('.faq-list span.help').click(
        function(){
            if($(this).hasClass('active')){
                $('.faq-list span.help').removeClass('active');
                $('.hide').slideUp();
                return;
            }
            $('.faq-list span.help').removeClass('active');
            $('.hide').slideUp();
            var self= $(this).parent();
            $('.hide', self).slideDown();
            $(this).addClass('active');
        }

    );
    $('.header_nav li a').click(function() {
        $.scrollTo($(this).attr('href'),2000,{offset:-70});
    });





    $('.eyes').sSelect({
        defaultText: eyes
    });
    $('.hair').sSelect({
        defaultText: hair
    });

    $('.hairdress').sSelect({
        defaultText: hairdress
    });
    $('.origin').sSelect({
        defaultText: origin
    });
    $('.size').sSelect({
        defaultText: size
    });
    $('.age').sSelect({
        defaultText: age
    });
    $('.local-lang').sSelect({
        defaultText: local_lang,
        containerClass: 'table-lang'
    });
    $('.foot_size').sSelect({
        defaultText: foot_size,

    });
    $('.clothes_size').sSelect({
        defaultText: clothes_size

    });
    $('.smoke').sSelect({
        defaultText: smoke

    });
    $('#pop-up').click(function(e){

        if (e.target.className == 'bg-up') {
            $('#pop-up').fadeOut()
        }
    });

    $('button.btnb, button.btn ').click(function(){
        $("#pop-up").fadeIn();
        $("body").animate({"scrollTop":0},"slow");
    })

  $('button.enter').click(function(){
      $('#enter').fadeIn()
  });
    $('button.show-form-partners').click(function(){
        var top=$(document).scrollTop( )+90;
        $('#form-partners').css({'top': top+'px'}).fadeIn();

    });
    $('.close').click(function(e){

            $('#enter, #form-partners').fadeOut()

    });
  $('.header_nav li').click(function(){
      $('.header_nav li').removeClass('active');
      $(this).addClass('active');
  });

    if($('html').attr('lang')=='ru')
    {

        $("#datepicker").datepicker($.datepicker.regional["ru"]);
    }
    if($('html').attr('lang')=='de')
    {

        $("#datepicker").datepicker({ dateFormat: 'dd.mm.yy' });
    }

    $('#op').keyup( function(){
        var $this = $(this);
        if($this.val().length > 2)
            $this.val($this.val().substr(0, 2));
    });

});

