  //Hamburger menu
  jQuery('.drawer-icon').on('click', function(e) {
    e.preventDefault();
    jQuery('.drawer-icon').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');

    return false;
  });

    //Auto scroll each sections
    jQuery('a[href^="#"]').on('click', function() {

        var id = jQuery(this).attr('href');
        var header = jQuery('.header').innerHeight();
        var position = 0;
        if (id != '#') {
          position = jQuery(id).offset().top - header;
        }
        console.log(id);
        console.log(position);
        jQuery('html,body').animate( {
          scrollTop: position
        },
        500);
      });