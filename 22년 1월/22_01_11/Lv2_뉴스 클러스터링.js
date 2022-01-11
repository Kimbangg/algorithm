const makeMultipleSet = str => {
  const strArr = [];

  for (let i = 0; i < str.length; i++) {
    const subStr = str.substr(i, 2);

    if (subStr[0] >= 'A' && subStr[0] <= 'Z' && subStr[1] >= 'A' && subStr[1] <= 'Z') {
      strArr.push(subStr);
    }
  }

  return strArr;
};

function solution(str1, str2) {
  let answer = 0;

  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  if (str1 === str2) {
    return 65536;
  }

  const arr1 = makeMultipleSet(str1);
  const arr2 = makeMultipleSet(str2);

  //교집합과 합집합을 구하는 과정
  const intersection = [];
  const union = [];

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) >= 0) {
      intersection.push(arr1.splice(arr1.indexOf(arr2[i]), 1));
    }
    union.push(arr2[i]);
  }

  for (let i = 0; i < arr1.length; i++) {
    union.push(arr1[i]);
  }

  if (intersection.length === 0 && union.length === 0) {
    return 65536;
  }

  return parseInt(65536 * (intersection.length / union.length));
}
