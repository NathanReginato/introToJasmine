var ride = require('../lib/rides')

describe('rides', function() {
  it('tests pass if child meets hight requirements', function() {
    var child1 = {
      height: 3,
      name: "Julian",
      age: 3
    };

    var child2 = {
      height: 4,
      name: "Cero",
      age: 4
    };

    var child3 = {
      height: 8,
      name: "Bigfoot",
      age: 4
    };

    var ride1 = {
      minHeight: 3,
      maxHeight: 7
    };

    var ride2 = {
      minHeight: 4,
      maxHeight: 7
    };

    expect(ride.isTallEnough(child1, ride1)).toEqual(true)
    expect(ride.isTallEnough(child1, ride2)).toEqual(false)

    it('tests pass if child meets hight requirements', function() {

      var child1 = {
        height: 3,
        name: "Julian",
        age: 3
      };

      var child2 = {
        height: 4,
        name: "Cero",
        age: 4
      };

      var child3 = {
        height: 8,
        name: "Bigfoot",
        age: 4
      };

      var ride1 = {
        minHeight: 3,
        maxHeight: 7
      };

      var ride2 = {
        minHeight: 4,
        maxHeight: 7
      };


    })

    expect(ride.isTallEnough(child2, ride1)).toEqual(true)
    expect(ride.isTallEnough(child2, ride2)).toEqual(true)
    expect(ride.isTallEnough(child3, ride2)).toEqual(false)
  });
});
