// src/App.tsx

import Product from "./Product";


export default function App() {
  return (
    <>
      <h1>Best selling</h1>

      <Product 
        name="Tacocs with Lime"
        imgUrll="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product 
        name="Fries and Burger"
        imgUrll="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
      <Product 
        name="Big Bananas"
        imgUrll="https://images.pexels.com/photos/70496/pexels-photo-70496.jpeg?w=640"
        price={5.6}
      />
    </>
  );
}

