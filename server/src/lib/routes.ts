import { prisma } from './prisma';
import {z} from 'zod'

// para importar o app do server.ts pelo fastify
import { FastifyInstance } from "fastify";
import dayjs from 'dayjs';

export async function appRoutes(app: FastifyInstance) {

  //cria rota habits
  app.post('/habits', async (request) => {
      const createHabitBody = z.object({
        //vai receber uma string
        title: z.string(),
        //vai receber um array de números 0 domingo 1 segunda 2 terça 3 quarta 4 quinta 5 sexta 6 sábado, esse array vai te minimo de 0 e máximo de 6
        weekDays: z.array(z.number().min(0).max(6)),
  
      })
      //pega os parâmetros title e weekDays chama createHabitBody e converte para corpo da requisição
      const {title, weekDays}  = createHabitBody.parse(request.body)
//usa a biblioteca dayjs para criar a data atual e startOf zera as horas, minutos e segundos para que foco seja na data de criação e não na hora, o toDate converte para um objeto do tipo date em javascript
      const today = dayjs().startOf('day').toDate()

      //cria hábito
      await prisma.habit.create({
        data: {
          title,
          created_at: today,
          weekDays: {
            //usando map  eu percorre os dias da semana recebida na variavel weekDays do parse
            create: weekDays.map(weekDay => {
              // e para cada dia da semana eu vouretoenar um objeto com as informações que eu quero inserir
              return {
                //O DIA DA SEMAN DA TABELA É IGUAL AO DIA DA SEMANA QUE ESTÁ SENDO RECEBIDO
              week_day: weekDay,
            }
          }) 
          }
        }
      })
})

//cria rota para get para buscar informação de um dia especifico
app.get('/day', async (request) => {
  const getDayParams = z.object({
    //ele vai converter o parametro recebido em date em uma data 
    date: z.coerce.date()
  })
  // converte para uma query
  const {date} = getDayParams.parse(request.query)

  // pega a data recebida em date e busca apenas o dia da semana e o weekDay é um número será passado com o nome do dia
  const parsedDate  = dayjs(date).startOf('day')

  // pega data covertida em parseDate e retorna o dia
  const  weekDay = parsedDate.get('day')

  console.log(date, weekDay)

  // todos os habitos possiveis
  // habitos que já foram completados

  // para encontrar varios hábitos
  const  possibleHabits = await prisma.habit.findMany({
      where: {
      created_at: {
        //valida se a data de criação do hábito é meor ou igual a data atual
        lte: date
      },
      weekDays: {
  // procura hábitos onde pelo menos tenha um dia da semana cadastrado onde week_day seja igual ao  dia da semana que esto recebendo em date 
      }
    }
  })

  const day = await prisma.day.findUnique({
    where: {
      // pega parsedDate e converte para o tipo Date do javascript
      date: parsedDate.toDate(),
    },
    include: {
      // ele traz todos os dayHabits que estão relacionados  com esse dia 
      dayHabits: true,
    }
  })

  //verifica caso não tenha nenhum hábito completado naquele dia passado, caso tenha ele retorna os hábitos completados no dia, map percorre habitos completos e para cada registro na tabela dayHabit retorna id dos habitos completados
  const completedHabits = day?.dayHabits.map(dayHabit => {
    return dayHabit.habit_id;
  })
  return {
    possibleHabits,
    completedHabits,
    
  }
})

}//fim da função appRoutes
