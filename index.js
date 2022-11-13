
// will use this one to call all the function 


const p2 = new Promise((resolve, reject) => {
    resolve(1);
  });
  
  p2.then((value) => {
    console.log(value); // 1
    return value + 1;
  }).then((value) => {
    console.log(value, " - A synchronous value works"); // 2 - A synchronous value works
  });
  
  p2.then((value) => {
    console.log(value); // 1
  });