const str = `
010-1234-5678
thesecon@gmail.com
https://www.gildong.com/?p1=1412$p2=alskqwer
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

// const regexp = new RegExp('the', 'g');
// const regexp = /the/gi;  regular expression

// let regexp = /./gi;

let regexp = /\.$/gi;
console.log('(1)',str.match(regexp));

regexp = /\.$/gim;
console.log('(2)', str.match(regexp));