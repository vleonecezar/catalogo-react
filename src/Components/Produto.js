import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import styles from "./Produto.module.css";

const Produto = () => {
  const params = useParams();
  const { data, error, loading } = useFetch(
    `https://ranekapi.origamid.dev/json/api/produto/${params.id}`
  );

  if (!data) return null;

  const moeda = Number(data.preco).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <section className={styles.produto}>
      <div>
        {data.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.title} />
        ))}
      </div>
      <div className={styles.dados}>
        <h2>{data.nome}</h2>
        <span>{moeda}</span>
        <p>{data.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
