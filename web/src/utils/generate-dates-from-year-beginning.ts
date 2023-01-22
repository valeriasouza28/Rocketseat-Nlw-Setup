import dayjs from "dayjs";

// gera todas as datas desde o começo do ano
export function generateDatesFromYearBeginning() {
  // pega data no começo do ano 
  const firstDayOfTheYear = dayjs().startOf('year')
  // cria data atual
  const today = new Date()
// pssa dia 1 do ano
  let compareDate = firstDayOfTheYear

  const dates = [] 

  // pega o dia 1 do ano e vai aumentando e preenchendo a variável dates 
// enquanto a variavel que eu estou usando como comparação do while for anterior a today isBefore é do dayjs
  while(compareDate.isBefore(today)) {
    // insere data convertia em ojeto date dentro do array dates
    dates.push(compareDate.toDate())
    // adiciona 1 dia no compareDate a cada interação do whiele
    compareDate = compareDate.add(1, 'day')
  }

  return dates
}