import { HabitDay } from "./HabitDay"
import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning';

const weekDays = [
  "D", 
  "S", 
  "T", 
  "Q", 
  "Q", 
  "S", 
  "S"
]

const summaryDates = generateDatesFromYearBeginning()

// minimo dequadradinhos  que eu quero em tela que será 18 semanas vezes 7 
const minimumSummaryDatesSize = 18 * 7
// o quanto de quadradinhos que eupreciso mostar em tela para preencher a minha tabela de dias 
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

export function SummaryTable() {
return (
  <div className="w-full flex">

    {/* dias da semana */}
    <div className="grid grid-rows-7 grid-flow-row gap-3">
      {/* coloca dia da semana domingo// text-xl texto de 20px,  */}
      {weekDays.map((weekDays, i) => {
        return (
          <div key={`${weekDays}-${i}`} className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center ">
        {weekDays}
      </div>
        )
        })
      }
    </div>

      {/* Quadradinho do dia dos hábitos */}
    <div className="grid grid-rows-7 grid-flow-col gap-3">
      {/* para cada data percorrida ele retorna um componete HabitDay */}
      {summaryDates.map(date => {
        return <HabitDay key={date.toString()}/>
      })}

      {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_, i) => {
        return (
          // cursor-not allowed é para deixar o quadradinho sem iteração, o icone do cursor do mouse muda para icone de block, como não temos um paramentro em map vamos passar o indice para em key
          <div key={i} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"/>
      )
      })}
    </div>

  </div>
)
}