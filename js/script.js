$(document).ready(function(){
    $("generateAndPlot").hover(function() {
        var p = $("generateAndPlot").css("background", "linear-gradient(0deg, #3111e779 0%, hsla(0, 0%, 100%, 0.445) 51%, #ffffff65 100%)");
        p.hide(1500).show(1500);
        p.queue(function() {
          p.css("background", "linear-gradient(0deg, #ffffff79 0%, hsla(0, 0%, 100%, 0.445) 51%, #ffffff65 100%)");
        });
      });
})