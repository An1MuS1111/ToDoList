const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors());
app.use(express.json());


// import routes
const usersRouter = require('./routes/users')
const todosRouter = require('./routes/todos')
const authsRouter = require('./routes/auths')

// use routes
app.use('/users', usersRouter)
app.use('/todos', todosRouter)
app.use('/auths', authsRouter)


// set up server
PORT = 4444
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})