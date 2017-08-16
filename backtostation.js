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
     createButton("virtualScanButton", "click me")
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

  function createButton(id, value, clas){
      var id = id;
      var value = value;
      var string;
      var clas;
      var margin = "'margin-right: 5px;'"
      string = "<input id='" + id + "' type='button' value='" + value +
      "' style=" + margin +" ></button>";
      return string;
    };

});
