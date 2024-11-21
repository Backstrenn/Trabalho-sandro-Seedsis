import React, { useState, useEffect } from 'react';
import '../styles/utility.css';
import '../styles/header.css';
import Logo from '../assets/logo.svg';
import Close from '../assets/close.svg';
import Menu from '../assets/menu.svg';
import Button from '../components/Button';
import HeroRectangleOne from '../assets/images/RectangleOne.png';
import HeroRectangleTwo from '../assets/images/RectangleTwo.png';
import '../styles/hero.css';
import '../styles/solution.css';
import Card from '../components/Card';
import '../styles/carousel.css';
import Testimonials from '../components/depoimentos';
import Check from "../assets/check.svg"
import "../styles/pricing.css"
import Footer from '../components/Footer';
import '../styles/footer.css'
import ContactForm from "../components/Contato";
import '../styles/contato.css'



export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (showMobileMenu) {
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.width = '100%';
    } else {
      body.style.overflow = 'auto';
      body.style.position = 'static';
    }

    return () => {
      body.style.overflow = 'auto';
      body.style.position = 'static';
    };
  }, [showMobileMenu]);

  return (
    <>
    
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo" width={180} height={60} />
          <div className="desktop-only">
            <ul className="flex gap-1">
              <li><a href="#">Home</a></li>
              <li><a href="#solution">Soluções</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
              <li><a href="#pricing">Preços</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="#">Login</a>
              <Button text="Cadastre-se" />
            </div>
          </div>
          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#solution">Soluções</a></li>
                    <li><a href="#testimonials">Depoimentos</a></li>
                    <li><a href="#pricing">Preços</a></li>
                    <li><a href="#contact">Contato</a></li>
                    <li><a className="reverse-color" href="#">Login</a></li>
                  </ul>
                  <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                    <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                  </span>
                </div>
              </div>
            ) : (
              <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>

      <section id="hero">
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Retangulo pc" />
        </span>
        <img src={HeroRectangleOne} alt="Retangulo" className="hero-image" />
        <div className="container content">
          <h1>Somos a SEEDSIS, uma empresa nacional de tecnologia da informação!</h1>
          <p>
            Focada em auxiliar o setor privado com uma solução incrível para laboratórios de sementes. Atuamos em todos os estados brasileiros e também no Paraguai com mais de 12.000 usuários dentro da nossa solução. Nos últimos anos conquistamos de forma muito séria e comprometida a autoridade no setor de análise de sementes.
          </p>
          <div className="flex gap-1">
            <Button text="Cadastre-se" />
            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section>
      <div className="carousel-content">

</div>
      <section id="solution">
        <div className="container content">
          <h2>Soluções da Empresa</h2>
          <p>
            Somos especializados em análise de sementes, utilizando inteligência artificial para tornar o processo 100% mais eficiente e rápido. Nossa tecnologia avançada proporciona precisão e agilidade, permitindo realizar em pouco tempo o trabalho que antes levava o dia inteiro.
          </p>
          <div className="card-container even-columns">
            <Card
              title="Coopavel"
              description="A Seedsis automatizou o processo de análise de sementes, tornando-o mais rápido e preciso. Essa inovação melhorou a qualidade de nossos produtos, oferecendo análises detalhadas e confiáveis."
            />
            <Card
              title="Coamo"
              description="Com a Seedsis, aumentamos a eficiência da análise de sementes. O sistema foi implementado rapidamente e elevou nossa precisão, melhorando a comunicação e o fluxo de trabalho."
            />
            <Card
              title="Copacol"
              description="A solução da Seedsis otimizou nossos processos, garantindo análises de sementes seguras e precisas. Agora, contamos com um sistema confiável, que traz agilidade e suporte de qualidade."
            />
          </div>
        </div>
      </section>

      <div id="square-container"></div>

      <Testimonials />
      <section id="pricing" className="container">
  <header>
    <p className="desktop-only">Planos e preços</p>
    <h2>Nossos Planos</h2>
  </header>
  <section className="even-columns gap-1.5">
    {/* Plano Básico */}
    <div className="pricing-card">
      <span className="plan">
        <h3>Básico</h3>
        <p>Ideal para quem está começando com a análise de sementes.</p>
      </span>
      <h2>Grátis</h2>
      <Button text="Começar agora" secondary key="basic" />
      <span className="hr" />
      <span className="features">
        <img src={Check} alt="ícone check" width={24} height={24} />
        <p>Até 10 análises por mês</p>
      </span>
      <span className="features">
        <img src={Check} alt="ícone check" width={24} height={24} />
        <p>Suporte básico via e-mail</p>
      </span>
    </div>

    {/* Plano Avançado */}
    <div className="pricing-card premium">
      <span className="bonus">
        <p>1º MÊS GRÁTIS</p>
      </span>
      <span className="plan">
        <h3>Avançado</h3>
        <p>Para empresas que precisam de eficiência em grande escala.</p>
      </span>
      <span className="price">
        <h2>R$ 299,90</h2>
        <p>/mês</p>
      </span>
      <Button text="Assinar agora" key="advanced" />
      <span className="hr" />
      <span className="features">
        <img src={Check} alt="ícone check" width={24} height={24} />
        <p>Análise ilimitada de sementes</p>
      </span>
      <span className="features">
        <img src={Check} alt="ícone check" width={24} height={24} />
        <p>Relatórios detalhados</p>
      </span>
      <span className="features">
        <img src={Check} alt="ícone check" width={24} height={24} />
        <p>Suporte prioritário</p>
      </span>
    </div>

    {/* Plano Profissional */}
    <div className="pricing-card">
      <span className="plan">
        <h3>Profissional</h3>
        <p>Para quem busca a máxima precisão na análise de sementes.</p>
      </span>
      <span className="price">
        <h2>R$ 499,90</h2>
        <p>/mês</p>
      </span>
      <Button text="Contratar agora" key="professional" />
      <span className="hr" />
      <span className="features">
        <img src={Check} alt="ícone check" width={24} height={24} />
        <p>Análise avançada com IA</p>
      </span>
      <span className="features">
        <img src={Check} alt="ícone check" width={24} height={24} />
        <p>Integração com sistemas</p>
      </span>
      <span className="features">
        <img src={Check} alt="ícone check" width={24} height={24} />
        <p>Suporte 24/7</p>
      </span>
    </div>
</section>

      </section>
      <ContactForm />
    <Footer show={true}/>
    </>
    
  );
}