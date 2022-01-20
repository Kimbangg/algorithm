const solution = (bridge_length, weight, truck_weights) => {
  let answer = 0;
  let currentWeight = 0;
  const bridge = [];

  while (truck_weights.length !== 0) {
    answer += 1;

    if (bridge.length === bridge_length) {
      currentWeight -= bridge.shift();
    }

    if (currentWeight + truck_weights[0] <= weight) {
      const nextTruck = truck_weights.shift();
      bridge.push(nextTruck);
      currentWeight += nextTruck;
    } else {
      bridge.push(0);
    }

    if (truck_weights.length === 0) {
      answer += bridge_length;
      break;
    }
  }

  return answer;
};
