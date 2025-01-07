import Header from './components/header';
import Footer from './components/footer';
import './globals.css';

export const metadata = {
  title: 'Mon site',
  description: 'Un exemple Next.js avec un fond unifié',
};

const Layout = ({ children }) => {
  return (
    <html lang="fr" className="h-full bg-gray-800">
      <body className="min-h-screen h-full bg-gray-800">
        
        {/* Conteneur fixe pour le Header */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Header />
        </div>
        
        {/* Ajout d'un padding-top pour laisser la place au header */}
        <main className="pt-24">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
};


// accès a animation/gsap.js 
<script src="./animation/gsap.js"></script>

export default Layout;
