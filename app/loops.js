// 1. Within the factorials function, write a loop that begins at 1 and multiplies every consecutive
// number up to and including the given number(num). Return the total after the loop completes.
// Example:
// input: 4
// output: 24
// 1*2*3*4 = 24

function factorials(num) {
  let output = 1

  for (let i = 1; i <= num; i++) {
    output *= i;
  }
  return output
}
// ------------------------------------------

// 2. Write a function that sums up all of the numbers in a range
// Example:
// input: 2, 6
// output: 20

function rangeTotal(n1, n2) {
  let total = 0

  for (let i = n1; i <= n2; i++) {
    // for (let j = 0; j < n2; j++)
    total = total + i
    //got 21
    //+ j got 84...
  }

  return total

}

// ------------------------------------------


// 3. Write a function that will take in a starting number, ending number, and a divisor. Iterate
// over the range of the numbers and return how many numbers can be divided by the divisor.
// Example:
// input: 15, 20, 5
// output: 2

function rangeDivisor(start, end, divisor) {
  //console.log(start, end, divisor)
  let totals = 0
  let number = 0
  for (let i = start; i <= end; i++) {
    // next line can be taken out
    totals = (totals + i) / divisor
    if (i % divisor == 0) {
      number += 1
    }
  }
  // console.log(totals)
  return number
}
