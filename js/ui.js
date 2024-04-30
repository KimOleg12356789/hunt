

 $(document).ready(function() {

  

jQuery(document).ready(function() {
  $(".sliderDivClass").slider({
    orientation : "horizontal",
    range : "min",
    max : 30,
    value : 0,
    slide : updateSwatch,
    change : updateSwatch});  // End of slider() method
  
  $(".sliderDivClass").slider("value", 0);  // Initialize for first display
}); // End of doc ready() method
function updateSwatch() {
  var redWork = $("#redSliderDivId").slider("value"); // Assign the current slider values
  var greenWork = $("#greenSliderDivId").slider("value");
  var blueWork = $("#blueSliderDivId").slider("value");
  var rgbWork = "rgb(" + redWork + "," + greenWork + "," + blueWork + ")"; // Assign concatenated values
  $(".rgbSwatchClass").css("background-color", rgbWork);  // Display the RBG Slider Values
  $("#redSliderInputId").val(redWork);  // Show individual RGB Values
  $("#blueSliderInputId").val(blueWork);
  $("#greenSliderInputId").val(greenWork);
  $("#rgbGroupId").val(rgbWork);    // Show the RGB values together
  var redOppositeWork = 30 - redWork;  // Get the opposite color for the Swatch Demo text
  var greenOppositeWork = 30 - greenWork;
  var blueOppositeWork = 30 - blueWork;
  var rgbOppositeWork = "rgb(" + redOppositeWork + "," + greenOppositeWork
      + "," + blueOppositeWork + ")"; // Concatenate the values for the text color
  if (redWork == 0 && blueWork == 0 && greenWork == 0) {
    rgbOppositeWork = "rgb(255,255,255)";} // Set text to white when default (so it is visible)
  $(".rgbSwatchClass span").css("color", rgbOppositeWork);  // Set the Swatch Demo text color
};



});


  $(document).ready(function() {
          $("#slider").slider({
              range: "min",
              animate: true,
              value:0,
              min: 1,
              max: 100,
              step: 1,
              slide: function(event, ui) {
                update(1,ui.value); //changed
              }
          });
          update();
          });
          function update(slider,val) {
        //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
        var $amount = slider == 1?val:$("#amount").val();
               
         $( "#amount" ).val($amount);
         $( "#amount-label" ).text($amount);

         $('#slider a').html('<label>'+$amount+'</label>');
}





