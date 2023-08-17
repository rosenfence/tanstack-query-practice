import { DataType } from './Interface';

export const fetchData = (): Promise<DataType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch('https://koreanjson.com/posts')
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => resolve(data))
        .catch((error) => {
          console.error('Fetch error:', error);
          throw error;
        });
    }, 3000);
  });
};
