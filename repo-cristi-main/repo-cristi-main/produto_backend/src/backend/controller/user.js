import { db } from "../db.js";

export const getUsers = (_,res) => {
    const query = "SELECT * FROM produto";

    db.query(query, (err,data) => {
  
        if (err)
            return res.json(err);

        return res.status(200).json(data.rows);
    });
};

export const addUser = (req, res) => {
    const values = [
        req.body.nome,
        req.body.tipo,
        req.body.valor,
        req.body.cor,       
    ];
    const q =
        "INSERT INTO produto (nome, tipo, valor, cor) VALUES ($1, $2, $3, $4)";

        db.query(q, values, (err) => {

        if (err) return res.json(err);
    
        return res.status(200).json("Produto criado com sucesso.");
    });
};
export const updateUser = (req, res) => {
    const q =
        "UPDATE produto SET nome = $1, tipo = $2, valor = $3,  cor = $4 WHERE id = $5";

    const values = [
        req.body.nome,
        req.body.tipo,
        req.body.valor,
        req.body.cor,  
        req.params.id
    ];

    db.query(q, values, (err) => {
        if (err) return res.status(500).json("Erro ao atualizar usuário.");
        return res.status(200).json("Produto atualizado com sucesso.");
    });
};

export const deleteUser = (req, res) => {
    const q = "DELETE FROM produto WHERE id = $1"

    db.query(q, [req.params.id], (err) => {
        if (err)
            return res.json(err);
        return res.status(200).json("Produto deletado com sucesso");
    });
};

