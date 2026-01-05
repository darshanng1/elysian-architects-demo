import React, { useState, useEffect } from 'react'

// TRANSLATIONS DATA
const translations = {
  en: {
    nav: { home: 'Home', portfolio: 'Portfolio', gallery: 'Architect Gallery', about: 'About', contact: 'Contact' },
    hero: { title: 'Architecture that Breathes', subtitle: 'Sculpting spaces where light, form, and function converge', cta: 'Explore Portfolio' },
    portfolio: { heading: 'Our Work', subheading: 'Sculpting tomorrow across continents and categories' },
    philosophy: { heading: 'Studio Philosophy', subheading: 'Design is dialogue between human need and natural form', p1: 'At Elysian Architects, we believe architecture transcends mere shelter. It is the art of creating spaces that breathe with their environment, responding to light, landscape, and the rhythms of daily life.', p2: 'Our design philosophy centers on three pillars: minimalist elegance, sustainable innovation, and timeless craftsmanship.', p3: 'We see each project as a conversation between the site and its future inhabitants—a dialogue where our role is to listen, interpret, and translate aspirations into built form.' },
    gallery: { heading: 'Architect Gallery', subheading: 'Concepts, experiments, and competition entries' },
    contact: { heading: "Let's Build Together", subheading: 'Transform your vision into architectural reality', form: { name: 'Your Name', email: 'Email Address', message: 'Tell us about your project', submit: 'Send Message' }, info: { email: 'Email', phone: 'Phone', address: 'Address' } },
    common: { share: 'Share' }
  },
  kn: {
    nav: { home: 'ಮುಖಪುಟ', portfolio: 'ಪೋರ್ಟ್‌ಫೋಲಿಯೋ', gallery: 'ವಾಸ್ತುಶಿಲ್ಪಿ ಗ್ಯಾಲರಿ', about: 'ನಮ್ಮ ಬಗ್ಗೆ', contact: 'ಸಂಪರ್ಕಿಸಿ' },
    hero: { title: 'ಉಸಿರಾಡುವ ವಾಸ್ತುಶಿಲ್ಪ', subtitle: 'ಬೆಳಕು, ರೂಪ ಮತ್ತು ಕಾರ್ಯವು ಒಗ್ಗೂಡುವ ಸ್ಥಳಗಳನ್ನು ರೂಪಿಸುವುದು', cta: 'ಪೋರ್ಟ್‌ಫೋಲಿಯೋವನ್ನು ಅನ್ವೇಷಿಸಿ' },
    portfolio: { heading: 'ನಮ್ಮ ಕೆಲಸ', subheading: 'ಖಂಡಗಳು ಮತ್ತು ವರ್ಗಗಳಾದ್ಯಂತ ನಾಳೆಯನ್ನು ರೂಪಿಸುವುದು' },
    philosophy: { heading: 'ಸ್ಟುಡಿಯೋ ತತ್ವಶಾಸ್ತ್ರ', subheading: 'ವಿನ್ಯಾಸವು ಮಾನವ ಅಗತ್ಯ ಮತ್ತು ನೈಸರ್ಗಿಕ ರೂಪದ ನಡುವಿನ ಸಂವಾದ', p1: 'ಎಲಿಸಿಯನ್ ಆರ್ಕಿಟೆಕ್ಟ್ಸ್‌ನಲ್ಲಿ, ವಾಸ್ತುಶಿಲ್ಪವು ಕೇವಲ ಆಶ್ರಯವನ್ನು ಮೀರುತ್ತದೆ ಎಂದು ನಾವು ನಂಬುತ್ತೇವೆ.', p2: 'ನಮ್ಮ ವಿನ್ಯಾಸ ತತ್ವಶಾಸ್ತ್ರವು ಮೂರು ಸ್ತಂಭಗಳ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸುತ್ತದೆ.', p3: 'ಪ್ರತಿ ಯೋಜನೆಯನ್ನು ನಾವು ಸ್ಥಳ ಮತ್ತು ಅದರ ಭವಿಷ್ಯದ ನಿವಾಸಿಗಳ ನಡುವಿನ ಸಂಭಾಷಣೆಯಾಗಿ ನೋಡುತ್ತೇವೆ.' },
    gallery: { heading: 'ವಾಸ್ತುಶಿಲ್ಪಿ ಗ್ಯಾಲರಿ', subheading: 'ಪರಿಕಲ್ಪನೆಗಳು, ಪ್ರಯೋಗಗಳು ಮತ್ತು ಸ್ಪರ್ಧೆಯ ನಮೂದುಗಳು' },
    contact: { heading: 'ಒಟ್ಟಿಗೆ ನಿರ್ಮಿಸೋಣ', subheading: 'ನಿಮ್ಮ ದೃಷ್ಟಿಯನ್ನು ವಾಸ್ತುಶಿಲ್ಪ ವಾಸ್ತವಕ್ಕೆ ಪರಿವರ್ತಿಸಿ', form: { name: 'ನಿಮ್ಮ ಹೆಸರು', email: 'ಇಮೇಲ್ ವಿಳಾಸ', message: 'ನಿಮ್ಮ ಯೋಜನೆಯ ಬಗ್ಗೆ ತಿಳಿಸಿ', submit: 'ಸಂದೇಶ ಕಳುಹಿಸಿ' }, info: { email: 'ಇಮೇಲ್', phone: 'ದೂರವಾಣಿ', address: 'ವಿಳಾಸ' } },
    common: { share: 'ಹಂಚಿಕೊಳ್ಳಿ' }
  }
}

// PORTFOLIO DATA
const portfolioData = {
  categories: [
    { id: 'residential', name: { en: 'Residential', kn: 'ವಸತಿ' }, description: { en: 'Homes that breathe with their landscape', kn: 'ಭೂದೃಶ್ಯದೊಂದಿಗೆ ಉಸಿರಾಡುವ ಮನೆಗಳು' }, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800' },
    { id: 'commercial', name: { en: 'Commercial', kn: 'ವಾಣಿಜ್ಯ' }, description: { en: 'Spaces that elevate business', kn: 'ವ್ಯಾಪಾರವನ್ನು ಉನ್ನತಗೊಳಿಸುವ ಸ್ಥಳಗಳು' }, image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800' }
  ],
  gallery: [
    { id: 1, image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600', title: 'Concept Study 01' },
    { id: 2, image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600', title: 'Competition Entry' },
    { id: 3, image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600', title: 'Experiment 03' }
  ]
}

// CHATBOT RESPONSES
const chatbotResponses = {
  en: {
    greeting: "Hello! I'm the Elysian Assistant. How can I help you explore our architectural work today?",
    portfolio: 'We specialize in creating timeless architectural spaces. Our portfolio spans Residential and Commercial categories.',
    philosophy: 'At Elysian, we believe architecture is the art of creating spaces that breathe with their environment.',
    contact: "Let's start a conversation! You can reach us at hello@elysian.studio or visit our Contact page.",
    fallback: "I'm not sure I understand. Could you try rephrasing?"
  },
  kn: {
    greeting: 'ನಮಸ್ಕಾರ! ನಾನು ಎಲಿಸಿಯನ್ ಸಹಾಯಕ.',
    portfolio: 'ನಾವು ಕಾಲಾತೀತ ವಾಸ್ತುಶಿಲ್ಪ ಸ್ಥಳಗಳನ್ನು ಸೃಷ್ಟಿಸುವಲ್ಲಿ ಪರಿಣತಿ ಹೊಂದಿದ್ದೇವೆ.',
    philosophy: 'ಎಲಿಸಿಯನ್‌ನಲ್ಲಿ, ವಾಸ್ತುಶಿಲ್ಪವು ತಮ್ಮ ಪರಿಸರದೊಂದಿಗೆ ಉಸಿರಾಡುವ ಸ್ಥಳಗಳನ್ನು ಸೃಷ್ಟಿಸುವ ಕಲೆ ಎಂದು ನಾವು ನಂಬುತ್ತೇವೆ.',
    contact: 'ಸಂಭಾಷಣೆಯನ್ನು ಪ್ರಾರಂಭಿಸೋಣ! ನೀವು hello@elysian.studio ನಲ್ಲಿ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು.',
    fallback: 'ನನಗೆ ಅರ್ಥವಾಗುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೊಮ್ಮೆ ಹೇಳಿ?'
  }
}

export default function App() {
  // STATE MANAGEMENT
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('elysian-theme') as 'light' | 'dark'
    if (stored) return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  const [language, setLanguage] = useState<'en' | 'kn'>(() => {
    return (localStorage.getItem('elysian-lang') as 'en' | 'kn') || 'en'
  })

  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState<Array<{ id: string; sender: 'user' | 'bot'; text: string }>>([])
  const [chatInput, setChatInput] = useState('')
  const [shareOpen, setShareOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  // EFFECTS
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('elysian-theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('elysian-lang', language)
  }, [language])

  // HELPER FUNCTIONS
  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[language]
    for (const k of keys) {
      if (value && typeof value === 'object') value = value[k]
      else return key
    }
    return typeof value === 'string' ? value : key
  }

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')
  const toggleLanguage = () => setLanguage(prev => prev === 'en' ? 'kn' : 'en')

  const toggleChat = () => {
    setChatOpen(!chatOpen)
    if (!chatOpen && chatMessages.length === 0) {
      setChatMessages([{ id: Date.now().toString(), sender: 'bot', text: chatbotResponses[language].greeting }])
    }
  }

  const sendChatMessage = () => {
    if (!chatInput.trim()) return

    const userMsg = { id: Date.now().toString(), sender: 'user' as const, text: chatInput }
    setChatMessages(prev => [...prev, userMsg])
    setChatInput('')

    setTimeout(() => {
      const lower = chatInput.toLowerCase()
      let response = chatbotResponses[language].fallback

      if (lower.includes('portfolio') || lower.includes('work') || lower.includes('project')) {
        response = chatbotResponses[language].portfolio
      } else if (lower.includes('philosophy') || lower.includes('about')) {
        response = chatbotResponses[language].philosophy
      } else if (lower.includes('contact') || lower.includes('reach')) {
        response = chatbotResponses[language].contact
      } else if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
        response = chatbotResponses[language].greeting
      }

      setChatMessages(prev => [...prev, { id: (Date.now() + 1).toString(), sender: 'bot', text: response }])
    }, 800)
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent! (Demo)')
    setFormData({ name: '', email: '', message: '' })
  }

  const getLayoutClasses = () => {
    const count = portfolioData.categories.length
    if (count === 1) return 'grid-cols-1 lg:grid-cols-[7fr_3fr]'
    if (count === 2) return 'grid-cols-1 md:grid-cols-2'
    return 'grid-cols-1 md:grid-cols-2'
  }

  // RENDER
  return (
    <div className="min-h-screen">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#hero" className="text-2xl font-bold">Elysian</a>

            <div className="hidden md:flex items-center gap-8">
              <a href="#hero" className="hover:text-stone-600 dark:hover:text-stone-300 transition-colors">{t('nav.home')}</a>
              <a href="#portfolio" className="hover:text-stone-600 dark:hover:text-stone-300 transition-colors">{t('nav.portfolio')}</a>
              <a href="#gallery" className="hover:text-stone-600 dark:hover:text-stone-300 transition-colors">{t('nav.gallery')}</a>
              <a href="#about" className="hover:text-stone-600 dark:hover:text-stone-300 transition-colors">{t('nav.about')}</a>
              <a href="#contact" className="hover:text-stone-600 dark:hover:text-stone-300 transition-colors">{t('nav.contact')}</a>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={toggleLanguage} className="px-3 py-1 rounded-full border border-current text-sm font-bold hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-stone-900 transition-colors">
                {language === 'en' ? 'EN' : 'ಕನ್ನಡ'}
              </button>

              <button onClick={toggleTheme} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
                {theme === 'light' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">{t('hero.title')}</h1>
          <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 mb-12 max-w-3xl mx-auto">{t('hero.subtitle')}</p>
          <a href="#portfolio" className="inline-block px-8 py-4 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-full font-bold hover:scale-105 transition-transform">{t('hero.cta')}</a>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 md:py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{t('portfolio.heading')}</h2>
            <p className="text-xl text-stone-600 dark:text-stone-400">{t('portfolio.subheading')}</p>
          </div>

          <div className={`grid ${getLayoutClasses()} gap-8`}>
            {portfolioData.categories.map((category) => (
              <div key={category.id} className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
                <img src={category.image} alt={category.name[language]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{category.name[language]}</h3>
                  <p className="text-white/80">{category.description[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="about" className="py-24 md:py-32 px-6 bg-stone-50 dark:bg-stone-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{t('philosophy.heading')}</h2>
            <p className="text-xl text-stone-600 dark:text-stone-400 italic">{t('philosophy.subheading')}</p>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            <p>{t('philosophy.p1')}</p>
            <p>{t('philosophy.p2')}</p>
            <p>{t('philosophy.p3')}</p>
          </div>
        </div>
      </section>

      {/* ARCHITECT GALLERY */}
      <section id="gallery" className="py-24 md:py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{t('gallery.heading')}</h2>
            <p className="text-xl text-stone-600 dark:text-stone-400">{t('gallery.subheading')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.gallery.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-xl aspect-square">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-stone-50 dark:bg-stone-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{t('contact.heading')}</h2>
            <p className="text-xl text-stone-600 dark:text-stone-400">{t('contact.subheading')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <input type="text" placeholder={t('contact.form.name')} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-6 py-4 bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 dark:focus:ring-white" required />
              <input type="email" placeholder={t('contact.form.email')} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-6 py-4 bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 dark:focus:ring-white" required />
              <textarea placeholder={t('contact.form.message')} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={6} className="w-full px-6 py-4 bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 dark:focus:ring-white resize-none" required />
              <button type="submit" className="w-full px-8 py-4 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-lg font-bold hover:scale-105 transition-transform">{t('contact.form.submit')}</button>
            </form>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">{t('contact.info.email')}</h3>
                <p className="text-xl">hello@elysian.studio</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">{t('contact.info.phone')}</h3>
                <p className="text-xl">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">{t('contact.info.address')}</h3>
                <p className="text-xl">123 Design Street<br />Architecture City, AC 12345</p>
              </div>

              {/* SHARE MENU */}
              <div className="relative">
                <button onClick={() => setShareOpen(!shareOpen)} className="flex items-center gap-2 px-6 py-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-full font-bold hover:scale-105 transition-transform">
                  <span>{t('common.share')}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                </button>

                {shareOpen && (
                  <div className="absolute bottom-full left-0 mb-2 bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg shadow-lg p-4 flex gap-3">
                    {[
                      { name: 'WhatsApp', icon: '💬', url: 'https://wa.me/' },
                      { name: 'Facebook', icon: '📘', url: 'https://facebook.com' },
                      { name: 'Instagram', icon: '📷', url: 'https://instagram.com' },
                      { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' }
                    ].map((social) => (
                      <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-stone-100 dark:bg-stone-700 hover:bg-stone-900 dark:hover:bg-white hover:text-white dark:hover:text-stone-900 transition-colors text-2xl" title={social.name}>{social.icon}</a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHATBOT */}
      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen ? (
          <div className="w-[400px] h-[600px] bg-white dark:bg-stone-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-stone-300 dark:border-stone-700">
            <div className="p-4 border-b border-stone-300 dark:border-stone-700 flex items-center justify-between">
              <h3 className="font-bold">Elysian Assistant</h3>
              <button onClick={() => setChatOpen(false)} className="hover:text-stone-600 dark:hover:text-stone-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[75%] px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-br-sm' : 'bg-stone-100 dark:bg-stone-800 rounded-bl-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-stone-300 dark:border-stone-700 flex gap-2">
              <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()} placeholder="Type a message..." className="flex-1 px-4 py-2 bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-full focus:outline-none focus:ring-2 focus:ring-stone-900 dark:focus:ring-white" />
              <button onClick={sendChatMessage} className="w-10 h-10 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-900 flex items-center justify-center hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </div>
        ) : (
          <button onClick={toggleChat} className="w-16 h-16 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-900 shadow-2xl flex items-center justify-center hover:scale-105 transition-transform">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
          </button>
        )}
      </div>
    </div>
  )
}