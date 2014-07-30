var f2c = function(temp){
    // *1.8 + 32
  var celc = (temp - 32)/ 1.8;
  return Math.round(celc);
}; // end f2c

var c2f = function(temp){
  var fair = (temp * 1.8) + 32;
  return fair;
};


function Temperature(){

} // end Temperature