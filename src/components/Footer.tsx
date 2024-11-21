import React from 'react';

interface FooterProps {
  show: boolean;
}

const Footer: React.FC<FooterProps> = ({ show }) => {
  return (
    <footer className={`footer ${show ? 'show' : ''}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Seedsis</h3>
          <p>Análise de sementes mais efetiva!</p>
        </div>

        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#solutions">Soluções</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#pricing">Preços</a></li>
            <li><a href="#contact">Contatos</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contatos</h4>
          <p>Email: suporte@seedsis.com</p>
          <p>Telefone: (45) 1234-5678</p>
        </div>

        <div className="footer-section">
          <div className="social-links">
            {/* Ícones de redes sociais podem ser adicionados aqui */}
            <p>Siga-nos nas redes sociais!</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Seedsis. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
