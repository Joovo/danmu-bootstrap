$(function() {
  $("#btn-send").click(function() {
    var txt = $("#dm-txt").val();
    var div = " <div > " + txt + " </div>";
    $(".dm_show").append(div);
    $("#dm-txt").val("");
    init_screen();
  });
  $("#btn-erase").click(function(){
    $("#dm-show > div:nth-child(n)").remove();

  });
  init_screen();
});

function init_screen() {
  var obj = document.getElementById("dm-screen");
  var _top = obj.offsetTop;
  $(".dm_show").find("div").show().each(function() {
      var _left = obj.offsetLeft + obj.offsetWidth - $(this).width();
      //  $(this).css("color")=#FFF;
      $(this).css({
        left: _left,
        top: _top,
        color: getRandomColor()
      });
      _top = _top + $(this).height();
      if (_top > obj.offsetHeight + obj.offsetTop - $(this).width()) {
        _top = obj.offsetTop;
      }
      var time = 5000;
      if ($(this).index() % 2 == 0) time = 7000;
      $(this).animate({
        left: obj.offsetLeft + 'px'
      }, time, "linear", function() {
        $(this).remove();

      });


  });
}
var getRandomColor = function() {
  return '#' +
    (function(color) {
      return (color += '0123456789abcdef' [Math.floor(Math.random() * 16)]) &&
        (color.length == 6) ? color : arguments.callee(color);
    })('');
}
