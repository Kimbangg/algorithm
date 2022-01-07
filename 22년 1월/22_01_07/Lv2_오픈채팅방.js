function solution(record) {
  const map = {};
  const answer = [];

  record.forEach(data => {
    const [command, userId, userName] = data.split(' ');

    switch (command) {
      case 'Enter':
        answer.push([userId, '님이 들어왔습니다.']);
        map[userId] = userName;
        break;
      case 'Leave':
        answer.push([userId, '님이 나갔습니다.']);
        break;
      case 'Change':
        map[userId] = userName;
        break;
    }
  });

  return answer.map(ele => map[ele[0]] + ele[1]);
}
