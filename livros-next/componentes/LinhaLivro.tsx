import React from 'react'
import ControleEditora from '../classes/controle/ControleEditora';
import Livro from '../classes/modelo/Livro';

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
    livro: Livro;
    excluir: () => void;
  }
  return(
  const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
    <tr>
      <td>
        {livro.titulo}
        <button
          className="btn btn-danger d-flex"
          onClick={() => excluir(livro.codigo)}>
          Excluir
        </button>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  )
}
  