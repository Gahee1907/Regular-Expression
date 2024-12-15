const str = `
010-1234-5678
thesecon@gmail.com
https://www.gildong.com/?p1=1412$p2=alskqwer
The quick brown fox jumps over the lazy dog.
abbcccdddd, hippy.
http://www.naver.com
`;

// const regexp = new RegExp('the', 'g');
// const regexp = /the/gi;  regular expression

/*
let regexp = /./gi;
regexp = /\.$/gi;  
regexp = /\.$/gim;  

//Pattern (string)
console.log('(1)', str.match(/^the/g)); 
console.log('(2)', str.match(/^the/gm));
console.log('(3)', str.match(/^the/gmi));
console.log('(4)', str.match(/com$/gm));
console.log('(5)', str.match(/fox|dog/g));



//Pattern (character)
console.log('(1)', str.match(/h..p/g));
console.log('(2)', str.match(/https?/g));
console.log('(3)', str.match(/dd/g));
console.log('(4)', str.match(/b+/g));


//character set
console.log('(1)', str.match(/[]/g)); //비어있음
console.log('(2)', str.match(/[abc]/g)); //a,b,c중 일치 된 문자 모두 출력
console.log('(3)', str.match(/[0-9A-Z]/g)); //0~9, A~Z(대문자)

console.log('(4)', str.match(/[a-z]/g));
console.log('(5)', str.match(/[^a-z]/g));

// Meta character
console.log('(1)', str.match(/\d/g));
console.log('(2)', str.match(/[0-9]/g));

console.log('(3)', str.match(/\w/g));
console.log('(4)', str.match(/[a-zA-Z0-9_]/g)); //a~z, A~Z, 0~9, _

console.log('(5)', str.match(/\s/g));
console.log('(6)', str.match(/[ \t\n\r]/g)); // 공백, \tab, \n,\r 
*/

console.log('(1)', str.match(/b{2}/g));
console.log('(2)', str.match(/c{1,3}/g));
console.log('(3)', str.match(/d{1,}/g));