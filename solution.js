// Your code here
function isObjectLike(value) {
  let returner = false
    if (typeof(value) == 'object') {
      if (value !== null) {
        returner = true;
      }
    }
    return returner
}
// Be sure it's the cleanest code you can write!
