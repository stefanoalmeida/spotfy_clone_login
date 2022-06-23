import { Input } from '../components/Input'
import { Logo } from '../components/Logo'

export function Login(){

  return (
    <div className="container w-[375px] h-[812px] rounded-md ml-auto mr-auto mt-[80px] text-center bg-hero-pattern">

      <div className='flex items-center justify-center pt-[104px]'>
        <Logo/>
      </div>

      <div className='flex flex-col items-center gap-[22px] mt-[83px]'>

        <Input/>

        <button className='text-white bg-button-100 w-[295px] h-[47px] rounded-[6px] gap-[21px]'>
          Entrar
        </button>

        <p className='text-lg text-gray-300'>
          criar uma nova conta
        </p>

      </div>

    </div>
  )
}