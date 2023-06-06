let alarmTime = process.argv.slice(2);

/*
An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.*/


for (let time of alarmTime) { 
  if(time < 0 || isNaN(time)){
    continue;
  }
  time = time * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time);

}
