$(document).ready(function(){
$('.audio2').click(function(){
    $(this).css('color', '#FF8995');
})
})
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(document).scrollTop() > 50) {
			$("header").addClass("sticky");
		} else {
			$("header").removeClass("sticky");
		}
	});
});
//$(document).ready(function(){
//	$('#send-id').click(function(){
//		var src= $('.myaudio').attr('src');
//		console.log(src);
////		$('#hidden-id').val(src);
////		console.log($('#hidden-id').val());
//	})
//})
$('.delete').click(function() {
    location.reload();
});
$( ".form" ).on( "submit", function( event ) {
  console.log(document.getElementsByClassName("myAudio"));
  event.preventDefault();
  console.log( $( this ).serialize() );
});

$(document).ready(function(){
$('.delete').click(function(){
	$(this).parent().remove();
	$('#popup-audio, #popup-listen-send, #shadow-audio').hide();
})
})
$(document).ready(function(){
$('.send').click(function(){
	$('.hide-send').show();
})
})
$(document).ready(function(){
$('.sendd').click(function(){
	$('#audio-succes, #shadow-ass').show();
	$('#popup-listen-send').hide();
})
})
$(document).ready(function(){
$('.exit3, #shadow-ass').click(function(){
	$('#shadow-ass, #audio-succes').hide();
})
})
$(document).ready(function(){
$('#stop-recording-audio').click(function(){
	$('#popup-audio').hide();
	$('#popup-listen-send').show();
})
})
$(document).ready(function () {
	$('.audio-link').click(function () {
		$('#popup-audio, #shadow-audio').toggle();
		return false;
	});
	$('#shadow-audio').click(function () {
		$('#popup-audio, #shadow-audio, #popup-listen-send').hide();
	})
	
});
$('.number-send').click(function(){
	$('.send-box').show();
})

/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});

$(document).on('click', '.pagination li', function () {
	$(this).addClass('active').siblings().removeClass('active');
	event.preventDefault();
})

$(document).ready(function () {
	$('#popup-link').click(function () {
		$('#popup-contact, #shadow-contact').toggle();
		return false;
	});
	$('#shadow-contact, .exit').click(function () {
		$('#popup-contact, #shadow-contact').toggle();
	})
});
$(document).ready(function () {
	$('.request-x').click(function () {
		console.log($(this).attr('data-feedback'));
		var feedback= $(this).attr('data-feedback');
		$('#feedback').val(feedback);
		$('#popup-request, #shadow-request').toggle();
		return false;
	});
	$('#shadow-request, .exit1').click(function () {
		$('#popup-request, #shadow-request').toggle();
	})
});
$(document).ready(function () {
	$('.submit').click(function () {
		$('#popup-succes, #shadow-succes').toggle();
		$('#popup-request, #shadow-request').hide();
		return false;
	});
	$('#shadow-succes, .exit2').click(function () {
		$('#popup-succes, #shadow-succes').toggle();
	})
});
var owl = $('.index-top-owl');
owl.owlCarousel({
    items:3.4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
	dots: false,
	responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2.5,
            nav:false
        },
        1000:{
            items:3.4,
            nav:true,
            loop:true
        }
    }
});

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

var owl = $('.index-section4-owl');
owl.owlCarousel({
    items:2,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
	dots: true,
	responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        }
    }
});
var owl = $('.packages-owl');
owl.owlCarousel({
    items:2,
    loop:true,
    margin:10,
    autoplay:true,
	dots: false,
	responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:false,
            loop:true
        },
		1200:{
		items:3,
            nav:false,
            loop:true
	}
    }
});
var owl = $('.packages-owl2');
owl.owlCarousel({
    items:2,
    loop:true,
    margin:10,
    autoplay:true,
	dots: false,
	responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:false,
            loop:true
        },
		1200:{
		items:2,
            nav:false,
            loop:true
	}
    }
});
			$(document).ready(function() {
			  $('.nav-tabs > li > a').click(function(event) {
			    event.preventDefault(); //stop browser to take action for clicked anchor
			    //get displaying tab content jQuery selector
			    var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');
			    //find actived navigation and remove 'active' css
			    var actived_nav = $('.nav-tabs > li.active');
			    actived_nav.removeClass('active');
			    //add 'active' css into clicked navigation
			    $(this).parents('li').addClass('active');
			    //hide displaying tab content
			    $(active_tab_selector).removeClass('active');
			    $(active_tab_selector).addClass('hide');
			    //show target tab content
			    var target_tab_selector = $(this).attr('href');
			    $(target_tab_selector).removeClass('hide');
			    $(target_tab_selector).addClass('active');
			  });
			});