var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array.

// Your code goes here
noStrings = misc.filter(function(item){
    if (Array.isArray(item)) {
      return typeof(item[0]) != "string";
    }
    return typeof(item) != "string";
});

console.log(noStrings);