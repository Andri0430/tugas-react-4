import Product from "./components/Product";
import "./App.css";

const product = [
  {
    Id: 1,
    productName: "Sneakers Converse CTAS",
    productPrice: "Rp. 599.000",
    urlImage:
      "https://www.converse.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/2/02-CONVERSE-FFSSBCONA-CONA03576C-Yellow.jpg",
  },
  {
    Id: 2,
    productName: "Converse Run Star Motion Canvas",
    productPrice: "Rp. 1.799.000",
    urlImage:
      "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/C/O/CON171546C-1.jpg",
  },
  {
    Id: 3,
    productName: "Converse CTAS Construct Colorblock",
    productPrice: "Rp. 1.599.000",
    urlImage:
      "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA03472C-Grey.jpg",
  },
  {
    Id: 4,
    productName: "Converse Chuck Taylor All Star",
    productPrice: "Rp. 899.000",
    urlImage:
      "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCON0-CON135251C-Black.jpg",
  },
  {
    Id: 5,
    productName: "Converse Unisex Chuck 70 Plus",
    productPrice: "Rp. 1.599.000",
    urlImage:
      "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA02871C-Brown.jpg",
  },
];

export default function App() {
  return (
    <>
      <main>
        <div className="container">
          {product.map((p) => (
            <Product
              keyProduk={p.Id}
              namaProduk={p.productName}
              hargaProduk={p.productPrice}
              gambarProduk={p.urlImage}
            />
          ))}
        </div>
      </main>
    </>
  );
}
