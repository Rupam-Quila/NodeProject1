const buf1 = Buffer.alloc(26);
buf1.write("Hello Rupam");
console.log(buf1);
console.log(buf1.toString());

const buf2 = Buffer.from("Are You Fine");
console.log(buf2);
console.log(buf2.toString());
console.log(buf2.toJSON());