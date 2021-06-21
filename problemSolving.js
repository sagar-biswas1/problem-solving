function rotateLeft(d, arr) {
  for (let i = 0; i < d; i++) {
    const elem = arr.shift();
    arr.push(elem);
  }
  return arr;
}


