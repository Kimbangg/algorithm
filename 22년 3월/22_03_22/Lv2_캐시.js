function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];

  cities = cities.map(city => city.toUpperCase());

  if (cacheSize == 0) return cities.length * 5;

  cities.forEach(city => {
    const idx = cache.findIndex(data => data === city);

    if (idx !== -1) {
      cache.splice(idx, 1);
      answer += 1;
    } else if (cache.length === cacheSize) {
      answer += 5;
      cache.shift();
    } else {
      answer += 5;
    }
    cache.push(city);
  });

  return answer;
}
