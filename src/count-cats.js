const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let cats = []
for (let i=0;i<arr.length;i++){

for(let j=0;j<arr[i].length;j++){
if(arr[i][j] === '^^'){
cats.push(arr[i][j])
}
}
}
return(cats.length)

};
