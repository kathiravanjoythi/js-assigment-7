// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
//Map
let M = new Map();
console.log(M);
M.set('name', ['kumaran', 'kathiravan']);
console.log(M.get('name'));
M.set('car', { color: 'black', price: '560000' });
console.log(M.get('car'));
M.set('mark', 35);
console.log(M.get('mark'));
M.set('pass', 'true');
M.delete('pass');
console.log(M.get('pass'));
M.set('K', [
  { name: 'kathir', fullname: 'kathiravan', Age: 11 },
  { schoolname: 'J.M.J matric.Hr.Sec.school', in: 'marakkanam' },
]);
console.log(M.get('K'));
M.has('name');
console.log(M.get('name'));

//set
let S = new Set();

console.log(S)
S.add("kathiravan")
console.log(S.has('kathiravan'))
S.add(11)
console.log(11)
S.add(["kumaran",20])
S.add({name: 'kathir', age:11})
S.add(10)
S.delete(20)
S.delete('kumaran')
console.log(S.size)
