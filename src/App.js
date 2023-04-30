import './App.css';
import logo from './img/logo.svg'
import illustrationintro from './img/illustrationintro.svg'
import anisha from './img/anisha.png'
import logowhite from './img/logowhite.svg'
import iconfacebook from './img/iconfacebook.svg'
import iconyoutube from './img/iconyoutube.svg'
import icontwitter from './img/icontwitter.svg'
import iconpinterest from './img/iconpinterest.svg'
import iconinstagram from './img/iconinstagram.svg'





function App() {
  function menuTab(){
      const btn = document.getElementById('menu-btn')
      const nav = document.getElementById('menu')

      btn.addEventListener('click', () =>{

            btn.classList.toggle('open')
            nav.classList.toggle('flex')
            nav.classList.toggle('hidden')
      })
  }

  return (
   <div className="App ">
         <nav className='relative  container mx-auto p-6 ' >
        {/* <div className='flex flex-col'> */}
         {/* flex container */}
         <div className='flex items-center justify-between'>
       
            {/* logo */}
          
            <div className='pt-2'>
              <img src={logo}/>
            </div>
          
            {/* menu-items */ }
          
            <div className='hidden md:flex space-x-6'>
              
              <a href='#' className='hover:text-darkGrayishBlue'>Pricing</a>
              <a href='#' className='hover:text-darkGrayishBlue'>Product</a>
              <a href='#' className='hover:text-darkGrayishBlue'>Product</a>
              <a href='#' className='hover:text-darkGrayishBlue'>About Us</a>
              <a href='#' className='hover:text-darkGrayishBlue'>Careers</a>
              <a href='#' className='hover:text-darkGrayishBlue'>Community</a>   

            </div>
              
              
                <a className='hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'>Get Started</a>
              

              {/* Hamburger icon */}
              
              <button id='menu-btn' className='open block hamburger md:hidden focus:outline-none' onClick={menuTab}> 
                <span className='hamburger-top'></span>
                <span className='hamburger-middle'></span>
                <span className='hamburger-bottom'></span>
              </button>
          </div>

          {/* mobile menu */}
          <div className='md:hidden'>
          
            <div id='menu' className='hidden absolute  flex-col  items-center self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'>
            
              <a href='#'>Pricing</a>
              <a href='#'>Product</a>
              <a href='#'>About Us</a>
              <a href='#'>Careers</a>
              <a href='#'>Community</a>

            </div>

          </div>
          {/* </div> */}
        </nav>
            {/* hero section */}
            <section id='hero'>
              {/* flex container */}
              <div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>

                {/* left item */}
                <div className='flex flex-col mb-32 space-y12 md:w-1/2'>
                    
                    <h1 className='max-w-md mb-4 text-4xl font-bold text-center md:text:text-5xl md:text-left mb-70'>
                      Bring everyone together to build better prodeucts
                    </h1>

                    <p className='max-w-sm text-center text-darkGrayishBlue md:text-left '>
                      Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view
                    </p>

                    <div className='flex justify-center md:justify-start mt-4' >
                      <a href='#' className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'>Get Started</a>
                    </div>

                </div>
                {/* image */}

                <div className='md:w-1/2'>
                      <img src={illustrationintro} alt=''/>
                </div>
              </div>
            </section>

              {/* Features section */}
            <section id='features'>
              <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>

                <div className='flex flex-col space-y-12 md:w-1/2'>
                  <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
                    What's the difference about Manage
                  </h2>
                  <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
                    Manage provides all the functionality your team needs,
                     without the complexity.
                     Our software is tailor-made for modern digital product team.
                  </p>
                </div>

                {/* numbered-list */}
                <div className='flex flex-col space-y-8 md:w-1/2 '>
                  {/* list items-1 */}
                  <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
                    {/* heading */}
                    <div className='rounded-l-full  bg-brightRedSupLight md:bg-transparent '>
                        <div className='flex items-center space-x-2'>
                          <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                             01
                          </div>
                          <h3 className='text-base font-bold md:mb-4 md:hidden' >
                            Track Company-wide progress
                          </h3>
                        </div>
                    </div>
                     <div>
                        <h3 className='hidden mb-4 text-lg font-bold md:block'>
                        Track Company-wide progress
                        </h3>
                        <p className='text-darkGrayishBlue'>
                          See how your day-to-day tasks fit into the wider vision. 
                          Go from tracking progress at the milestone level all the way done to the smallest of details.
                          Never lose sight of the bigger picture again.
                        </p>
                     </div>
                  </div>

                  {/* list items-2 */}
                  <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
                    {/* heading */}
                    <div className='rounded-l-full  bg-brightRedSupLight md:bg-transparent '>
                        <div className='flex items-center space-x-2'>
                          <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                             02
                          </div>
                          <h3 className='text-base font-bold md:mb-4 md:hidden' >
                            Track Company-wide progress
                          </h3>
                        </div>
                    </div>
                     <div>
                        <h3 className='hidden mb-4 text-lg font-bold md:block'>
                        Track Company-wide progress
                        </h3>
                        <p className='text-darkGrayishBlue'>
                          See how your day-to-day tasks fit into the wider vision. 
                          Go from tracking progress at the milestone level all the way done to the smallest of details.
                          Never lose sight of the bigger picture again.
                        </p>
                     </div>
                  </div>

                  {/* list items-3 */}
                  <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
                    {/* heading */}
                    <div className='rounded-l-full  bg-brightRedSupLight md:bg-transparent '>
                        <div className='flex items-center space-x-2'>
                          <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                             03
                          </div>
                          <h3 className='text-base font-bold md:mb-4 md:hidden' >
                            Track Company-wide progress
                          </h3>
                        </div>
                    </div>
                     <div>
                        <h3 className='hidden mb-4 text-lg font-bold md:block'>
                        Track Company-wide progress
                        </h3>
                        <p className='text-darkGrayishBlue'>
                          See how your day-to-day tasks fit into the wider vision. 
                          Go from tracking progress at the milestone level all the way done to the smallest of details.
                          Never lose sight of the bigger picture again.
                        </p>
                     </div>
                  </div>
                </div>
              </div>
            </section>
            {/* testimonial */}
            <section>
            <div   className='max-w-6xl px-5 mx-auto mt-32 text-center '>
             {/* heading */}
             < h2 className='text-4xl font-bold text-center'>
               What's the difference About Manage?
             </h2>

             {/* testimonials containers */}
             <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
                {/* testimonial 1 */}
                <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
                    <img src={anisha} className='w-16 -mt-14' alt=''/>
                    <h5 className='text-lg font-bold'>
                      Anisha
                    </h5>
                    <p className='text-sm text-darkGrayishBlue'>
                      "Manage has supercharged our teams workflow.
                       The ability to maintain visibility on larger
                        milestones at all times keeps everyone motivated."
                    </p>
                </div>

                 {/* testimonial 2 */}
                 <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
                    <img src={anisha} className='w-16 -mt-14' alt=''/>
                    <h5 className='text-lg font-bold'>
                      Anisha
                    </h5>
                    <p className='text-sm text-darkGrayishBlue'>
                      "Manage has supercharged our teams workflow.
                       The ability to maintain visibility on larger
                        milestones at all times keeps everyone motivated."
                    </p>
                </div>

                 {/* testimonial 3 */}
                 <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
                    <img src={anisha} className='w-16 -mt-14' alt=''/>
                    <h5 className='text-lg font-bold'>
                      Anisha
                    </h5>
                    <p className='text-sm text-darkGrayishBlue'>
                      "Manage has supercharged our teams workflow.
                       The ability to maintain visibility on larger
                        milestones at all times keeps everyone motivated."
                    </p>
                </div>

             </div>
              {/* button */}
              <div className='my-16'>
              <a href='#' className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'>
                Get Started</a>
              </div>
            </div>
            </section>

            {/* CTA Section */}
            <section id='cta' className='bg-brightRed'>
              {/* flex container */}
              <div className='container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
                <h2 className='text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:max-w-xl md:text-left'>
                  Simplify how your team work today
                </h2>

                {/* button */}
                <div>
                <a href='#' className='p-3 px-6 pt-2 bg-white text-brightRed rounded-full   shadow-2xl baseline hover:bg-gray-300'>
                Get Started</a> 
                </div>
              </div>
            </section>

            {/* footer */}
            <footer className='bg-veryDarkBlue'>
              <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
                {/* logo and social-link container */}
                <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
                  
                <div className='text-white md:block'>
                      Copyright &copy; 2023, All Right Reserved
                  </div>

                  {/* logo */}

                  <div>
                    <img src={logowhite} class='logo' alt=''/>
                  </div>
                  {/* social-link container */}
                  <div className='flex justify-center space-x-4'>
                    {/* link1 */}
                    <a href='#'>
                      <img src={iconfacebook} alt='' />
                    </a>
                    {/* link2 */}
                    <a href='#'>
                      <img src={iconyoutube} alt='' />
                    </a>
                    {/* link3 */}
                    <a href='#'>
                      <img src={icontwitter}lt='' />
                    </a>
                    {/* link4 */}
                    <a href='#'>
                      <img src={iconpinterest} alt='' />
                    </a>
                    {/* link5 */}
                    <a href='#'>
                      <img src={iconinstagram} alt='' />
                    </a>
                  </div>
                </div>
                {/* list container */}
                <div className='flex justify around space-x-32'>
                  <div className='flex flex-col space-y-3 text-white'>
                    <a href='#' className='hover:text-brightRed'>Home</a>
                    <a href='#' className='hover:text-brightRed'>Pricing</a>
                    <a href='#' className='hover:text-brightRed'>Product</a>
                    <a href='#' className='hover:text-brightRed'>Privacy Policy</a>
                  </div>
                  <div className='flex flex-col space-y-3 text-white'>
                  <a href='#' className='hover:text-brightRed'>White</a>
                    <a href='#' className='hover:text-brightRed'>Career</a>
                    <a href='#' className='hover:text-brightRed'>Community</a>
                    <a href='#' className='hover:text-brightRed'>Privacy Policy</a>
                  </div>
                </div>

                {/* input-container */}

                <div className='flex flex-col   justify-between'>
                  <form>
                    <div className='flex space-x-3'>
                      <input type='' className='flex-1 px-4 rounded-full focus:outline-none' placeholder='Updated in your inbox'/>
                      <button className='px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>GO</button>

                    </div>
                  </form>
                  <div className='hidden text-white md:block'>
                      Copyright &copy; 2023, All Right Reserved
                  </div>
               </div>  
              </div>
            </footer>








 











  </div>
    
  );
}



export default App;
// bg-red-700