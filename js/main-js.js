$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 40);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});
$(function(){
        "use strict";
   $(window).on("scroll",function(){
     var sc = $(window).scrollTop();
       if(sc >100){
           $(".static").fadeIn();
       } else {
          $(".static").fadeOut();
       }
   });
});
$(function() {
        "use strict";
   $(window).on("scroll",function(){
     var sc = $(window).scrollTop();
       if(sc > 100){
           $(".row1").addClass("bg-b");
       } else {
          $(".row1").removeClass("bg-b");
        }
   });
});


