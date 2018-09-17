// const outerThis = this;

// cost func = () => {
//     console.log(this === outerThis)
// };

// func();
// func.call(null);
// func.apply(undefined);
// func.bind({})();


const counter = {
    count: 0,
    incrementPeriodically() {
        setInterval(() => {
            console.log(++this.count);
        }, 1);
    }
}

counter.incrementPeriodically();