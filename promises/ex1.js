let done = false;

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = "Here is the thing I built";
    resolve(workDone);
  } else {
    const why = "Still working on something else";
    reject(why);
  }
});

console.log(isItDoneYet);