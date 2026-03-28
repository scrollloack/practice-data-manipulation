console.log("Output should 1,5,3,2,4");

(() => {
  console.log("1: Synchronous start");

  setTimeout(() => {
    console.log("2: Asynchronous - Timeout 0ms - Tasks Queue");
  }, 0);

  Promise.resolve().then(() =>
    console.log("3: Asynchronous - Promise - Micro Tasks Queue"),
  );

  setTimeout(() => {
    console.log("4: Asynchronous - Timeout 10ms - Tasks Queue");
  }, 10);

  console.log("5: Synchronous end");
})();
