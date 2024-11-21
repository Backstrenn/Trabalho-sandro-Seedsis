import React from 'react';
import Pessoa from '../assets/images/Pessoa.png';
import Pessoa2 from '../assets/images/Pessoa2.jpeg';
import Bluezao from '../assets/images/Bluezao.png';
import '../styles/carousel.css';

const testimonials = [
  {
    profileImage: Pessoa,
    testimony: 'A Seedsis automatizou o processo de análise de sementes, tornando-o mais rápido e preciso.',
    rating: 5,
    name: 'John Doe',
    title: 'CEO, Coopavel',
  },
  {
    profileImage: Pessoa2,
    testimony: 'Com a Seedsis, aumentamos a eficiência da análise de sementes.',
    rating: 4,
    name: 'Jane Smith',
    title: 'Gerente, Coamo',
  },
  {
    profileImage: Bluezao,
    testimony: 'A solução da Seedsis otimizou nossos processos, garantindo análises seguras e precisas.',
    rating: 5,
    name: 'Carlos Silva',
    title: 'Diretor, Copacol',
  },
  {
    profileImage: Pessoa,
    testimony: 'A Seedsis automatizou o processo de análise de sementes, tornando-o mais rápido e preciso.',
    rating: 5,
    name: 'John Doe',
    title: 'CEO, Coopavel',
  },
  {
    profileImage: Pessoa2,
    testimony: 'Com a Seedsis, aumentamos a eficiência da análise de sementes.',
    rating: 4,
    name: 'Jane Smith',
    title: 'Gerente, Coamo',
  },
  {
    profileImage: Bluezao,
    testimony: 'A solução da Seedsis otimizou nossos processos, garantindo análises seguras e precisas.',
    rating: 5,
    name: 'Carlos Silva',
    title: 'Diretor, Copacol',
  },

  
];

const infiniteTestimonials = [ ...testimonials, ...testimonials, ...testimonials];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <header>
        <span>
          <p className="desktop-only">Conselho de quem conhece</p>
          <h2>Cada cliente importa!</h2>
        </span>
        <p>
        Focada em auxiliar o setor privado com uma solução incrível para laboratórios de sementes. Atuamos em todos os estados brasileiros e também no Paraguai com mais de 12.000 usuários dentro da nossa solução. Nos últimos anos conquistamos de forma muito séria e comprometida a autoridade no setor de análise de sementes.
        </p>
      </header>
      <div className="carousel">
        <div className="carousel-content">
          {infiniteTestimonials.map((testimonial, index) => (
            <div className="carousel-card" key={index}>
              <img src={testimonial.profileImage} alt={testimonial.name} />
              <p>{testimonial.testimony}</p>
              <div className="rating">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} className={`star-icon ${idx < testimonial.rating ? 'filled' : ''}`}>★</span>
                ))}
              </div>
              <div className="names">
                <p className="name">{testimonial.name}</p>
                <p className="title">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
