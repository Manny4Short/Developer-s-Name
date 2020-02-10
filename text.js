let express = require('express');

let server = express()

server.use(express.urlencoded({extended: false}));

server.get('/' , (req , res) =>{
    res.send(`
        <form action='/answer' method='POST'> 
        <p>What's the name of the developer for this simple fullstack application<p/>
        <input name='developer' autocomplete='off'>
        <button>Submit your answer</button>
        </form>
    `)
})

server.post('/answer', (req, res) =>{
    if (req.body.developer.toUpperCase() == 'EMMANUEL'){
        res.send(`
        <p>You got the name of the developer!</p>
        <a href='/'> homepage</a>
        `)
    }else{
        res.send(`
        <p>Sorry you didn't get the name of the developer!</p>
        <a href='/'> homepage</a>
        `)
    }
    
})

server.get('/answer', (req, res) =>{

    res.send('Surely youre lost!')
})

server.listen(3000);