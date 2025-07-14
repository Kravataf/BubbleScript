# BubbleScript

TODO: compilation to wasm ( maybe js to compile? soo smth like scriptscript )

# Syntax

( similar to ScriptScript )

Types will be "strict" so unless manually converted they won't change.
To define a variable:
`var x num = 10;`

'x' is the name of the variable an 'num' is the type. There are 5 types: 
'str', 'num', 'str', 'arr', 'bool'

Each line should end with ';', '=' sets value, '==' checks the values, '!' is used to invert (for example '!=').

Using '+' on 2 'num' types should return sum, while putting together 'str' (for example 'a' + 'b' == 'ab')