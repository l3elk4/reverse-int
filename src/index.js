module.exports = function reverse (n) {
  let b = String(Math.abs(n));
return Number(b.split("").reverse().join(""));

}

