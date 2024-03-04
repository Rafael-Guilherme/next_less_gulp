import Image from "next/image";
import "../styles/styles.css"

export default function Home() {
  return (
    <div>
      <header>
        <div className="container">
            <div className="branding">
              <Image src="https://via.placeholder.com/180x180" alt="foto" width={120} height={70} />
            </div>
            <nav>
                <ul className="menu">
                    <li>
                        <a href="#">Início</a>
                    </li>
                    <li>
                        <a href="#">Produtos</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <section>
        <div className="container">
            <h2>Produtos</h2>
            <ul className="products">
                <li className="product-item">
                    <Image src="https://via.placeholder.com/180x180" alt="foto" width={180} height={180} />
                    <h4>Nome do produto</h4>
                    <p>
                        Descrição do produto, cor, tamanho, textura, etc.
                    </p>
                    <a href="#" className="product-button">
                        Ver detalhes
                    </a>
                </li>
                <li className="product-item">
                    <Image src="https://via.placeholder.com/180x180" alt="foto" width={180} height={180} />
                    <h4>Nome do produto</h4>
                    <p>
                        Descrição do produto, cor, tamanho, textura, etc.
                    </p>
                    <a href="#" className="product-button">
                        Ver detalhes
                    </a>
                </li>
                <li className="product-item">
                    <Image src="https://via.placeholder.com/180x180" alt="foto" width={180} height={180} />
                    <h4>Nome do produto</h4>
                    <p>
                        Descrição do produto, cor, tamanho, textura, etc.
                    </p>
                    <a href="#" className="product-button">
                        Ver detalhes
                    </a>
                </li>
                <li className="product-item">
                    <Image src="https://via.placeholder.com/180x180" alt="foto" width={180} height={180} />
                    <h4>Nome do produto</h4>
                    <p>
                        Descrição do produto, cor, tamanho, textura, etc.
                    </p>
                    <a href="#" className="product-button">
                        Ver detalhes
                    </a>
                </li>
            </ul>
        </div>
    </section>
    </div>
  );
}
