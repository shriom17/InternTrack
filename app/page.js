import Link from 'next/link'

export const metadata = {
  title: 'InternTrack',
  description: 'Find and apply to premium internships',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-sky-100 to-white dark:from-[#041021] dark:via-[#051829] dark:to-[#071022]">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white/60 dark:bg-[#031426]/60 backdrop-blur-md rounded-3xl shadow-xl p-10 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900 dark:text-sky-100 leading-tight">InternTrack</h1>
            <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">InternTrack e apnake shagotom — best internships khujen, apply korun, ar grow korun your skillset.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/signup" className="inline-block px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg shadow">Get Started</Link>
              <Link href="/dashboard" className="inline-block px-6 py-3 border border-sky-600 text-sky-600 hover:bg-sky-50 rounded-lg">Explore Dashboard</Link>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 bg-sky-50 dark:bg-sky-900/30 rounded-lg">
                <h4 className="text-sm font-semibold text-sky-800 dark:text-sky-100">Verified Companies</h4>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Handpicked, reputable companies.</p>
              </div>

              <div className="p-4 bg-sky-50 dark:bg-sky-900/30 rounded-lg">
                <h4 className="text-sm font-semibold text-sky-800 dark:text-sky-100">Secure Apply</h4>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Auth-backed applications saved to your profile.</p>
              </div>

              <div className="p-4 bg-sky-50 dark:bg-sky-900/30 rounded-lg">
                <h4 className="text-sm font-semibold text-sky-800 dark:text-sky-100">Mentorship</h4>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Grow with experienced mentors.</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full max-w-md bg-gradient-to-br from-white to-sky-50 dark:from-[#07131e] dark:to-[#042033] rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-sky-600 text-white flex items-center justify-center text-2xl font-bold">IT</div>
                <div>
                  <h3 className="text-lg font-semibold text-sky-900 dark:text-sky-100">Frontend Intern — Amazon</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Kolkata · 40k/mo</p>
                </div>
              </div>

              <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                <p>Work on React and Next.js UI features. Collaborate with designers to implement pixel-perfect interfaces.</p>
                <div className="mt-3 flex gap-2">
                  <span className="px-2 py-1 text-xs bg-sky-50 text-sky-700 rounded-md">Stipend</span>
                  <span className="px-2 py-1 text-xs bg-sky-50 text-sky-700 rounded-md">Mentorship</span>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/signup" className="inline-block px-4 py-2 bg-sky-600 text-white rounded-lg">Apply Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
