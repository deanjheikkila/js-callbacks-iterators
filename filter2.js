var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array.

// Your code goes here
noStrings = misc.filter(function(item){
    if (Array.isArray(item)) {
      return typeof(item[0]) != "string";
    }
    return typeof(item) != "string";
});

// alternate method
function findStrings(item) {
  if(typeof item != "number"){
    if (typeof item === "string") {
      return true;
    } else {
      if (Array.isArray(item)) {
        for (var i = 0; i < item.length; i++) {
          if (typeof item[i] != "string") {
            return false;
          }
        }
        return true;
      } else {
      for (const elm in item) {
          if (typeof item[elm] != "string") {
            return false;
          } else {
            return true;
          }
      }
      return true;
      }
  }
}}
console.log(noStrings);