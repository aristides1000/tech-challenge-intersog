# Tech Challenge Intersog

## Please provide a short written description of your approach that explains:

### What would you do differently if you had more time?
- First, I would review the code in which the page is made, after that I would investigate the best way to optimize the execution speed in that code.
- It would define, at the server level, the execution time of the clear () function;

### What is the runtime complexity of each function?
- The first line of the request_handled (ip_address) function is only to keep a history of all requests. The second line of the function is in charge of modifying and ordering an array, and the last line modifying an array, O (1) + O (n) + O (1).
- The top100 () function only returns the data of an array, O (1).
- The clear () function, reassigns the values in empty objects, O (1).

### How does your code work?
- The first line of the request_handled (ip_address) function is only to keep a history of all requests. The second line of the function is in charge of modifying and ordering an array, and the last line modifying an array.
- The top100 () function only returns the data of an array.
- The clear () function, reassigns the values in empty objects.

### What other approaches did you decide not to pursue?
I didn't decide to iterate the 20 million IPs because it would take too long.

### How would you test this?
I would perform the tests with a library called jest for Node Package Manager (npm).