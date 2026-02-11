(() => {
  console.log("1: Synchronous start");

  setTimeout(() => {
    console.log("2: Asynchronous Timeout 100ms - Task Queue");
  }, 100);

  Promise.resolve().then(() => {
    console.log("3: Asynchronous Promise resolution - Micro Task Queue");
  });

  setTimeout(() => {
    console.log("4: Asynchronous Timeout 10ms - Task Queue");
  }, 10);

  console.log("5: Synchronous end");
})();

console.log("6: Should return 1,5,6,3,4,2");
