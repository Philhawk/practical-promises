# Practical Promises

In this workshop, we'll be covering how to use promises for asynchronous control flow by using them to log out poem stanzas.

Follow the exercises in `exercise-one.js` and `exercise-two.js`. Each exercise includes a description of its objective as well as an example of a solution using vanilla async callbacks. For each exercise, come up with an equivalent solution using promises.

Execute your code with: `node exercise-one` or `node exercise-two` followed by the name(s) of the problems you want to run. For example, `node exercise-one a` will run problem A.

We will be using the bluebird promise library, and you'll likely find [its documentation](https://github.com/petkaantonov/bluebird/blob/master/API.md) helpful. Strictly speaking you do not need any methods besides those of native ES6 promises, but some of the Bluebird methods may result in more elegant code.

Once you think you've figured out a problem, you can confirm by changing the spec for that from `xit` to `it` and running `npm test`.

Other tips for success:
* Because asynchronous code is non-deterministic (i.e. the results cannot be determined ahead of time), make sure to test the output to your solutions by running them multiple times, to see the output possibilities.
* Additionally, make sure to comment out the vanilla callback solutions before you test your promise-y versions; otherwise, the vanilla callback solutions will pass the tests for you!
* And lastly, take a little bit of time to read through the first few lines of both exercise files; in particular, take note of `promisifiedReadFile` as well as the `blue` and `magenta` functions; you will definitely want to use the first function in your solution, but see if you can also incorporate the latter two.
