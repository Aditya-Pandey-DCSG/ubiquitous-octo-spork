onEvent("start", "click", function( ) {
  var DisplaySeconds = 0;
  var DisplayMinutes = 0;
  var WaterUsed = 0;
  timedLoop(1000, function() {
  DisplaySeconds = DisplaySeconds+1;
  setNumber("lblSeconds", DisplaySeconds);
  });
  
  
  timedLoop(3000, function() {
    WaterUsed = WaterUsed+0.25;
    setNumber("lblWaterUsed", WaterUsed);
  });
  timedLoop(60000, function() {
    DisplaySeconds = DisplaySeconds - 60;
    setNumber("lblSeconds", DisplaySeconds);
    DisplayMinutes = DisplayMinutes+1;
    setNumber("lblMinutes", DisplayMinutes);
  });
  
  
});
onEvent("stop", "click", function( ) {
  stopTimedLoop();
});
