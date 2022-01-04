/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let count = 0;
  let result = 0;
  // 박스에 담긴 unit이 갯수를 기준으로 내림차순으로 정렬
  boxTypes.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < boxTypes.length; i++) {
    if (count + boxTypes[i][0] <= truckSize) {
      count += boxTypes[i][0];
      result += boxTypes[i][0] * boxTypes[i][1];
    } else {
      result += (truckSize - count) * boxTypes[i][1];
      break;
    }
  }

  return result;
};
