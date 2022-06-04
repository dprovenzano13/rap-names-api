const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph' ,
        'birthLoation': 'London, England',  
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett' ,
        'birthLoation': 'Chicago, Illinois',  
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown' ,
        'birthLoation': 'unknown',  
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) =>{
    const rapperName = req.params.name.toLowerCase()
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    } else {
        res.json(rappers['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! Beta go catch it!`)
})