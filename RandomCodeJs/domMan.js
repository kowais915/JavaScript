// // How do you change attribute of a node?

// const para = document.querySelector('p');

// para.setAttribute('style', 'color: green;');

// Accessing children of a tag

const tag = document.querySelector('div');
console.log(tag.children);

const converted = Array.from(tag.children);

console.log(converted);
