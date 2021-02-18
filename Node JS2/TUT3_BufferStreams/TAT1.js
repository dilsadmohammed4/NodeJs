var buf = Buffer.alloc(10);
buf.write("Hello");

var buf2 = Buffer.from("Welcome");

console.log(buf);
console.log(buf2);
console.log(buf2.toString());
console.log(buf.toString());
console.log(buf2.toJSON());