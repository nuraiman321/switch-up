

function switchUp(str){
    let afterSwitch = []
    let afterSplit = str.split('')
    afterSplit.map(char => {
        if(char === char.toLocaleLowerCase()){
            afterSwitch.push(char.toLocaleUpperCase())
        }if(char === char.toLocaleUpperCase()){
            afterSwitch.push(char.toLocaleLowerCase())
        }
    })

    return afterSwitch.join('')
    
}

console.log(switchUp('heLLo there'))
console.log(switchUp('HAI theRE'))
console.log(switchUp('hoW ARe You DOinG'))

