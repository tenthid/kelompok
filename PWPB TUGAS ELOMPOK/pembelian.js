$(document).ready(function() {
 
    $('.color-choose input').on('click', function() {
        var hoodieColor = $(this).attr('data-image');
   
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + hoodieColor + ']').addClass('active');
        $(this).addClass('active');
    });
   
  });