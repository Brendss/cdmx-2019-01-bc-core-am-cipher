window.cipher = {
  encode: (offset, mayus) => {
    let cifradoC = ""

    for (let i = 0; i < mayus.length; i++) {
      const ascii = mayus.charCodeAt(i);

      if (ascii >= 65 && ascii <= 90) {
        let formula = (ascii - 65 + parseInt(offset)) % 26 + 65;
        let nuevoCodigo = String.fromCharCode(formula);
        cifradoC += nuevoCodigo;

      } else if (ascii >= 97 && ascii <= 122) {
        let formula = (ascii - 97 + parseInt(offset)) % 26 + 97;
        let nuevoCodigo = String.fromCharCode(formula);
        cifradoC += nuevoCodigo;
      } else {
        let nuevoCodigo = String.fromCharCode(ascii);
        cifradoC += nuevoCodigo;
      }
    }

    return cifradoC
  },




  decode: (offset, text) => {
    let decifradoC = ""

    for (let j = 0; j < text.length; j++) {
      const ascii = text.charCodeAt(j);

      if (ascii >= 65 && ascii <= 90) {
        let formula = (ascii - 90 - parseInt(offset)) % 26 + 90;
        let nuevoCodigo = String.fromCharCode(formula);
        decifradoC += nuevoCodigo;
      } else if (ascii >= 97 && ascii <= 122) {
        let formula = (ascii - 122 - parseInt(offset)) % 26 + 122;
        let nuevoCodigo = String.fromCharCode(formula);
        decifradoC += nuevoCodigo;
      } else {
        let nuevoCodigo = String.fromCharCode(ascii);
        decifradoC += nuevoCodigo;
      }
    }

    return decifradoC

  }
};
