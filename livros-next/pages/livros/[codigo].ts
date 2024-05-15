import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivro from '../../classes/controle/ControleLivros';
import bodyParser from 'body-parser';

const livros = [];
const controleLivro = new ControleLivro(livros);


const jsonParser = bodyParser.json();

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        
        jsonParser(req, res, async () => {
            if (req.method === 'GET') {
                const livros = controleLivro.obterLivros();
                res.status(200).json(livros);
            } else if (req.method === 'POST') {
                const novoLivro = req.body;
                controleLivro.incluir(novoLivro);
                res.status(200).json({ mensagem: 'Livro incluído com sucesso!' });
            } else {
                res.status(405).end('Método não permitido');
            }
        });
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno do servidor' });
    }
};