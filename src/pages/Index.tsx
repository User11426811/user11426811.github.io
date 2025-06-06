
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background-color: #f9f6f1;
          color: #1a1a1a;
          line-height: 1.6;
        }
        
        .serif-font {
          font-family: 'Playfair Display', Georgia, serif;
        }
        
        .smooth-scroll {
          scroll-behavior: smooth;
        }
        
        .hero-bg {
          background: linear-gradient(rgba(26, 26, 26, 0.4), rgba(26, 26, 26, 0.4)), 
                      url('/image1.jpeg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        
        .nav-link:hover {
          color: #b59761;
          transition: color 0.3s ease;
        }
        
        .gold-accent {
          color: #b59761;
        }
        
        .gold-border {
          border-color: #b59761;
        }
        
        .gold-hover:hover {
          border-color: #b59761;
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
        
        .section-padding {
          padding: 5rem 1rem;
        }
        
        @media (max-width: 768px) {
          .section-padding {
            padding: 3rem 1rem;
          }
          
          .hero-title {
            font-size: 2.5rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.1rem !important;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="serif-font text-xl font-bold text-gray-900">
              L'Héritage d'Aphrodite
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="nav-link text-gray-700 hover:text-gold">À propos</a>
              <a href="#locaux" className="nav-link text-gray-700 hover:text-gold">Nos locaux</a>
              <a href="#ceo" className="nav-link text-gray-700 hover:text-gold">CEO</a>
              <a href="#chiffres" className="nav-link text-gray-700 hover:text-gold">Chiffres clés</a>
              <a href="#contact" className="nav-link text-gray-700 hover:text-gold">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="serif-font hero-title text-5xl md:text-7xl font-bold mb-6">
            L'Héritage d'Aphrodite
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            Artisanat d'exception pour une clientèle internationale
          </p>
        </div>
      </section>

      {/* À propos Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="serif-font text-4xl md:text-5xl font-bold text-center mb-12 gold-accent">
            À propos
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="public/image5.png"
                alt="Atelier de luxe" 
                className="w-9/12 rounded-lg shadow-lg gold-border border-2"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Depuis <strong>2015</strong>, L'Héritage d'Aphrodite perpétue l'excellence de l'artisanat français dans la création d'accessoires de luxe sur mesure. Notre maison parisienne marie avec subtilité les techniques traditionnelles et l'innovation contemporaine.
              </p>
              <p className="text-lg leading-relaxed">
                Notre savoir-faire s'articule autour de quatre métiers d'art : la <em>maroquinerie</em> avec le travail du cuir le plus noble, l'<em>orfèvrerie</em> pour nos créations bijoutières, la <em>broderie</em> d'exception qui sublime nos pièces uniques et la <em>parfumerie</em> la dernière innovation, avec des parfums inspirés des plus grands.
              </p>
              <p className="text-lg leading-relaxed">
                Portée par une équipe de <strong>45 artisans passionnés</strong>, notre marque incarne l'esprit français du luxe : l'alliance parfaite entre tradition séculaire et vision moderne, au service d'une clientèle internationale exigeante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos locaux Section */}
      <section id="locaux" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="serif-font text-4xl md:text-5xl font-bold text-center mb-12 gold-accent">
            Nos locaux
          </h2>
          <div className="grid md:grid-cols-2 gap-x-10 items-center">
            <div className="space-y-8">
              <p className="text-lg leading-relaxed">
                Nos ateliers sont nichés au cœur du centre <strong>Lyonnais</strong>, dans un bâtiment historique du <em>XVIIe siècle</em> entièrement rénové selon les plus hauts standards contemporains.
              </p>
              <p className="text-lg leading-relaxed">
                Nos espaces de création s'organisent autour de quatre pôles spécialisés : l'atelier de <em>tannage</em> où naissent nos cuirs d'exception, l'espace <em>couture</em> dédié à l'assemblage minutieux, l'atelier de <em>finition</em> où chaque détail est sublimé, et notre <em>salle d'exposition</em> où nos créations prennent vie.
              </p>
            </div>
            <div>
              <img 
                src="/image2.png"
                alt="Atelier L'Héritage d'Aphrodite"
                className="w-9/12 rounded-lg shadow-lg gold-border border-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section id="ceo" className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="serif-font text-4xl md:text-5xl font-bold mb-12 gold-accent">
            Rencontrez notre CEO
          </h2>
          <div className="flex flex-col items-center space-y-8">
            <img 
              src="/image4.png"
              alt="Margaux Leblanc, CEO" 
              className="w-48 h-50 rounded-full object-cover shadow-lg gold-border border-4"
            />
            <div className="space-y-6 max-w-3xl">
              <h3 className="serif-font text-3xl font-bold">Margaux Leblanc</h3>
              <p className="text-lg leading-relaxed">
                Diplômée de l'<strong>Institut Français de la Mode (IFM)</strong> en 2012, Margaux Leblanc a forgé son expertise dans les plus prestigieuses maisons de joaillerie parisiennes avant de fonder L'Héritage d'Aphrodite à l'âge de 28 ans.
              </p>
              <p className="text-lg leading-relaxed">
                Visionnaire passionnée par l'excellence française, elle dirige aujourd'hui notre maison avec une philosophie claire : préserver l'héritage artisanal tout en embrassant l'innovation. Son leadership inspire quotidiennement nos équipes dans la quête perpétuelle de la perfection.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Chiffres clés Section */}
      <section id="chiffres" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="serif-font text-4xl md:text-5xl font-bold text-center mb-12 gold-accent">
            Chiffres clés
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center gold-hover border border-gray-200">
              <div className="serif-font text-3xl font-bold gold-accent mb-2">2015</div>
              <div className="text-gray-600 font-medium">Année de création</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center gold-hover border border-gray-200">
              <div className="serif-font text-3xl font-bold gold-accent mb-2">Lyon</div>
              <div className="text-gray-600 font-medium">Localisation</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center gold-hover border border-gray-200">
              <div className="serif-font text-3xl font-bold gold-accent mb-2">55</div>
              <div className="text-gray-600 font-medium">Employés</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center gold-hover border border-gray-200">
              <div className="serif-font text-2xl font-bold gold-accent mb-2">Luxe</div>
              <div className="text-gray-600 font-medium">Accessoires sur mesure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="serif-font text-4xl md:text-5xl font-bold mb-12 gold-accent">
            Contact
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed max-w-2xl mx-auto">
              Nous serions ravis d'échanger avec vous sur vos projets d'exception. 
              N'hésitez pas à nous contacter pour convenir d'un rendez-vous dans nos ateliers parisiens.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4">
                <Mail className="w-8 h-8 gold-accent" />
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:contact@heritage-aphrodite.fr" className="gold-accent hover:underline">
                    contact@heritage-aphrodite.fr
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Phone className="w-8 h-8 gold-accent" />
                <div>
                  <div className="font-medium">Téléphone</div>
                  <a href="tel:+33123456789" className="gold-accent hover:underline">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <MapPin className="w-8 h-8 gold-accent" />
                <div>
                  <div className="font-medium">Adresse</div>
                  <div className="text-gray-600">
                    69000 Lyon, France
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              © 2025 L'Héritage d'Aphrodite
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gold nav-link">Mentions légales</a>
              <a href="#" className="hover:text-gold nav-link">Politique de confidentialité</a>
              <a href="#" className="hover:text-gold nav-link">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
