window.cipher = {
  encode: (offset, mayus) => {
    let cifradoC = ""
   
    for (let i = 0; i < mayus.length; i++) {
      const ascii = mayus.charCodeAt(i);
      const formula = (ascii - 65 + parseInt(offset)) % 26 + 65;
      const nuevoCodigo = String.fromCharCode(formula);
      cifradoC += nuevoCodigo;
    }
     //console.log (cifradoC)
    return cifradoC;
  },

  decode: (offset,text) => {
    let decifradoC = ""

    for (let j = 0; j< text.length; j++){
      const  ascii = text.charCodeAt(j);
      const formula = (ascii + 65 - parseInt(offset)) % 26 + 65;
      const nuevoCodigo = String.fromCharCode(formula);
      decifradoC += nuevoCodigo;
    }
    //console.log (decifradoC)
    return decifradoC

  }
  }


