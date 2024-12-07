import Header from './components/header';
import Footer from './components/footer';
import './globals.css';

const Layout = ({ children }) => {
  return (
    <html lang="fr">
      <body className="bg-black">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
