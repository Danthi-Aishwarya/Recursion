console.log(0);
console.log(1);
let count = 2;
function fibonacci(prev1, prev2) {
  if (count <= 7) {
    let newFibo = prev1 + prev2;
    console.log(newFibo);
    prev2 = prev1;
    prev1 = newFibo;
    count++;
    fibonacci(prev1, prev2);
  } else {
    return;
  }
}
fibonacci(1, 0);

// merge sort
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);
  return merge(sortedLeft, sortedRight);
}
function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  result.push(...left.slice(i));
  result.push(...right.slice(j));
  return result;
}
