tests({

  // Fill this in with your test cases

  'object literal': function() {
    eq("true", isObjectLike({}));
  }
  'array': function() {
    eq("true", isObjectLike([1, 2, 3]));
  }
  'non-object': function() {
    eq("false", isObjectLike(Function));
  }
  'null test': function() {
    eq("false", isObjectLike(null));
  }

});
