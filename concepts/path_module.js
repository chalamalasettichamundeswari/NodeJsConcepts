const path = require('path')
console.log(path.sep);
//Output: /

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath);
//Output: /content/subfolder/test.txt

const base = path.basename(filePath);
console.log(base)
//Output:test.txt

const absolute = path.resolve(__dirname)
console.log(absolute)
//Output:/Users/chamundeswari/Documents/projects/concepts