import React, { useState } from 'react';
import './styles.css';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const App = () => {
  // Estado para o carrinho de compras
  const [cart, setCart] = useState([]);

  // Função para adicionar um produto ao carrinho
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Função para remover um produto do carrinho
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product.id !== productToRemove.id));
  };

  // Função para calcular o total do carrinho
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + parseFloat(product.price.replace('R$ ', '').replace(',', '.')), 0).toFixed(2);
  };

  // Função para finalizar a compra
  const handleCheckout = () => {
    alert(`Total da compra: R$ ${calculateTotal()}. Compra finalizada com sucesso!`);
    setCart([]); // Limpa o carrinho após o checkout
  };

  const products = [
    {
      id: 1,
      name: "Creme Hidratante",
      price: "R$ 49,90",
      image: "https://cdn.awsli.com.br/2500x2500/653/653431/produto/33508242/ed3f5469b8.jpg"
    },
    {
      id: 2,
      name: "Protetor Solar",
      price: "R$ 29,90",
      image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B47599/BotiSun_Antioleosidade_FPS70_40ml_B47599.jpg"
    },
    {
      id: 3,
      name: "Gel de limpeza",
      price: "R$ 29,90",
      image: "https://cdn.principiaskin.com/media/catalog/product/cache/a11fc81ad62814be31cd922a993aa5ec/p/r/principia-skincare-cosmeticos-gl-01-gel-limpeza-acido-salicilico-glicerina-1_3.jpg"
    },
    {
      id: 4,
      name: "Sabonete facial",
      price: "R$ 49,90",
      image: "https://img.nivea.com/-/media/miscellaneous/media-center-items/3/b/0/264b957e706a439380b2727d4e84159a-screen.jpg"
    },
    {
      id: 5,
      name: "Serúm facial",
      price: "R$ 29,90",
      image: "https://cdn.awsli.com.br/600x1000/764/764220/produto/22570341097977d02d4.jpg"
    },
    {
      id: 6,
      name: "Ácido salicílico",
      price: "R$ 29,90",
      image: "https://epocacosmeticos.vteximg.com.br/arquivos/ids/660977-800-800/acido-salicilico-creamy-20-4-.jpg.jpg?v=638625272135900000"
    },
    {
      id: 7,
      name: "Esfoliante Facial",
      price: "R$ 39,90",
      image: "https://cdn.awsli.com.br/2314/2314809/produto/264361366/whatsapp-image-2024-04-19-at-14-29-51--1--wcdgucy9ps.jpeg"
    },
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <h1>Luminance</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
        {/* Ícones no canto direito */}
        <div className="header-icons">
          <FaSearch className="header-icon" />
          <div className="header-icon">
            <FaShoppingCart />
            <span>{cart.length}</span> {/* Exibe a quantidade de itens no carrinho */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Home Section */}
        <section id="home" className="home">
          <h2>Bem-vindo à Luminance</h2>
          <h3>Cuide da sua pele com nossos produtos exclusivos para o verão.</h3>

          <div className="products">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
              </div>
            ))}
          </div>
        </section>

        {/* Carrinho de Compras */}
        {cart.length > 0 && (
          <section id="cart" className="cart">
            <h2>Carrinho de Compras</h2>
            <div className="cart-items">
              {cart.map((product, index) => (
                <div key={index} className="cart-item">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <button onClick={() => removeFromCart(product)}>Remover</button>
                </div>
              ))}
            </div>
            <div className="total">
              <h3>Total: R$ {calculateTotal()}</h3>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>Finalizar Compra</button>
          </section>
        )}

        {/* About Section */}
        <section id="about" className="about">
          <h2>Sobre Nós</h2>
          <h1>Na Luminance, acreditamos que o cuidado com a pele é um ato de amor próprio. Nossos produtos são feitos com ingredientes naturais e com uma vibe de verão que vai deixar você radiante! Nossa missão é fornecer produtos de alta qualidade para que você se sinta bem consigo mesma, cuidando da sua saúde e bem-estar.</h1>
          <h1>Com o foco no cuidado da pele e na beleza natural, nossa linha de produtos é formulada para garantir a hidratação e proteção que sua pele precisa, de maneira eficaz e com um toque de leveza.</h1>
          <h1>Além disso, nossa marca adota práticas sustentáveis e éticas, garantindo que cada item vendido tenha um impacto positivo no ambiente e na comunidade. Cada produto Luminance reflete nossa paixão por promover a beleza de dentro para fora, respeitando o meio ambiente.</h1>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <h2>Entre em Contato</h2>
          <form>
            <textarea placeholder="Sua mensagem" />
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Luminance. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
