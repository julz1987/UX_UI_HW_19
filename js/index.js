/* Read More Button Hover JQuery  */
$(function() {
    let button = $('.btnOne');
    button.on('mouseenter', function(event) {
      
      let bOffset = $(this).offset();
      let rX = event.pageX - bOffset.left;
      let rY = event.pageY - bOffset.top;
  
      $(this).find('.circle').css({
        top: rY,
        left: rX
      });
  
    })
  
    button.on('mouseout', function(event) {
      
      let bOffset = $(this).offset();
      let rX = event.pageX - bOffset.left;
      let rY = event.pageY - bOffset.top;
  
      $(this).find('.circle').css({
        top: rY,
        left: rX
      });
      
    })
  })
  /* Read More Button Hover JQuery End */