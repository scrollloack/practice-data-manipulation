(() => {
  console.log("1: Synchronous start");

  setTimeout(() => {
    console.log("2: Timeout 100ms - Task Queue");
  }, 100);

  Promise.resolve().then(() => {
    console.log("3: Promise resolution - Micro Task Queue");
  });

  setTimeout(() => {
    console.log("4: Timeout 10ms - Task Queue");
  }, 10);

  console.log("5: Synchronous end");
})();
