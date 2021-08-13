import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import styles from "./Produtos.module.css";

const Produtos = () => {
  const { data, error, loading } = useFetch(
    `https://ranekapi.origamid.dev/json/api/produto`
  );

  if (error) return <p>{error}</p>;
  if (!data) return null;
  return (
    <section className={styles.produtos}>
      <ul>
        {data.map((produto) => (
          <li key={produto.id}>
            <Link to={`produto/${produto.id}`}>
              <img src={produto.fotos[0].src} alt={produto.fotos[0].title} />
              <h2>{produto.nome}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Produtos;
