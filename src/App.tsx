import { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { CompanyLogin } from "./components/CompanyLogin";
import { MemberLogin } from "./components/MemberLogin";
import { ContactUs } from "./components/ContactUs";

type Page = 'home' | 'company-login' | 'member-login' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'company-login':
        return <CompanyLogin onBack={handleBackToHome} />;
      case 'member-login':
        return <MemberLogin onBack={handleBackToHome} />;
      case 'contact':
        return <ContactUs onBack={handleBackToHome} />;
      default:
        return (
          <div className="min-h-screen bg-white">
            <Header onNavigate={handleNavigate} currentPage={currentPage} />
            <HomePage />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen">
      {currentPage === 'home' ? (
        renderPage()
      ) : (
        <>
          {renderPage()}
        </>
      )}
    </div>
  );
}
