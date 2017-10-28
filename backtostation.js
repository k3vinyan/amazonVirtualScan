$(function(){

  var script = document.createElement("SCRIPT");
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
  script.type = 'text/javascript';

  script.onload = function() {
       var $ = window.jQuery;

       var tbaArray = [];

       var e = jQuery.Event("keypress");
       e.which = 13;
       e.keyCode = 13;
       

       const element = $("input#rtsPackageSearchInput");
       const buttonPlacement = $('#searchByContainer');

        buttonPlacement.before(
          optionButton("virtualScanButton", "Virtual Scan", "#FFFFFF", "#00cc00", "5px")
        );


        $("#virtualScanButton").click(function(e){

          var tbas = prompt("Input TBA(s)", "TBAs");
          tbaArray = tbas.split(" ");

          item = tbaArray.splice(0, 1);
          console.log(item)

          element.val(item);
          element.focus();
        });

        $(document).keypress(function(e) {
         if(e.which == 13) {
           if(tbaArray.length >= 0){
             setTimeout(function(){ 
              element.focus();
              element.val(tbaArray.splice(0, 1));
             }, 2000);
           }
         }
     });

     function optionButton(id, value, color, bgColor, padding){
       var id = id;
       var value = value;
       var color = color;
       var bgColor = bgColor;
       var padding = padding;
       var string;

       string = "<input id='" + id + "' type='button' value='" + value +
         "' style='" +"color: " + color + "; " + "background-color:" + bgColor +
         "; " + "padding: " + padding + "; border-style: none;'></button>";

         return string;
   };


};
   document.getElementsByTagName("head")[0].appendChild(script);
});
