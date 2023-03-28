jQuery(document).ready(function() {
    jQuery("#menu").click(function () {
      jQuery("nav").slideToggle(400, function () {
        jQuery(this).toggleClass("nav-expanded").css('display', '');
      });
    });
  });
  
  jQuery(document).ready(function() {
    jQuery("#nav-icon1").click(function () {
      jQuery("nav").slideToggle(400, function () {
        jQuery(this).toggleClass("nav-expanded").css('display', '');
      });
    });
  });
  
  $(document).ready(function(){
      $('#nav-icon1').click(function(){
          $(this).toggleClass('open');
      });
  });