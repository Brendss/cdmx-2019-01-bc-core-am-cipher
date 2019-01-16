window.cipher = {
  encode: (offset, mayus) => {
    cifradoC = ''
    for (let i = 0; i < mayus.length; i++) {
      const ascii = mayus.charCodeAt(i);
      const formula = (ascii - 65 + offset) % 26 + 65;
      const nuevoCodigo = String.fromCharCode(formula);
      cifradoC+=nuevoCodigo;
      console.log (cifradoC)
    }
    //return cifradoC;
    decode: () => {}
  }

};
