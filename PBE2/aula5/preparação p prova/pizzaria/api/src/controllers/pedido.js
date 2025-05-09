const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    const pedidos = await prisma.pedido.findMany();
    return res.json(pedidos);
};

const create = async (req, res) => {
    const { data, hora, valor, clienteId } = req.body;

    if (!data || !hora || !valor || !clienteId) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    try {
        const pedido = await prisma.pedido.create({
            data: {
                data: new Date(data),
                hora,
                valor,
                clienteId
            }
        });
        return res.status(201).json(pedido);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const pedido = await prisma.pedido.update({
            where: { id: parseInt(req.params.id) },
            data: req.body
        });
        return res.status(202).json(pedido);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    try {
        const pedido = await prisma.pedido.findUnique({
            where: { id: parseInt(req.params.id) }
        });

        if (!pedido) {
            return res.status(404).json({ error: "Pedido não encontrado." });
        }

        await prisma.pedido.delete({
            where: { id: pedido.id }
        });

        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const readOne = async (req, res) => {
    const pedido = await prisma.pedido.findUnique({
        where: { id: parseInt(req.params.id) }
    });
    if (!pedido) {
        return res.status(404).json({ error: "Pedido não encontrado." });
    }
    return res.status(200).json(pedido);
};

module.exports = { read, create, update, remove, readOne };