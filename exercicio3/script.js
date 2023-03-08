const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

const rankingPaises = (paises) => {


for(let i = 1; i <= paises.length; i++){
  console.log(`${i} - ${paises[i-1]}`)
}
}
rankingPaises(maioresPaises)

