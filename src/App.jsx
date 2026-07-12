import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { LeadsProvider } from './context/LeadsContext'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import PracticeAreas from './pages/PracticeAreas'
import PracticeAreaDetail from './pages/PracticeAreaDetail'
import Consultation from './pages/Consultation'
import FAQ from './pages/FAQ'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import AdminDashboard from './pages/AdminDashboard'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Disclaimer from './pages/Disclaimer'

function App() {
  return (
    <Router>
      <LeadsProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/practice-areas/:slug" element={<PracticeAreaDetail />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </LeadsProvider>
    </Router>
  )
}

export default App
