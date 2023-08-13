export const fetchData = () => {
  return fetch('https://koreanjson.com/posts/1')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => data);
};
