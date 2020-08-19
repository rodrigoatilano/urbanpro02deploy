$(document).ready(function () {
  $('.slickCtn').slick({
    infinite: true,
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    }]
  });

  var counted = false;
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop() + $(this).height();

    if (document.getElementById('home')) {
      if (scrollTop >= $(".counterCtn").offset().top && !counted) {
        counted = true;
        counter();
      }
    }
  });

  equalHeights({
    container: 'messageCtn',
    column: 'col'
  });

  $("#contactForm").submit(function (e) {
    e.preventDefault();
    loadXMLDoc_sendMail();
  });
});
// ----------------------------------------------------------------------------
// HOME
// ----------------------------------------------------------------------------
function counter() {
  $('.counter').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count');

    $({
      countNum: $this.text()
    }).animate({
      countNum: countTo
    }, {
      duration: 5000,
      easing: 'linear',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
      }
    });
  });
}
// ----------------------------------------------------------------------------
function loadXMLDoc_sendMail() {
  var name = $("#name").val(),
    email = $("#email").val(),
    phone = $("#phone").val(),
    message = $("#message").val(),
    proceed = true;

  $("#contactForm input, #contactForm textarea").removeClass("invalid");
  if (!name) {
    $("#name").addClass("invalid");
    proceed = false;
  }
  if (!isValidEmailAddress(email)) {
    $("#email").addClass("invalid");
    proceed = false;
  }
  if (!phone) {
    $("#phone").addClass("invalid");
    proceed = false;
  }
  if (!message) {
    $("#message").addClass("invalid");
    proceed = false;
  }

  if (proceed) {
    var mailData = {
      name: name,
      email: email,
      phone: phone,
      message: message
    }

    $.ajax({
      type: "POST",
      url: '/lib/mgmtHome.php',
      data: {
        st: "sendMail",
        mailData: JSON.stringify(mailData)
      },
      success: function (response) {
        var dataResponse = $.parseJSON(response);
        if (dataResponse.error) {
          M.toast({
            html: 'Lo sentimos, por favor intente mas tarde.'
          });
        } else {
          $("#contactForm").find("input[type=text], input[type=email], textarea").val("");
          M.toast({
            html: 'Su correo ha sido enviado con éxito.'
          });
        }
      }
    });
  }
}
// ----------------------------------------------------------------------------
