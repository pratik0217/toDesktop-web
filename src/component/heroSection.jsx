export default function mainSection(props) {
  return (
    <>
    <div id="hero-section" className="flex flex-col items-center gap-8">
        <div id="version-box" className="flex items-center gap-2 border border-amber-500 rounded-lg bg-orange-50 font-medium w-fit shadow-md 
        hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out group">
           <span className="inline-block w-3 h-3 border border-black rounded-full bg-amber-400"></span>
           <span className="text-amber-600">v0.21.1: </span>
           <a href="#"><span className="text-amber-800">Find-in-page bug fixes</span></a>
           <i className="fa-solid fa-arrow-right text-amber-800 group-hover:translate-x-1 transition-all duration-300 ease-in-out"></i>
        </div>

        <div id="service-box" className="hidden md:flex gap-5 text-gray-600">
            <span><i className="fa-regular fa-file-code"></i> Code Optional</span>
            <span><i className="fa-solid fa-hand-back-fist"></i> Drag & drop builder</span>
            <span><i className="fa-solid fa-laptop"></i> Window, Linux & Mac</span>
        </div>

        <div id="heading-hero-sect" className="sm:text-center text-5xl font-bold leading-snug text-zinc-800 md:text-7xl md:text-center md:w-full">
        <h1>Web app to Desktop app in minutes</h1>
        </div>

        <div id="heading-hero-inform" className="sm:text-center text-xl font-medium w-fit md:text-2xl">
        <p>Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>
        </div>

        

        <div id="hero-sect-btn" className="flex gap-5 flex-col sm:flex-row font-medium w-[360px] text-xl">
            <button className="rounded-lg hover:bg-opacity-100 ">Download now</button>
            <button className="border border-gray-500 rounded-lg">Read more</button>
        </div>

        <div id="app-section" className="flex gap-5">
            <img src={props.turnArrowDown} alt="turn arrow down" />
            <span>APPS POWERED BY TODESKTOP</span>
            <img src={props.turnArrowDown} alt="turn arrow down" />
        </div>
    </div>
    </>
  )
}
