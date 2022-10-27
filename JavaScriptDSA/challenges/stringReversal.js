function reverse(str) {
  const arr = str.split(''); //e.g man == ["m","a","n"]
  arr.reverse();// ==["n","a","m"]
  const res = arr.join('');
  return res;
}
