// import { Habit } from './components/Habit'
import { Header } from './components/Header'
import { SummaryTable } from './components/SummaryTable'
import './styles/global.css'


export function App() {

  return (

    // w-screen h-screen ocupa todo espaço da tela, 
    <div className="w-screen h-screen flex justify-center items-center">

       {/* w-full max-w-5xl em dispositivo menor toda tela desktop max 1000px de largura, px-6 é padding de 24px, flex-col coloca  elementos um abaixo  do outro */}
      <div className="w-full max-w-5xl p-6 flex flex-col gap-16">
        <Header/>
        <SummaryTable/>
      </div>
    
    </div>
  )
}

