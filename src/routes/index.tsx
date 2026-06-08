import { createFileRoute } from '@tanstack/react-router'
import { Tooth3D } from '~/components/Tooth3D'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Premium Dental Concept | Clinică Stomatologică Brașov' },
      { name: 'description', content: 'Premium Dental Concept - Clinică stomatologică de top în Brașov. Servicii stomatologice complete cu tehnologie de ultimă oră.' }
    ]
  }),
  component: Home,
})

function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Premium Dental <span className="text-cyan-600">Concept</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#servicii" className="hover:text-cyan-600 transition-colors">Servicii</a>
            <a href="#despre" className="hover:text-cyan-600 transition-colors">Despre Noi</a>
            <a href="#galerie" className="hover:text-cyan-600 transition-colors">Galerie</a>
            <a href="#recenzii" className="hover:text-cyan-600 transition-colors">Recenzii</a>
            <a href="#contact" className="hover:text-cyan-600 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:0722577218" className="hidden sm:block font-bold text-cyan-600">
              0722 577 218
            </a>
            <a href="#contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
              Programare
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-linear-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 px-4 py-1.5 rounded-full text-sm font-bold">
              <span className="flex h-2 w-2 rounded-full bg-cyan-600 animate-pulse"></span>
              Excelență în Stomatologie Brașov
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight text-slate-900 tracking-tight">
              Designul unui <br />
              <span className="text-cyan-600">Zâmbet Nou.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Descoperă stomatologia modernă la Premium Dental Concept. Tehnologie digitală, confort absolut și rezultate estetice de excepție.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="bg-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-700 transition-all shadow-xl shadow-cyan-100 text-center">
                Rezervă o consultație
              </a>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
            <div className="absolute -inset-4 bg-cyan-200 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative w-full h-full z-10">
              <Tooth3D />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-slate-900">157</p>
              <p className="text-slate-500 font-medium text-sm">Recenzii Google 5.0</p>
            </div>
            <div>
              <p className="text-4xl font-black text-slate-900">10+</p>
              <p className="text-slate-500 font-medium text-sm">Ani Experiență</p>
            </div>
            <div>
              <p className="text-4xl font-black text-slate-900">5000+</p>
              <p className="text-slate-500 font-medium text-sm">Pacienți Fericiți</p>
            </div>
            <div>
              <p className="text-4xl font-black text-slate-900">24/7</p>
              <p className="text-slate-500 font-medium text-sm">Suport Pacienți</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicii" className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-cyan-600 font-bold uppercase tracking-widest text-xs">Serviciile Noastre</h2>
            <p className="text-4xl font-black text-slate-900">Tratamente de Elită</p>
            <p className="text-slate-600 text-lg">Soluții stomatologice avansate, adaptate nevoilor tale specifice.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Implantologie", icon: "🦷", desc: "Soluții durabile și estetice pentru înlocuirea dinților lipsă folosind cele mai bune materiale.", featured: true },
              { title: "Estetică Dentară", icon: "✨", desc: "Fațete, albire profesională și reabilitări estetice pentru un zâmbet perfect.", featured: true },
              { title: "Ortodonție", icon: "📏", desc: "Aparate dentare invizibile și clasice pentru alinierea perfectă a dinților la orice vârstă." },
              { title: "Endodonție", icon: "🔬", desc: "Tratamente de canal sub microscop pentru salvarea dinților naturali." },
              { title: "Profilaxie", icon: "🛡️", desc: "Igienizare profesională, air-flow și educare pentru prevenirea afecțiunilor." },
              { title: "Stomatologie Copii", icon: "👶", desc: "O experiență blândă și distractivă pentru cei mici, fără teamă de dentist." },
            ].map((service, i) => (
              <div key={i} className={`bg-white p-8 rounded-2xl border border-slate-100 transition-all duration-300 group cursor-pointer ${service.featured ? 'hover:border-cyan-200 hover:shadow-2xl hover:-translate-y-2' : 'hover:bg-cyan-50/30 hover:border-cyan-100'}`}>
                <div className={`text-5xl mb-6 transition-transform duration-500 inline-block ${service.featured ? 'group-hover:scale-110 group-hover:rotate-6' : ''}`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 transition-colors ${service.featured ? 'group-hover:text-cyan-600' : 'text-slate-800'}`}>
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
                <div className="text-cyan-600 font-bold text-xs flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                  Detalii <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="despre" className="py-24 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAE2XaX8PZ_6fFY4P9wolIX6pDt47HqWGwFvosdLSAO3A4qbhOQ3iJ1Aw9hubVZmIP_TvwUGkUhtoP9G2LMupFemCalhc9Sr8rty5bNVYne0ioRTd6zCpjIOJPVBSvYqLHNkK30VBA=w1000-h1000-k-no" 
              className="rounded-3xl shadow-2xl transition-all duration-1000" 
              alt="Echipă Premium Dental Concept" 
            />
            <div className="absolute -bottom-6 -right-6 bg-cyan-600 text-white p-8 rounded-3xl hidden md:block">
              <p className="text-4xl font-black italic">Premium</p>
              <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Concept</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGoQWVogK2SUEiJVYwvEk0KDXK1X2oc8JMOCQEguYsd634FScPCHEWxro-09htclZVhL6tvbdCdbd9G68AC0UNlDbdGOrRAz9cwYnXzcilorGQYItezcuza9iVVQc7Fp9ILVcy-yoz-m9Gg=w400-h400-k-no" 
                alt="Logo Premium Dental Concept" 
                className="w-16 h-16 rounded-full border-2 border-slate-100 shadow-sm object-cover"
              />
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Viziunea Noastră</h2>
                <div className="inline-flex items-center gap-1 text-cyan-600 font-bold text-xs uppercase tracking-tighter">
                  <span>✨</span> Management Feminin de Succes
                </div>
              </div>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Premium Dental Concept redefinește experiența vizitei la dentist. Într-un mediu dominat de atenția la detalii și empatie, transformăm frica în încredere.
            </p>
            <div className="space-y-4 pt-2">
              {[
                "Workflow Digital Complet",
                "Echipă Multidisciplinară",
                "Design Interior Biofilic",
                "Garanția Calității Premium"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-cyan-50 text-cyan-600 p-1.5 rounded-full">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="font-bold text-sm text-slate-700 uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-cyan-600 font-bold uppercase tracking-widest text-xs">Portofoliu</h2>
            <p className="text-4xl font-black text-slate-900">Arta Zâmbetului</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              { url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGubUyOBwLwzZ5WLWR22lDU7eQHMV9Z3M3qye0fhu4da781oHtiskDO6kyC5M5d8uULJ9AaG8PqkOtRn8Iy8ltXMHVi9nYte3PLOvoBIlW7JJ-ro0zTPBdclYpwLJwAk_Cqbxm-aFhzmng=w800-h800-k-no", title: "Tehnologie Avansată" },
              { url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFkuLq-Pg5olcJULw_76dec-Yc8vuy-8mRjQZQ7HRpbpBf2A52A5JGWR6N_SIxJsrYJIB1AN5dVLSwyMtYAAN9MQY7NsK7y_GINLpKt7Bc8Biwx1mSMoLyBRMovJezWAGOIPB2YBMFEtkaR=w800-h800-k-no", title: "Detalii" },
              { url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH543Wv-3p6sQ1Ho93xuV7BdZKBVfHdT1POw9GNzFZ3-iU_LdeFEEKNajmO3gM4vx2zVpIpYIK356bnYJ8M3CGc81ziFuiMyoZQzEAR3oUZVTcuU5dN3zJWFH6QtzWT9IdNYDh81_lyskGv=w800-h800-k-no", title: "Sterilizare" },
            ].map((img, i) => (
              <div key={i} className="relative group overflow-hidden rounded-3xl break-inside-avoid shadow-sm border border-white">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white font-bold text-lg uppercase tracking-widest">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-600/10 blur-3xl rounded-full translate-x-1/2 translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-5xl font-black tracking-tight leading-tight">Pregătit pentru <br /> un nou început?</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Contactează-ne astăzi pentru o evaluare digitală completă a zâmbetului tău.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: "📍", label: "Locație", val: "Bloc E14, Bulevardul Muncii 18, Brașov" },
                  { icon: "📞", label: "Telefon", val: "0722 577 218" },
                  { icon: "⏰", label: "Program", val: "Luni - Vineri: 09:00 - 20:00" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-white/5 p-3 rounded-2xl text-xl">{item.icon}</div>
                    <div>
                      <p className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-lg font-medium text-slate-100">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-10 shadow-2xl text-slate-900">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Nume</label>
                    <input type="text" className="w-full px-0 py-3 border-b-2 border-slate-100 focus:outline-none focus:border-cyan-600 transition-colors bg-transparent" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Telefon</label>
                    <input type="tel" className="w-full px-0 py-3 border-b-2 border-slate-100 focus:outline-none focus:border-cyan-600 transition-colors bg-transparent" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Email</label>
                  <input type="email" className="w-full px-0 py-3 border-b-2 border-slate-100 focus:outline-none focus:border-cyan-600 transition-colors bg-transparent" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Mesaj</label>
                  <textarea rows={3} className="w-full px-0 py-3 border-b-2 border-slate-100 focus:outline-none focus:border-cyan-600 transition-colors bg-transparent resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-cyan-600 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-cyan-700 transition-all shadow-xl shadow-cyan-100">
                  Trimite Mesajul
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">P</span>
              </div>
              <span className="text-sm font-black uppercase tracking-widest">Premium Dental Concept</span>
            </div>
            <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <a href="#" className="hover:text-cyan-600 transition-colors">GDPR</a>
              <a href="#" className="hover:text-cyan-600 transition-colors">Termeni</a>
              <a href="#" className="hover:text-cyan-600 transition-colors">Cookies</a>
            </div>
            <p className="text-[10px] text-slate-300 uppercase tracking-[0.3em]">© {new Date().getFullYear()} Brașov, România</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
