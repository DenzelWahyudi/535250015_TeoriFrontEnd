import Image from "next/image";
import logo from "./assets/logo.png";
import bars from "./assets/3bar-black.png";
import gayo from "./assets/gayo-coffee.jpg";
import toraja from "./assets/toraja-coffee.png";
import kintamani from "./assets/kintamani-coffee.jpg";
import flores from "./assets/flores-coffee.jpg";
import mandailing from "./assets/mandailing-coffee.jpg";
import liberika from "./assets/liberika-coffee.jpg";

export default function Home() {
  return (
    <div>
      <canvas id="canvasId"></canvas>

      <header id="header">
        <div id="head-title">
          <Image src={logo} alt="coffee" />
          <h1>Kopi Nusantara</h1>
        </div>

        <nav id="navbar">
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>

            <li>
              <a href="#product">Products</a>
            </li>

            <li>
              <a href="#work">Our Partner</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>

            <li>
              <a href="#about">About Us</a>
            </li>
          </ul>
        </nav>

        <div id="dropdown">
          <Image src={bars} alt="dropdown" id="3bar" />
        </div>

        <div id="dropContent">
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>

            <li>
              <a href="#product">Products</a>
            </li>

            <li>
              <a href="#work">Our Partner</a>
            </li>

            <li>
              <a href="#faq">FAQ</a>
            </li>

            <li>
              <a href="#about">About Us</a>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <section id="hero">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-label">NIM: 535250015</p>

              <h2>
                Denzel Mark Wahyudi
              </h2>

              <p className="hero-description">
                Menikmati kekayaan kopi Nusantara dari berbagai daerah Indonesia
                dalam setiap tegukan.
              </p>

              <a href="#product" className="hero-button">
                {" "}
                Explore Our Coffee{" "}
              </a>
            </div>

            <div className="hero-logo">
              <div className="logo-circle">
                <Image src={logo} alt="Logo Kopi Nusantara" />
              </div>
            </div>
          </div>
        </section>

        <section id="product">
          <div className="products-inner">
            <h2>Products</h2>
            <p className="products-subtitle">
              Discover the authentic taste of Indonesian coffee beans, crafted
              with carefully selected beans from across the archpelago.
            </p>
            <div className="products-grid">
              <div className="product-card">
                <Image src={gayo} alt="Gayo Coffee" />
                <div className="product-info">
                  <h3>Robusta Gayo Coffee (Medium Roasted, Honey)</h3>
                  <p>
                    Nutty and buttery coffee beans from the highlands of Aceh
                  </p>
                  <span className="product-price">Rp200.000/kg</span>
                </div>
              </div>

              <div className="product-card">
                <Image src={toraja} alt="Toraja Coffee" />
                <div className="product-info">
                  <h3>Arabica Toraja Coffee(Medium Roasted, Washed)</h3>
                  <p>
                    Rich and earthy coffee beans with a distinctive taste from
                    Sulawesi
                  </p>
                  <span className="product-price">Rp325.000/kg</span>
                </div>
              </div>

              <div className="product-card">
                <Image src={kintamani} alt="Kintamani Coffee" />
                <div className="product-info">
                  <h3>Arabica Kintamani Coffee(Medium Roasted, Washed)</h3>
                  <p>
                    Fresh and fruity coffee beans from the mountains of Bali
                  </p>
                  <span className="product-price">Rp325.000/kg</span>
                </div>
              </div>

              <div className="product-card">
                <Image src={flores} alt="Flores Bajawa Coffee" />
                <div className="product-info">
                  <h3>Robusta Flores Bajawa Coffee(Medium Roasted, Washed)</h3>
                  <p>
                    Balanced coffee with a warm aroma from Flores, East Nusa
                    Tenggara
                  </p>
                  <span className="product-price">Rp200.000/kg</span>
                </div>
              </div>

              <div className="product-card">
                <Image src={mandailing} alt="Mandailing Coffee" />
                <div className="product-info">
                  <h3>Arabica Mandailing Coffee (Medium Roasted, Washed)</h3>
                  <p>
                    Full-bodied coffee with a smooth finish from North Sumatra
                  </p>
                  <span className="product-price">Rp330.000/kg</span>
                </div>
              </div>

              <div className="product-card">
                <Image src={liberika} alt="Luwak Coffee" />
                <div className="product-info">
                  <h3>Liberika Coffee (Roasted)</h3>
                  <p>
                    Unique Indonesian coffee with a bold and distinctive
                    character.
                  </p>
                  <span className="product-price">Rp500.000/kg</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="partners-inner">
            <h2>Our Partners</h2>

            <p className="partners-subtitle">
              Bridging farmers, roasters, and avid coffee enjoyers throughout
              Indonesia.
            </p>

            <div className="partners-grid">
              <div className="partner-card">
                <span className="partner-name">
                  {" "}
                  Peternak Kopi Gayo di Aceh{" "}
                </span>
              </div>

              <div className="partner-card">
                <span className="partner-name">
                  Peternak Kopi Toraja di Sulawesi Selatan
                </span>
              </div>

              <div className="partner-card">
                <span className="partner-name">
                  Peternak Kopi Kintamani di Bali
                </span>
              </div>

              <div className="partner-card">
                <span className="partner-name">
                  Peternak Kopi Flores Bajawa di NTT
                </span>
              </div>

              <div className="partner-card">
                <span className="partner-name">
                  Peternak Kopi Liberika di Kalimantan Timur
                </span>
              </div>

              <div className="partner-card">
                <span className="partner-name">
                  Peternak Kopi Mandailing di Sumatera Utara
                </span>
              </div>

              <div className="partner-card">
                <span className="partner-name"> Amankila Roastery </span>
              </div>

              <div className="partner-card">
                <span className="partner-name"> Do Son Cafe </span>
              </div>

              <div className="partner-card">
                <span className="partner-name"> BDK Roastery </span>
              </div>

              <div className="partner-card">
                <span className="partner-name"> Soneva Cafe </span>
              </div>

              <div className="partner-card">
                <span className="partner-name"> Ladytano Coffee </span>
              </div>

              <div className="partner-card">
                <span className="partner-name"> D&apos;Orsay Coffee </span>
              </div>
            </div>
          </div>
        </section>

        <section id="faq">
          <div id="faq-title">
            <h1>Frequenly Asked Question (FAQ)</h1>
            <h3>Find frequenly asked question about us here.</h3>
          </div>

          <div id="faq-content">
            <div className="round-container">
              <button className="accordion">Q1. What is Kopi Nusantara?</button>
              <div className="accordion-content">
                <p>
                  Kopi Nusantara is a coffee brand that showcases Indonesian
                  coffee from various regions across the archipelago, allowing
                  coffee lovers to experience the different flavors and
                  characteristics of Indonesian coffee.
                </p>
              </div>
            </div>
            <div className="round-container">
              <button className="accordion">
                Q2. Where does Kopi Nusantara&apos;s coffee come from?
              </button>
              <div className="accordion-content">
                <p>
                  Our coffee comes from various regions in Indonesia, including
                  Aceh, Sulawesi, Bali, Flores, North Sumatra, and Kalimantan.
                </p>
              </div>
            </div>
            <div className="round-container">
              <button className="accordion">
                Q3. What types of coffee are available?
              </button>
              <div className="accordion-content">
                <p>
                  Kopi Nusantara offers several varieties, including Robusta
                  Gayo, Arabica Toraja, Arabica Kintamani, Robusta Flores
                  Bajawa, Arabica Mandailing, and Liberika Coffee.
                </p>
              </div>
            </div>
            <div className="round-container">
              <button className="accordion">
                Q4. What is the difference between Arabica and Robusta coffee?
              </button>
              <div className="accordion-content">
                <p>
                  Arabica and Robusta are different species of coffee with
                  different characteristics. Arabica generally has a more
                  complex and nuanced flavor, while Robusta tends to have a
                  stronger and more robust character.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="about-container">
            <div className="about-intro">
              <div className="about-brand">
                <Image
                  src={logo}
                  alt="Kopi Nusantara logo"
                  width={56}
                  height={56}
                />
                <p className="about-brand-name">Kopi Nusantara</p>
                <p>The real coffee from Indonesia.</p>
              </div>

              <div className="about-story">
                <p className="about-label">About Us</p>

                <h2 id="about-title">The story behind</h2>

                <p>
                  Indonesia is a country that is full of coffee culture. From
                  the scent till the taste, each region offers a different
                  flavour.
                </p>

                <p>
                  Through Kopi Nusantara, we want to give a chance for many
                  other nations to enjoy the abundance of coffee flavour that is
                  produced by Indonesia. For us, coffee is not just a drink, but
                  it is a chance to talk, know each other, and even relax in the
                  time we have.
                </p>

                <a className="about-link" href="#product">
                  {" "}
                  Jelajahi Kopi Kami{" "}
                </a>
              </div>
            </div>

            <div className="about-values">
              <div>
                <h3>Know Local Coffee</h3>

                <p>Invite coffee lovers to enjoy Indonesias coffees.</p>
              </div>

              <div>
                <h3>How it is Done</h3>

                <p>
                  Learn the process from picking coffee beans until extracting
                  it for a coffee to enjoy.
                </p>
              </div>

              <div>
                <h3>Share a story</h3>

                <p>
                  Enjoying time together through drinking one cup of coffee at a
                  time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        © 2026 Kel-3 Frontend <br />
        Vaibhav Nickson Denzel Catherine Putri. All rights reserved
      </footer>
    </div>
  );
}
