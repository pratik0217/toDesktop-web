export default function mainSection(props) {
  return (
    <>
    <div id="hero-section" className="hidden md:flex flex-col items-center gap-8">
        <div id="version-box" className="flex items-center gap-2 border border-amber-500 rounded-lg bg-orange-50 font-medium">
           <span className="inline-block w-3 h-3 border border-black rounded-full bg-amber-400"></span>
           <span className="text-amber-600">v0.21.1: </span>
           <a href="#"><span className="text-amber-800">Find-in-page bug fixes</span></a>
           <i className="fa-solid fa-arrow-right text-amber-800"></i>
        </div>

        <div id="service-box" className="flex gap-5 text-gray-600">
            <span><i class="fa-regular fa-file-code"></i> Code Optional</span>
            <span><i class="fa-solid fa-hand-back-fist"></i> Drag & drop builder</span>
            <span><i class="fa-solid fa-laptop"></i> Window, Linux & Mac</span>
        </div>

        <h1 className="text-center text-7xl font-bold text-zinc-800">Web app to Desktop app in minutes</h1>
        
        <p className="text-center text-2xl">Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>

        <div id="hero-sect-btn" className="flex gap-5">
            <button className="rounded-lg">Download now</button>
            <button className="border border-gray-500 rounded-lg">Read more</button>
        </div>

        <div id="app-section" className="flex gap-5">
            <img src={props.turnArrowDown} alt="turn arrow down" />
            <span>APPS POWERED BY TODESKTOP</span>
            <img src={props.turnArrowDown} alt="turn arrow down" />
        </div>
    </div>

    {/* Mobile device Response design */}
    <div id="hero-section-mobile" className="md:hidden flex flex-col items-center gap-6">
        <div id="version-box-mobile" className="flex items-center gap-2 border border-amber-500 rounded-lg bg-orange-50 font-medium">
           <span className="inline-block w-3 h-3 border border-black rounded-full bg-amber-400"></span>
           <span className="text-amber-600">v0.21.1: </span>
           <a href="#"><span className="text-amber-800">Find-in-page bug fixes</span></a>
           <i className="fa-solid fa-arrow-right text-amber-800"></i>
        </div>

        <div id="service-box" className="hidden md:flex gap-5 text-gray-600">
            <span><i class="fa-regular fa-file-code"></i> Code Optional</span>
            <span><i class="fa-solid fa-hand-back-fist"></i> Drag & drop builder</span>
            <span><i class="fa-solid fa-laptop"></i> Window, Linux & Mac</span>
        </div>

        <h1 className="text-start text-5xl font-bold text-zinc-800 w-[360px]">Web app to Desktop app in minutes</h1>
        
        <p className="text-start w-[325px]">Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>

        <div id="hero-sect-btn" className="flex flex-col gap-3">
            <button className="rounded-lg w-[325px]">Download now</button>
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
