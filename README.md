# <p align="center" dir="auto">BubbleScript 🫧</p>

TODO: add compiler ( similar to ScriptScript )

# Syntax

Types will be 'strict' so unless manually converted they won't change.
To define a variable:
```
var x num = 10;
```

`x` is the name of the variable an `num` is the type. There are 5 types: 
`str`, `num`, `str`, `arr`, `bool`.

`=` sets value, `==` checks the values, `!` is used to invert (for example `!=`).
Using `+` on 2 `num` types should return sum, while putting together `str` (for example `'a' + 'b' == 'ab'`),
`#` can also be used to write comments in your code and `''` is used for string.

Function is defined with a keyword `func` follow by name and then `()`.
Paratheses `()` can include parameters, they must be separated by commas.
Then code that is going to be executed will be inside of curly brackets: `{}`
```
func sum(a,b){
    return(a + b)
}

call sum(2,3) # returns 5
```
This is a simple function which returns the sum of 2 numbers, if you want the function to return a value once called, use `return()`. Then use `call` to call the function! (You may have also realized that you can put string into the function which would result in putting the 2 strings together ... so `call sum('hello','world')` => `'helloworld'`)

# Setup

If you want to transpile to JavaScript you can use something like Node.js and write node followed by the address of the file.
```
node c:\Users\[name]\Documents\GitHub\BubbleScript\js-transpiler.js
```