module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }
  while (true) {
    let currentLength = str.length;
    for (let i = 0; i < bracketsConfig.length; i++) {
      str = str.replace(bracketsConfig[i].join(''), '');
    }
    if (str.length == 0 || str.length == currentLength) {
      break;
    }
  }
  if (str.length == 0) {
    return true;
  } else {
    return false;
  }
}
