const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
 
    let result = []
    let res = []
    let uppers = ['Q','W','E','R','T','Y','U','I','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
    for (let elem of arr){
    if(typeof(elem) === 'string'){
    result.push(elem.slice(0,1))
    }
    }
    for (let elem of result){/*add symblos uppercase*/
    if(uppers.indexOf(elem) !== -1){
    res.push(elem)
    }
    }
    
    return(res.sort().join(''))
    }
    
   

