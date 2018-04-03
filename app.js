$(document).ready(function(){
  // Raise SkillBox by 10px
  $('.skillBox').mouseenter(function(){
    $(this).css('transform','translateY(-10px)');
  });
  $('.skillBox').mouseout(function(){
    $(this).css('transform','translateY(10px)');
  });
  // Raise Button by 5px
  $('button').mouseenter(function(){
    $(this).css('transform', 'translateY(-5px)');
  });
  // Lower Button 5px
  $('button').mouseout(function(){
    $(this).css('transform', 'translateY(5px)');
  });
});
