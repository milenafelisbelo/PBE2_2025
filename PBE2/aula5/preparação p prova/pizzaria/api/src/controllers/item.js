const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    const itens = await prisma.item.findMany();
    return res.json(itens);
};

const create = async (req, res) => {
    const { pedidoId, pizzaId, quantidade, valor } = req.body;

    if (!pedidoId || !pizzaId || !quantidade || !valor) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    try {
        const item = await prisma.item.create({
            data: { pedidoId, pizzaId, quantidade, valor }
        });
        return res.status(201).json(item);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const item = await prisma.item.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(item);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    try {
        await prisma.item.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: "Item não encontrado." });
    }
};

module.exports = { read, create, update, remove };