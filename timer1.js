const times = process.argv.slice(2).map(Number);
const seconds = times.sort((a, b) => a - b).map(number => number * 1000);
const maxTime = times[times.length - 1];
let time = 0;

const timer = function () {
  if (time <= maxTime) {
    if (seconds.includes(time*1000)) {
      process.stdout.write(`Beep at ${time}s \x07`);
    }

    //Soace to check time interval
    process.stdout.write(`\n`);
    time++;
    setTimeout(timer, 1000);
  }

  
};

timer();

