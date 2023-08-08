import { useEffect, useState } from "react"

export default function App() {
  const [planoDeFundo,setPanoDeFundo] = useState(false)
  useEffect(()=>{
      if(planoDeFundo){
        document.getElementsByTagName("html")[0].className="dark"
      }else{
        document.getElementsByTagName("html")[0].className=""
      }
  },[planoDeFundo])
  return (
    <>
      <header className="container flex justify-between py-3 px-[2%] mt-4 sm:px-4 sm:items-center ">
        <div>
          <img className="inline-block w-4 mx-2 sm:w-8" src="/images/icon-messages.svg" alt=""/>
          <span className="text-base font-bold  dark:text-slate-50 sm:text-2xl">amontoado</span>
        </div>
        <div>
          <button className="p-[5px] mr-2  text-xs font-normal ring-2 ring-pink-500 rounded-full text-pink-600 hover:bg-pink-100 sm:mr-4" onClick={()=>{setPanoDeFundo(!planoDeFundo)}}>Experimente de graça</button>
        </div>
      </header>

      <main className="max-w-[1200px] sm:mx-auto">
        <section>
          <article className="mt-12 w-11/12 mx-auto text-center">
            <h1 className="text-xl font-bold dark:text-slate-50">Crie a comunidade que seus fãs vão adorar</h1>
            <p className=" text-sm  font-light text-gray-500 my-6 sm:w-[350px] sm:mx-auto">
            O Huddle reinventa a maneira como construímos comunidades. Você tem voz, mas seu público também. Crie conexões com seus usuários ao se envolver em discussões genuínas.
            </p>
            <div>
              <button className="py-2 px-10 text-lime-50 font-bold bg-pink-500 rounded-full">Comece gratuitamente</button>
            </div>
          </article>

          <article className="w-11/12 mx-auto mt-20">
            <div>
            <img src="/images/screen-mockups.svg" alt=""></img>
            </div>
          </article>

          <article className="text-center flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:w-4/5 sm:mx-auto sm:mb-20">
            
            <div className="my-20">
              <img src="/images/icon-communities.svg" alt="" className=" w-7 ml-3"/>
              <p className="text-6xl font font-semibold dark:text-slate-50">1.4k+</p>
              <p className="my-4 text-slate-400">comunidades formadas</p>
            </div>

            <div className="mb-20 sm:mb-0 ">
              <img className="w-7 ml-3 " src="/images/icon-messages.svg"   alt="" />
              <p className="text-6xl font-semibold dark:text-slate-50">2.7m+</p>
              <p className="my-4 text-slate-400">Mensagens enviadas</p>
            </div>
          </article>

        </section>

        <section>
          <article >

              <img className="w-full hidden sm:block" src="/images/bg-section-top-desktop-2.svg" alt="" />
              <img className="w-full sm:hidden" src="/images/bg-section-top-mobile-1.svg" alt="" />

              <div className="bg-fundo overflow-auto py-20 px-6 sm:flex sm:justify-between sm:flex-row-reverse sm:gap-10 sm:items-center">
                <img className="mb-20 sm:max-w-[40%]" src="/images/illustration-grow-together.svg" alt="" />
                
                <div className="text-center sm:text-left sm:max-w-[500px] sm:mx-10">
                  <p className="text-xl font-bold pb-4">Cresça Juntos</p>
                  <p> Gere discussões significativas com seu público e construa uma comunidade forte e leal. Pense nas conversas perspicazes que você perde com um formulário de feedback.</p>
                </div>
              </div>
              <img  className="w-full sm:hidden" src="/images/bg-section-bottom-mobile-1.svg" alt="" />
              <img  className="w-full hidden sm:block" src="/images/bg-section-bottom-desktop-2.svg" alt="" />
            </article>

            <article>
              <div className=" overflow-auto py-28 px-6 sm:flex sm:justify-between sm:gap-10 sm:items-center">
                <img className="mb-20 sm:max-w-[40%] sm:space-x-0" src="/images/illustration-flowing-conversation.svg" alt="" />
                
                <div className="text-center container sm:text-left sm:max-w-[500px] sm:px-10">
                  <p className="text-xl font-bold pb-4 dark:text-slate-50">Conversas fluidas</p>
                  <p className="dark:text-slate-400">
                     Você não paginaria uma conversa na vida real, então por que fazê-lo online? Nossos fios possuem carregamento just-in-time para um fluxo mais natural.
                  </p>
                </div>
              </div>
            </article>

            <article>
              <img className="w-full hidden sm:block" src="/images/bg-section-top-desktop-1.svg" alt="" />
              <img className="w-full sm:hidden" src="/images/bg-section-top-mobile-2.svg" alt="" />

              <div className="bg-fundo overflow-auto py-20 px-6 sm:flex sm:justify-between sm:items-center sm:flex-row-reverse">

                <img className="mb-20 sm:max-w-[40%]" src="/images/illustration-your-users.svg" alt="" />
                
                <div className="text-center container sm:max-w-[500px] sm:text-left sm:px-10">
                  <p className="text-xl font-bold pb-4">Seus usuários</p>
                  <p className=""> Não leva muito tempo para integrar o Huddle com a solução de autenticação do seu aplicativo. Isso significa que, depois de fazer login em seu aplicativo, seus usuários podem começar a conversar imediatamente.</p>
                </div>
              </div>
              <img  className="w-full sm:hidden" src="/images/bg-section-bottom-mobile-2.svg" alt="" />
              <img  className="w-full hidden sm:block" src="/images/bg-section-bottom-mobile-1.svg" alt="" />
            </article>

            <article>
              <div className="py-32 text-center px-10">
              <p className="text-xl font-bold pb-6 dark:text-slate-50">Pronto para construir sua comunidade? </p>
              <button  className="py-2 px-5 text-lime-50 font-semibold bg-pink-500 rounded-full">Comece gratuitamente</button>
              </div>
            </article>
          </section>
      </main>
      <footer>
        <img className="w-full sm:hidden"  src="/images/bg-footer-top-mobile.svg" alt="" />
        <img className="w-full hidden sm:block"  src="/images/bg-footer-top-desktop.svg" alt="" />
        <section className="bg-fundo2 px-5 py-10 text-slate-50 sm:flex flex-row-reverse sm:gap-7 sm:justify-between sm:px-10 ">
        <article className="max-w-[350px]">
          <div>
            <h2 className="text-lg uppercase font-bold mb-4">Newsletter</h2>
            <p className="sm:w-80"> Para receber dicas sobre como aumentar sua comunidade, inscreva-se em nossa newsletter semanal. Nunca enviaremos spam ou repassaremos seu endereço de e-mail.</p>
          </div>
          <div className="mt-10 mb-20 text-right ">
            <input className="p-3 rounded-lg border-0  block w-full" type="email" placeholder="Email"/>
            <button className="bg-pink-500 py-2 px-4 rounded-lg mt-4 inline-block ">Inscreva-se</button>
          </div>
        </article>

        <article className="max-w-[400px]">
          <div className="mb-14">
          <img className="max-w-[150px]" src="/images/logo.svg" alt="" />
            <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex gap-4">
              <img src=" /images/icon-phone.svg " alt="" />
              <span>Telefone: +1-543-123-4567</span>
            </div>
            <div className="flex gap-4">
              <img src=" /images/icon-email.svg " alt="" />
              <span>example@huddle.com </span>
            </div>
          </div>

          <div className="flex gap-5 pt-10">
          <img className="w-10 h-10" src="/images/facebook.png" alt="" />
          <img  className="w-10 h-10" src="/images/instagram.png" alt="" />
          <img  className="w-10 h-10" src="/images/twitter.png" alt="" />
          </div>
        </article>
        </section>
      </footer>
    </>
  )
  
}

