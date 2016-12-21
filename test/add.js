contract('Add', function(accounts) {
  it("should return 5 when add 2 and 3", function() {
    var add = Add.deployed();

    return add.sum.call().then(function(res){
      assert.equal(res.valueOf(), 6, "add result is 5");

    });
   
  });

});
