const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors());
app.use(express.json());


// import routes
const usersRouter = require('./routes/users')
const todosRouter = require('./routes/todos')

// use routes
app.use('/users', usersRouter)
app.use('/todos', todosRouter)


// set up server
PORT = 4444
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})