                                            // Leap Year Checker
                                            // switch
function isLeapYear(year) {
  let isLeap;
  switch (true) {
    case year % 4 === 0 && year % 100 !== 0:
      isLeap = true;
      break;
    case year % 400 === 0:
      isLeap = true;
      break;
    default:
      isLeap = false;
  }
  return isLeap;
}

// Example usage:
console.log(isLeapYear(2000)); // true.


                                          //  Ticket Pricing
                                        //    if elese
// Prompt the user to enter their age
const age = parseInt(prompt("Please enter your age:"));

// Determine the price of a movie ticket based on the user's age
let ticketPrice;
if (age <= 12) {
  ticketPrice = 10;
} else if (age >= 13 && age <= 17) {
  ticketPrice = 15;
} else {
  ticketPrice = 20;
}

// Display the ticket price
alert(`The ticket price for your age is $${ticketPrice}.`);



                                        //    Recursion:

                            // Fibonacci Sequence:
function fibonacci(n) {
    // Base cases
    if (n < 0) {
      throw new Error('Input must be a non-negative integer.');
    } else if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    }
  
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
  }




                                //   Power Function:
    function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}