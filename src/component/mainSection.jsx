export default function mainSection() {
  return (
    <div id="hero-section" className="">
        <div id="version-box" className="flex items-center gap-2">
           <span className="inline-block w-3 h-3 border border-black rounded-full bg-amber-400"></span>
           <span>v0.21.1: </span>
           <span className="text-amber-800">Find-in-page bug fixes</span>
           <i className="fa-solid fa-arrow-right"></i>
        </div>

        <div id="service-box" className="flex gap-5">
            <span><i class="fa-regular fa-file-code"></i> Code Optional</span>
            <span><i class="fa-solid fa-hand-back-fist"></i> Drag & drop builder</span>
            <span><i class="fa-solid fa-laptop"></i> Window, Linux & Mac</span>
        </div>

        <div id="heading-inform">
            <h1>Web app to Desktop app in minutes</h1>
            <p>Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>
        </div>

        <div id="hero-sect-btn">
            <button>Download now</button>
            <button>Read Docs</button>
        </div>
    </div>
  )
}
