function createGraph(howManyD6, howManyTimes) {
    const totalArray = []
    const countArray = []
    const array = []

    for(let i=0; i<howManyD6*6+1; i++){
        countArray.push(0)
    }

    for(let i=0; i<howManyTimes; i++){
        let sum = 0
        for(let k=0; k<howManyD6; k++){
            sum += Math.floor(Math.random()*6)+1
        }
        totalArray.push(sum)
        countArray[sum] += 1
    }

    for(let item of countArray){
        const percentage = item/(howManyTimes/100)
        let string = ""

        for(let i=percentage; i>0; i--){
            string += "-"
        }
        string += `   ${percentage}`
        array.push(string)
    }

    console.log(array)
}

createGraph(10, 1000000)
