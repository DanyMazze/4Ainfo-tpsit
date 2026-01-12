function f1(parNome) { 
   console.log("Hi "+ parNome);
}

function f2(str)  {
    let s=str.split("").reverse().join("");
    return s;
}

module.exports={saluta:f1,inverti:f2}



