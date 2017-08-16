$(function(){

  var accept = new Audio();
  var buzzer = new Audio();

  var tbaArray = [];

  accept.src = "https://drive.google.com/uc?export=download&id=0B93xTaskz1_WMVhGcGJDR29xR0E";
  buzzer.src = "https://drive.google.com/uc?export=download&id=0B93xTaskz1_WZ3l3V2NJeDdWMDg";

  var e = jQuery.Event("keypress");
  e.which = 13; //choose the one you want
  e.keyCode = 13;
  //$("#theInputToTest").trigger(e);

   $("#comp-toolbar-panel").before(
     optionButton("virtualScanButton", "Virtual Scan", "#FFFFFF", "#00cc00", "5px")
   );


   $("#virtualScanButton").click(function(e){

     var tbas = prompt("Input TBA(s)", "TBAs");
     tbaArray = tbas.split(" ");

     item = tbaArray.splice(0, 1);
     console.log(item)

     $("#singleScanInput").val(item);
     $("#singleScanInput").focus();
   });

   $(document).keypress(function(e) {
    if(e.which == 13) {
      if(tbaArray.length >= 0){
        $("#singleScanInput").val(tbaArray.splice(0, 1));
        $("#singleScanInput").focus();
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

});
