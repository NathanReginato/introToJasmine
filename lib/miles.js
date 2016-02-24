module.exports = {
  hasEnoughGas: function(car, route) {
    var howFar = car.milesPerGallon * car.gallonsInTank;
    if ( howFar >  route.miles ) {
      return true;
    } else {
      return false;
    }
  }
}
