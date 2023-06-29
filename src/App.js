import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div>
      <Header />
      <Services/>
      <main>
        <h2>Welcome to My LP!</h2>
        <p>This is the main content of the landing page.</p>
      </main>
      <Services/>
      <Services/>
      <Contact/>
      <MyComponent/>
      <Footer />
    </div>
  );
}

export default App;
