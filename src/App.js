import React from "react";
import faker from "faker";

//importing files
import "./App.css";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";


//functional component
const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <section style={{ backgroundColor: "#92a8d1" }}>
        <div className="cards">
          <Card image={faker.random.image()} title={faker.lorem.words()} />
          <Card image={faker.random.image()} title={faker.lorem.words()} />
          <Card image={faker.random.image()} title={faker.lorem.words()} />
          <Card image={faker.random.image()} title={faker.lorem.words()} />
          <Card image={faker.random.image()} title={faker.lorem.words()} />
          <Card image={faker.random.image()} title={faker.lorem.words()} />

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;