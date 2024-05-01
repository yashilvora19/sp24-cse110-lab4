1. `3` is printed in the terminal. No error because `i` is initiailized using the `var` keyword. The scope of this variable is in the entire function. Once the loop terminates, the value of `i` is `3` and so that latest value is printed out. 
2. `150` is printed in the terminal. This is because `discountedPrice` is also initialized using the `var` keyword and so can be accessed in the scope of the function. When the loop terminates, this is the value of that variable and so it is printed out.
3. `150` is printed in the terminal. This is because `finalPrice` is initialized using the `var` keyword (outside the loop in this case) and so can be accessed in the scope of the function. When the loop terminates, this is the value of that variable and so it is printed out.
4. This function returns the `discounted` array since it contains all the values in `prices` after applying `discount` to them. In this case, it would return the array `[50, 100, 150]` because `discount` is `0.5` and so those are each of the values after applying discount to `prices`.
5. This code causes an error. `i` is intialized in the for-loop using the `let` keyword and so its scope exists only within the for-loop. The error we get is `ReferenceError: i is not defined`. This is because `i` has a block scope and cannot be accessed outside the for-loop.
6. This code causes an error. `discountedPrice` is intialized in the for-loop using the `let` keyword and so its scope exists only within the for-loop. The error we get is `ReferenceError: discountedPrice is not defined`. This is because `discountedPrice` has a block scope and cannot be accessed outside the for-loop.
7. `150` is printed in the terminal. This is because `finalPrice` is initialized using the `let` keyword (outside the loop in this case) and so can be accessed in the scope of the **entire** function. When the loop terminates, this is the value of that variable and so it is printed out. Unlike the variables in 5 and 6, even though this variable has been initialized using `let`, its scope is the entire function because it was done outside the for-loop.
8. This function returns the `discounted` array since it contains all the values in `prices` after applying `discount` to them. In this case, it would return the array `[50, 100, 150]` because `discount` is `0.5` and so those are each of the values after applying discount to `prices`.
9. This code causes an error. `i` is intialized in the for-loop using the `let` keyword and so its scope exists only within the for-loop. The error we get is `ReferenceError: i is not defined`. This is because `i` has a block scope and cannot be accessed outside the for-loop.
10. `3` is printed out in the terminal. This is because `length` is initialized using the `const` keyword (outside the loop) and so can be accessed in the scope of the **entire** function. This value is constant and cannot be changed. Hence, the length of the list, i.e. `3` is printed out in the terminal.
11. This function returns the `discounted` array since it contains all the values in `prices` after applying `discount` to them. In this case, it would return the array `[50, 100, 150]` because `discount` is `0.5` and so those are each of the values after applying discount to `prices`. Even though `discounted` was initialized using the `const` keyword, it doesn't mean that it cannot be modified. This just means that the reference to the array cannot be changed- contents can be changed though.
12. 
    
A. `student.name`

B. `student['Grad Year']`

C. `student.greeting()`

D. `student['Favorite Teacher'].name`

E. `student.courseLoad[0]`

1.  
    A. `'32'`: 2 is converted to a string and concatenated with '3' to form '32'. This is because string type conversion happens when we need the string form of the value.

    B. `1`: '3' is converted to an int and 2 is subtracted from it to give 1. Numeric conversion in mathematical functions and expressions happens automatically. Hence, the string is converted to an int before the subtraction operation.
    
    C. `3`: `null` is converted to 0 and added to 3 to give 3. Numeric conversion in mathematical functions and expressions happens automatically and the rules state that `null` is equal to 0.
    
    D. `'3null'`: `null` is converted to a string and concatenated with '3'. This is because string type conversion happens when we need the string form of the value.
    
    E. `4`: `true` is treated as 1 and converted to that and added with 3 to give 4. Numeric conversion in mathematical functions and expressions happens automatically and the rules state that `true` is equal to 1. 
    
    F. `0`: `false` is treated as 0 and added to `null` which is also treated as 0 to give a total of 0. Numeric conversion in mathematical functions and expressions happens automatically and the rules state that `null` and `false` are equal to 0.
    
    G. `'3undefined'`: `undefined` is converted to a string and concatenated with '3'. This is because string type conversion happens when we need the string form of the value.
    
    H. `NaN`: A string cannot be subtracted from a `undefined` and so this isn't possible- `NaN` is returned when variables don't give a correct type or the calculation isn't possible even after conversion. Basically, for this subtraction operation `3` is converted to an integer and `undefined` becomes `NaN` as a number and so the subtraction operation is not possible.

2.  
    A. `true`: The string '2' is converted to an integer and compared with 1. Since 2 is greater than 1, true is returned.

    B. `false`: When 2 strings are compared, we check them character-by-character lexicographically. If we look at the first characters of both the strings, '2' is greater than '1' and so the statement is false. 
    
    C. `true`: The string '2' is converted to an integer and compared with 2. Since 2 is equal to 2, true is returned.
    
    D. `false`: The `===` operation does a check on the 2 values before performing type conversion. Since we have the integer 2 on the left hand side and the string '2' on the right hand side, false is returned. 
    
    E. `false`: `true` is converted to the integer 1. Since 1 is not equal to 2, false is returned. 
    
    F. `true`: Since `Boolean(2)` is `true` and both the types are the same (booleans) and equal (true), the comparision statement returns `true`.

3.  `==` checks for equality after performing type conversion. `===` checks for equality before performing type conversion. Hence `'2' == 2` returns `true` because the types are converted and then compared, but `'2' === 2` returns `false` because the types are different and so different before conversion. 
4.  Code is given in this [file](part2-question16.js) (or `part2-question16.js`).
5.  The result will be the array `[2, 4, 6]`. The reason for this is that when `modifyArray` is called with the 2 arguments `[1,2,3]` and `doSomething`, the for loop loops over every element in the array, called the function `doSomething` on each of those elements, and pushed them to the new array `newArr` and returns that. Within `doSomething`, the argument is multiplied by 2 and returned. Hence, each of the numbers 1, 2 and 3 are passed into `doSomething`, multiplied by 2 to give 2, 4, and 6 and pushed into the new array one by one and returned. 
    
    I also tested this out by running the code in this [file](part2-question17.js) (or `part2-question17.js`) and verified the answer. 
6.  Code is given in this [file](part2-question18.js) (or `part2-question18.js`).
7.  Output of the function:
    ```
    1
    4
    3
    2
    ```
    **Explanation:** When I run this program, it immediately runs all lines and prints out the `console.log` statements and prints out 1 and 4 in the terminal. 
    
    Following this, the program prints out 3 in the terminal after a 0 second delay and then prints out 2 in the terminal after a 1 second delay.

    I also tested this out by running the code in this [file](part2-question19.js) (or `part2-question19.js`) and verified the answer. 