

var a = document.getElementById("the4s_tabs");
var btns = a.getElementsByClassName("text_tabs_feature");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("text_tabs_feature_active");
  current[0].className = current[0].className.replace("text_tabs_feature_active", "");
  this.className += " text_tabs_feature_active";
  });
}
//best seller
var a = document.getElementById("the4s_tabs_bessler");
var btns = a.getElementsByClassName("tabs_best_seller_item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active_tabs_best_seller_item");
  current[0].className = current[0].className.replace("active_tabs_best_seller_item", "");
  this.className += " active_tabs_best_seller_item";
  });
}

//open_menu
$('.the4s_btn_menu').click(function (e) { 
    $('.the4s_section_menu').addClass('the4s_menu_mobible').slideDown(400);
    $('.the4s_overlay').show(400);
});
$('.the4s_btn_exit').click(function (e) { 
  $('.the4s_section_menu').removeClass('the4s_menu_mobible').slideUp(400);
  $('.the4s_overlay').hide(400);
});



$('.the4s_arrow_down1').click(function (e) { 
  $('.the4s_iteml').slideToggle(200);
});

$('.the4s_arrow_down2').click(function (e) { 
  $('.the4s_item_usd').slideToggle(200);
});

