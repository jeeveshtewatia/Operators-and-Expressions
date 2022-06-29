// You are provided a four digit number N only.
// Your task is to print out the first digit of that number

const First_Digit = (n) => {
    // while (n >= 10) {
    //     n = (n / 10);
    //     console.log(n)

    // }
    // console.log(Math.floor(n));
    n = n / 1000;
    console.log(n);
    console.log(Math.floor(n));

};
First_Digit(4567);
// console.log("aksjh")