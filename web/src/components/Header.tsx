import logoImage from '../assets/logo.svg'
// dá um ctrl space aparece o nome dos icones para importar 
import {Plus} from 'phosphor-react'

export function Header() {
  return (
     /* mx auto é marging auto, justify-between colocar items  no canto esquerdo e outro para o direito  */
<div className="w-full max-w-3xl mx-auto flex items-center justify-between">
<img src={logoImage} alt="Habits" />

<button 
type="button"
// border-violet cor da borda, font do botão,  rounded-lg arredonda borda, px é padding lateral, py padding bottom e top
className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300"
>
   {/* usa Icone de mais e define  tamanho de 80pixels  */}
  <Plus size={20} className="text-violet-500 "/>
  Novo hábito
</button>
</div>
  )
}
