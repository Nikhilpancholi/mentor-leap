const navLinks = ['Home','About Us', 'Coaching', 'Live Events', 'Resource Library','MentorLeap Studio']
import logo from '../assets/Mentorleap-logo.png'

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 px-4 py-3 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/40 bg-white px-4 py-2 shadow-[0_10px_35px_rgba(15,46,109,0.12)] backdrop-blur-lg md:px-6">
        {/* logo */}
        <a href="#home" className="">
          <img src={logo} alt="MentorLeap Logo" className="h-10 " />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#0"
              className="text-sm font-semibold text-[#0F2E6D] transition-colors hover:text-[#1E63B6]"
            >
              {link}
            </a>
          ))}
          <button
            type="button"
            className="rounded-full border border-[#2E86DE] px-5 py-2 text-sm font-extrabold text-[#2E86DE] bg-[#1e62b638] transition hover:bg-[#2E86DE] hover:text-white"
          >
            Login
          </button>
        </nav>

        <button
          type="button"
          className="rounded-md border border-[#1E63B6] px-3 py-2 text-xs font-bold text-[#1E63B6] md:hidden"
          aria-label="Open menu"
        >
          Menu
        </button>
      </div>
    </header>
  )
}
