// display content in calcScreen

const displayContent = (content)=>{
    calcScreen.value += content
}

// clear content of calcscreen
const clearAllContent = ()=>{
    calcScreen.value = ""
    calcScreen.placeholder = "0"
}

// show result
const showResult = ()=>{
    try {
        console.log("TRY block")
        calcScreen.value = eval(calcScreen.value)
    } catch(err){
        console.log("CATCH block")
        console.log(err)
        calcScreen.value = ""
        calcScreen.placeholder = "Invalid Expression !"
    }finally{
        console.log("Finally Block : Task Completed")
    }
   
}

// remove last
const removeLast = ()=>{
    calcScreen.value = calcScreen.value.slice(0,-1)
}



