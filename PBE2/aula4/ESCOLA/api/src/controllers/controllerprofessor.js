const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const professor = await prisma.professor.create({
            data: req.body
        });
        return res.status(201).json(professor);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const professors = await prisma.professor.findMany();
    return res.json(professors);
}

const readOne = async (req, res) => {
    try {
        const turma = await prisma.turma.findUnique({
            select: {
                id: true,
                nome: true,
                ano: true,
                disciplinas: {
                    select: {
                        id: true,
                        nome: true,
                        alunos: {
                            select: {
                                id: true,
                                nome: true
                            }
                        },
                        professores: {
                            select: {
                                id: true,
                                nome: true
                            }
                        }
                    }
                }
            },
            where: {
                id: Number(req.params.id)
            }
        });
        return res.json(turma);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}


const update = async (req, res) => {
    try {
        const professor = await prisma.professor.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(professor);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.professor.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = { create, read, readOne, update, remove };