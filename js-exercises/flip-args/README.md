# Instructions

Create a function that invokes `func` with arguments reversed.

```js
var flipped = flipArgs(function() {
  console.log(arguments);
});
 
flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']
```

# Requirements

### **What are some good real-life use cases for such a function?**
*Real-life use cases would be to check against specific function argument order*

### **What test cases can you add to the test file?**

*Added test case to validate if function provided with argument(s) returns reversed arguments*

*Added test case to validate if function provided with no argument returns null*

*Added test case to validate if function provided with one argument returns same argument*


# Restrictions
- Don't use any libraries