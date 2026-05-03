import Logo from '../assets/logo.svg';
import Mail from '../assets/icon-mail.svg';
import SecurityCheck from '../assets/icon-security-lock.svg';
import Facebook from '../assets/facebook-icon.svg';
import Apple from '../assets/apple-icon.svg';
import Google from '../assets/google-icon.svg';


const Login = () => {

  return (
    <div>
        <div className="inset-0 box-login">
            <div className="logo">
                <img src={Logo} alt="Logo" className='main-logo' />
            </div>
             <div className="text-login flex justify-center items-center">
          <h1>Entrar na sua conta</h1>
          <p>
            Acesse sua conta para continuar e gerenciar suas informações com segurança.
          </p>
        </div>

        <div className="form-login flex flex-col gap-5">
          <div className="relative first-input flex flex-col gap-2">
            <h4 className='text-[10px]'>Email</h4>
            <input type="email" className='input-one' placeholder="ex.: matiasfrancisco@gmail.com"/>
            <img src={Mail} alt="icon-mail" className='img-icon absolute top-9 left-66'/>

          </div>
           <div className="relative first-input flex flex-col gap-2">
            <h4 className='text-[10px]'>Palavra-passe</h4>
            <input type="password" className='input-one' placeholder="Digite a sua palavra-passe"/>
            <img src={SecurityCheck} alt="icon-mail" className='img-icon absolute top-9 left-66'/>
            <div className='flex items-end justify-end'>
            <h4 className='text-[10px]'>Esqueceu a palavra-passe?</h4>
            </div>
          </div>

          <div className="cta-login">Entrar</div>

          <div className="mt-3 line relative flex justify-center items-center">
            <h4 className='text-[10px] text-[#1E1E1E] font-medium absolute -top-1.75px px-3 bg-white'>Ou entrar com</h4>
          </div>

          <div className="social-login flex gap-[6px] mt-[5px]">
            <div className='icon-social'>
            <img className= "img" src={Google} alt="" />
            </div>
              <div className='icon-social'>
            <img className= "img" src={Facebook} alt="" />
            </div>
              <div className='icon-social'>
            <img className= "img" src={Apple} alt="" />
            </div>

          </div>
          <div className='terms'>
            <p >Criando uma conta, você concorda com todos os nossos <span className='font-medium underline'>termos e condições.</span></p>
          </div>
        </div>
        </div>
       
    </div>

  )
}

export default Login