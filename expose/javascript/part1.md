1. (Line 9) values added:  20
2. (Line 13) final result:  20
3. (Line 9) values added:  20
4. (Line 13) There is an error. The error is `ReferenceError: result is not defined` and the reason for this is because the scope of `let` is only within the `if`-`else` block (it has a block scope). Hence, the variable result cannot be accessed outside of it.
5. (Line 9) There is an error. The error is `TypeError: Assignment to constant variable.` We get this error because we are trying to reassign a variable that has been initialized using the `constant` keyword.
6. (Line 13) There is an error. The error thrown is `TypeError: Assignment to constant variable.` We are trying to reassign a variable that has been initialized using the `constant` keyword. Even if this line reassignment wasn't there, the scope of `const` is only in the `if`-`else` block and so we can't access it outside the block since it has a block scope.