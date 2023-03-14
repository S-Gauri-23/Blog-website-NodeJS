setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, 5000);

const int = setInterval(() => {
    console.log('in the interval');
}, 1000);