contract('Sum', function(accounts) {
  it("should return 5 when add 2 and 3", function() {
    var sum = Sum.deployed();

    return sum.func.call(2,3).then(function(res){
      assert.equal(res.valueOf(), 5, "sum of 2 and 3 is 5");
    });
   
  });

});
