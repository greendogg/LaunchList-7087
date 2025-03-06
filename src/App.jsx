import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import StripeProvider from '@/components/stripe/StripeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import StartupList from '@/pages/StartupList';
import StartupDetail from '@/pages/StartupDetail';
import ListStartup from '@/pages/ListStartup';
import Launches from '@/pages/Launches';
import Profile from '@/pages/Profile';
import Messages from '@/pages/Messages';
import Settings from '@/pages/Settings';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';

function App() {
  return (
    <Router>
      <AuthProvider>
        <StripeProvider>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/startups" element={<StartupList />} />
                <Route path="/startups/:id" element={<StartupDetail />} />
                <Route path="/list" element={<ListStartup />} />
                <Route path="/launches" element={<Launches />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </StripeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;