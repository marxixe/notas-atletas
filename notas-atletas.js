function calcMedia(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        let nome = atletas[i].nome;
        let notas = atletas[i].notas;

        notas.sort(function(a, b){
          return a - b;
        });

        let notasComputadas = notas.slice(1, 4);
        let soma = 0;

        notasComputadas.forEach(function(nota) {
          soma = soma + nota;
        });

        let media = soma / notasComputadas.length;

        console.log(`Atleta: ${nome}\nNotas Obtidas: ${notas}\nMédia Válida: ${media}\n`);
    };
};

let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

   calcMedia(atletas);