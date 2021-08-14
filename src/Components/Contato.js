import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={styles.contato}>
      <Head title=" | Contato" description="página de contato" />
      <img src={foto} alt="contato" />
      <div className={styles.dados}>
        <h2>Entre em contato:</h2>
        <ul>
          <li>Email: email@email.com</li>
          <li>Tel: (21) 99999-9999</li>
          <li>Rua Logo Ali, nº 1000</li>
          <li>Rio de Janeiro - RJ</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
