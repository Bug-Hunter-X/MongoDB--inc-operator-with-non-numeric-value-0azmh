# MongoDB $inc operator with non-numeric value
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is used to increment a numeric field by a specified value.  However, if a non-numeric value is provided, it will result in an error.

The `bug.js` file shows the incorrect usage, and `bugSolution.js` shows the corrected code.

This example highlights the importance of data type validation when working with MongoDB.