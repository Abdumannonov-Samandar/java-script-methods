# JS Methods

## 1. String Methods

### `charAt(index)`
```js
let str = "Hello";
console.log(str.charAt(1)); // "e"
```

### `toUpperCase()` / `toLowerCase()`
```js
console.log("hello".toUpperCase()); // "HELLO"
console.log("WORLD".toLowerCase()); // "world"
```

### `trim()`
```js
let text = "  Hello World  ";
console.log(text.trim()); // "Hello World"
```

## 2. Array Methods

### `push()` / `pop()`
```js
let arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
arr.pop();   // [1, 2, 3]
```

### `unshift()` / `shift()`
```js
let arr = [2, 3, 4];
arr.unshift(1); // [1, 2, 3, 4]
arr.shift();    // [2, 3, 4]
```

## 3. Object Methods

### `Object.keys(obj)`
```js
let user = { name: "Alice", age: 25 };
console.log(Object.keys(user)); // ["name", "age"]
```

### `Object.values(obj)`
```js
console.log(Object.values(user)); // ["Alice", 25]
```

## 4. Array Iteration Methods

### `forEach(callback)`
```js
let numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2)); // 2, 4, 6
```

### `map(callback)`
```js
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

## 5. Date Methods

### `new Date()`
```js
let now = new Date();
console.log(now.toLocaleString()); // "3/2/2025, 2:30:15 PM"
```

### `getFullYear()`, `getMonth()`, `getDate()`
```js
console.log(now.getFullYear()); // 2025
console.log(now.getMonth() + 1); // Oy (0 dan boshlanadi)
console.log(now.getDate()); // Kun
```

