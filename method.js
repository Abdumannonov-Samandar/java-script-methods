//? 1. String metodlari
//* 1️⃣ charAt(index) → Berilgan indeksdagi harfni qaytaradi.
let str = "Hello";
console.log(str.charAt(1)); // "e"


//* 2️⃣ toUpperCase() va toLowerCase() → Barcha harflarni katta yoki kichik harfga o‘tkazadi.
console.log("hello".toUpperCase()); // "HELLO"
console.log("WORLD".toLowerCase()); // "world"


//* 3️⃣ trim() → Boshi va oxiridagi bo‘sh joylarni olib tashlaydi.
let text = "  Hello World  ";
console.log(text.trim()); // "Hello World"


//* 4️⃣ slice(start, end) → Stringdan bir bo‘lakni qaytaradi.
let word = "JavaScript";
console.log(word.slice(0, 4)); // "Java"
console.log(word.slice(-3));   // "ipt" (oxiridan 3 ta harf)


//* 5️⃣ replace(old, new) → String ichidagi matnni almashtiradi.
let sentence = "I love JavaScript!";
console.log(sentence.replace("JavaScript", "Python")); // "I love Python!"


//* 6️⃣ split(separator) → Stringni ajratib massivga aylantiradi.
let names = "Alice,Bob,Charlie";
console.log(names.split(",")); // ["Alice", "Bob", "Charlie"]


//? 2. Array metodlari

//* 7️⃣ push() va pop() → Oxiridan element qo‘shish va o‘chirish.
let ar = [1, 2, 3];
ar.push(4); // [1, 2, 3, 4]
ar.pop();   // [1, 2, 3]

//* 8️⃣ unshift() va shift() → Boshidan element qo‘shish va o‘chirish.
let arr = [2, 3, 4];
arr.unshift(1); // [1, 2, 3, 4]
arr.shift();    // [2, 3, 4]

//* 9️⃣ slice(start, end) → Massivning bir qismini olish.
let nums = [10, 20, 30, 40, 50];
console.log(nums.slice(1, 3)); // [20, 30]

//* 🔟 splice(start, deleteCount, ...items) → Element qo‘shish/o‘chirish.
let colors = ["red", "blue", "green"];
colors.splice(1, 1, "yellow"); // ["red", "yellow", "green"]

//* 1️⃣1️⃣ concat() → Ikkita massivni birlashtirish.
let arr1 = [1, 2];
let arr2 = [3, 4];
console.log(arr1.concat(arr2)); // [1, 2, 3, 4]


//* 1️⃣2️⃣ join(separator) → Massiv elementlarini stringga aylantirish.
let words = ["Hello", "World"];
console.log(words.join(" ")); // "Hello World"


//? 3. Object metodlari

//* 1️⃣3️⃣ Object.keys(obj) → Ob’ekt kalitlarini qaytaradi.
let user = { name: "Alice", age: 25 };
console.log(Object.keys(user)); // ["name", "age"]


//* 1️⃣4️⃣ Object.values(obj) → Ob’ekt qiymatlarini qaytaradi.
console.log(Object.values(user)); // ["Alice", 25]


//* 1️⃣5️⃣ Object.entries(obj) → Kalit-qiymat juftliklarini massiv sifatida qaytaradi.
console.log(Object.entries(user)); // [["name", "Alice"], ["age", 25]]


//? 4. Array Iteration metodlari

//* 1️⃣6️⃣ forEach(callback) → Har bir element uchun funksiyani ishlatadi.
let numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2)); // 2, 4, 6


//* 1️⃣7️⃣ map(callback) → Har bir elementni o‘zgartirib, yangi massiv qaytaradi.
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]


//* 1️⃣8️⃣ filter(callback) → Shartga mos elementlarni qaytaradi.
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2]


//* 1️⃣9️⃣ find(callback) → Shartga mos birinchi elementni qaytaradi.
let found = numbers.find(num => num > 1);
console.log(found); // 2


//* 2️⃣0️⃣ some(callback) va every(callback) → Shartga mos kelish tekshiruvi.
console.log(numbers.some(num => num > 2)); // true
console.log(numbers.every(num => num > 0)); // true


//? 5. Date metodlari

//* 2️⃣1️⃣ new Date() → Hozirgi sana va vaqtni olish.
// javascript
let now = new Date();
console.log(now.toLocaleString()); // "3/2/2025, 2:30:15 PM"


//* 2️⃣2️⃣ getFullYear(), getMonth(), getDate()

console.log(now.getFullYear()); // 2025
console.log(now.getMonth() + 1); // Oy (0 dan boshlanadi)
console.log(now.getDate()); // Kun


//? 6. Math metodlari

//** 2️⃣3️⃣ Math.random() → 0 dan 1 gacha tasodifiy son qaytaradi.
console.log(Math.random()); // Masalan, 0.7382


//* 2️⃣4️⃣ Math.floor(), Math.ceil(), Math.round() → Sonlarni yaxlitlash.

console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1));  // 5
console.log(Math.round(4.5)); // 5


//* 2️⃣5️⃣ Math.max() va Math.min() → Eng katta va eng kichik sonni topish.

console.log(Math.max(10, 20, 30)); // 30
console.log(Math.min(10, 20, 30)); // 10