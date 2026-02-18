console.log("Output should 1 - 5 - 3 - 2 - 4");

(() => {
  console.log("1: Synchronous start");

  setTimeout(() => {
    console.log("2: Asynchronous - Timeout 0ms - Macro Task Queue");
  }, 0);

  Promise.resolve().then(() => console.log("3: Asynchronous - Promise"));

  setTimeout(() => {
    console.log("4: Asynchronous - Timeout 10ms - Macro Task Queue");
  }, 10);

  console.log("5: Synchronous end");
})();
