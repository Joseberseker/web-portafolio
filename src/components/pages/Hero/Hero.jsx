import whatsapp from '../../../assets/whatsapp.svg'
import descargar from '../../../assets/descargar.svg'
import github from '../../../assets/github.svg'
import linkedin from '../../../assets/linkedin.svg'
export const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="p-6 bg-gray-100 flex items-center justify-center flex-col max-w-screen-lg h-[40%] mx-auto">
        <h1 className="text-5xl font-semibold mt-2">FullStack Developer</h1>
        <p className="text-lg font-medium text-gray-500 mt-6">
          Bienvenido a mi página web. Aquí encontrarás información sobre mis
          proyectos, habilidades y experiencia en el desarrollo FullStack.
          Descubre como utilizo tecnologías como HTML, CSS, JavaScript, React,
          Angular y Nodejs para crear soluciones innovadoras y eficientes.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a className="flex flex-row rounded-md bg-gray-600 px-3.5 py-2.5 w-39 justify-center text-sm font-semibold text-white hover:bg-gray-500" href="#">Linkedin |<img className='w-4 fill-white ml-2' src={linkedin} alt="" /></a>
          <a className="flex flex-row rounded-md bg-gray-600 px-3.5 py-2.5 w-39 justify-center text-sm font-semibold text-white hover:bg-gray-500" href="#">Github |<img className='w-5 fill-white ml-2' src={github} alt="" /></a>
          <a className="flex flex-row rounded-md bg-gray-600 px-3.5 py-2.5 w-39 justify-center text-sm font-semibold text-white hover:bg-gray-500" href="#">Hoja de Vida |<img className='w-5 fill-white ml-2' src={descargar} alt="" /></a>
          <a className="flex flex-row rounded-md bg-gray-600 px-3.5 py-2.5 w-39 justify-center text-sm font-semibold text-white hover:bg-gray-500" href="#">Contactame |<img className='w-4 fill-white ml-2' src={whatsapp} alt="" /></a>
        </div>
      </div>
    </section>
  );
};
