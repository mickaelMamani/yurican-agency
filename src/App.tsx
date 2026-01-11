import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/common/ScrollToTop'
import LandingPage from './pages/LandingPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import TeamPage from './pages/TeamPage'

// Yurican website - MVP routes
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/equipe" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
