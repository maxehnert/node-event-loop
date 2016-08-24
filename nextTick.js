
const someAsyncApiCall = (callback) => {
  process.nextTick(callback);
};

someAsyncApiCall(() => {
  console.log('bar', bar); // 1
});

let bar = 1;
