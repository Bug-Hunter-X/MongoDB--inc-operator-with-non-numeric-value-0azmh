```javascript
// Incorrect usage of $inc operator with a non-numeric value
db.collection.updateOne({ _id: 1 }, { $inc: { field: "1" } });
```