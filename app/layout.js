import Header from './components/header';
import Footer from './components/footer';
import './globals.css';

const Layout = ({ children }) => {
  return (
    <html lang="fr">
      <body className="bg-black">
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

export default Layout;
