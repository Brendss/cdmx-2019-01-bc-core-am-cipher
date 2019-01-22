window.cipher = {
    encode: (offset, mayus) => {
      let cifradoC = ""

      for (let i = 0; i < mayus.length; i++) {
        const ascii = mayus.charCodeAt(i);

        if (ascii >= 65 && ascii <= 90) {
          let formula = (ascii - 65 + parseInt(offset)) % 26 + 65;
          let nuevoCodigo = String.fromCharCode(formula);
          cifradoC += nuevoCodigo;

        } else if (ascii >= 32 && ascii <= 64) {
          let nuevoCodigo = String.fromCharCode(ascii);
          cifradoC += nuevoCodigo;
        } else if (ascii >= 97 && ascii <= 122) {
          let formula = (ascii - 97 + parseInt(offset)) % 26 + 97;
          let nuevoCodigo = String.fromCharCode(formula);
          cifradoC += nuevoCodigo;
        }


      }
      //console.log (cifradoC)
      return cifradoC;
    },

    decode: (offset, text) => {
      let decifradoC = ""

      for (let j = 0; j < text.length; j++) {
        const ascii = text.charCodeAt(j);

        if (ascii >= 65 && ascii <= 90) {
          let formula = (ascii + 65 - parseInt(offset)) % 26 + 65;
          let nuevoCodigo = String.fromCharCode(formula);
          decifradoC += nuevoCodigo;
        } else if (ascii >=32 && ascii<= 64) {
          let nuevoCodigo = String.fromCharCode(ascii);
          decifradoC += nuevoCodigo;
        } else if (ascii >= 97 && ascii <= 122) {
          let formula = (ascii + 97 - parseInt(offset)) % 26 + 97;
          let nuevoCodigo = String.fromCharCode(formula);
          decifradoC += nuevoCodigo;
        }
        /*for (let j = 0; j < text.length; j++) {
          const ascii = text.charCodeAt(j);
          const formula = (ascii + 65 - parseInt(offset)) % 26 + 65;
          const nuevoCodigo = String.fromCharCode(formula);
          decifradoC += nuevoCodigo;
        }*/
        //console.log (decifradoC)
        return decifradoC

      }
    }
  }