function gerarTab() {
    let entrada = document.querySelector("input#in");
    let saida = document.querySelector("div#exibir");
    let opcao;
  
    if (entrada.value.length === 0) {
      alert("*Preencha o campo");
    } else {
      let valor = Number(entrada.value);
      for (let i = 1; i <= 10; i++) {
        opcao += `<option>${valor} x ${i} = ${valor * i}</option>`;
      }
      saida.innerHTML = `<select size="10"> ${opcao} </select>`;
    }
  }
  