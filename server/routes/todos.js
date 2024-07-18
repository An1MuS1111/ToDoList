const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { PrismaClientValidationError } = require('@prisma/client/runtime/library');
const { verify } = require('./auths');
async function main() {
    try {
        await prisma.$connect();
        console.log('Database connected');
    } catch (error) {
        console.error('Failed to connect to database:', error);
    }
}

main();
// Get all todos
router.get('/', async (req, res) => {
    try {
        const todos = await prisma.todo.findMany();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch todos' });
    }
});

// Get all todos by user ID
router.get('/:userId', verify, async (req, res) => {
    const { userId } = req.params;
    try {
        const todos = await prisma.todo.findMany({
            where: { userId: Number(userId) },
        });
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch todos' });
    }
});


// Add a new todo

router.post('/add', async (req, res) => {
    const { userId, title, description, subTasks, taskStartedAt, taskCompletedAt, taskStatus, taskCategory } = req.body;
    if (!userId || !title || !taskStartedAt || !taskCompletedAt || !taskStatus || !taskCategory) {
        return res.status(400).json({ error: 'Required fields are missing' });
    }

    try {
        const todo = await prisma.todo.create({
            data: {
                userId: Number(userId),
                title,
                description,
                subTasks,
                taskStartedAt: new Date(taskStartedAt),
                taskCompletedAt: new Date(taskCompletedAt),
                taskStatus,
                taskCategory,
            },
        });
        res.status(201).json(todo);
    } catch (error) {
        if (error instanceof PrismaClientValidationError) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Failed to create todo' });
        }
    }
});

// Get a todo by ID
router.get('/:taskId', async (req, res) => {
    const { taskId } = req.params;
    try {
        const todo = await prisma.todo.findUnique({
            where: { taskId: Number(taskId) },
        });
        if (todo) {
            res.status(200).json(todo);
        } else {
            res.status(404).json({ error: 'Todo not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch todo' });
    }
});

// Update a todo by ID
router.put('/:taskId', async (req, res) => {
    const { taskId } = req.params;
    const { title, description, subTasks, taskStartedAt, taskEndedAt, taskCompletedAt, taskStatus, taskCategory } = req.body;
    if (!title || !taskStartedAt || !taskEndedAt || !taskStatus || !taskCategory) {
        return res.status(400).json({ error: 'Required fields are missing' });
    }

    try {
        const todo = await prisma.todo.update({
            where: { taskId: Number(taskId) },
            data: {
                title,
                description,
                subTasks,
                taskStartedAt,
                taskEndedAt,
                taskCompletedAt,
                taskStatus,
                taskCategory,
            },
        });
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update todo' });
    }
});

// Delete a todo by ID
router.delete('/:taskId', async (req, res) => {
    const { taskId } = req.params;
    try {
        await prisma.todo.delete({
            where: { taskId: Number(taskId) },
        });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete todo' });
    }
});

module.exports = router;






