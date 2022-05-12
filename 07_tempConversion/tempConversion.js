
const ftoc = function(temp) {
  ctemp = (temp - 32)*(5/9);
  
  return Math.round(ctemp * 10)/10;
};

const ctof = function(temp) {
  ftemp = temp * (9/5) + 32;

  return Math.round(ftemp * 10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
