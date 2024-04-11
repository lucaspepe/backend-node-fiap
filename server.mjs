import express from 'express';

import { createTask } from './routes/tasks/create.mjs'
import { loadTasks } from './routes/tasks/load.mjs'

const app = express()
app.use(express.json());
const port = 3000

app.post('/tasks', async (req, res, next) => {
    await createTask({
        title: req.body.title
    })
    res.status(201).end();
})

app.get('/tasks', async (req, res, next) => {
    const tasks = await loadTasks()
    console.log(tasks)
    res.json(tasks);
})

app.get('/', (req, res, next) => {
    console.log('Chegou no post')
    res.send('no get');
})

app.listen(port, () => {
  console.log(`Node em execução na porta ${port}`)
})