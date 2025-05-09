const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    const pizzas = await prisma.pizza.findMany(); // Corrigido: "pizza" (singular)
    return res.json(pizzas);
};

const create = async (req, res) => {
    try {
        const pizza = await prisma.pizza.create({
            data: req.body
        });
        return res.status(201).json(pizza);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const pizza = await prisma.pizza.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(pizza);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    try {
        await prisma.pizza.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.status(200).json({ message: 'Pizza deletada com sucesso.' });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = { read, create, update, remove };