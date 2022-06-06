const express = require('express')  
const app = express()
const PORT = 8000

const items = {
    'chicken' : {
        'averagePrice': 4.99,
        'lowPrice': 1.88,
        'highPrice': 9.99
},
    'tomato' : {
        'averagePrice': 1.99,
        'lowPrice': .88,
        'highPrice': 6.99
},
    'apples' : {
        'averagePrice': 3.99,
        'lowPrice': .98,
        'highPrice': 7.99
},
    'unknown': {
        'averagePrice': 0,
        'lowPrice': 0,
        'highPrice': 0
    }

}
app.get('/', (request, response)=>{
     response.sendFile(__dirname +'/index.html')
     
})

app.get('/api/:name', (request, response)=>{
    const itemNames= request.params.name.toLowerCase()
    if( items[itemNames]){
        response.json(items[itemNames])
    }else{
        response.json(items['unknown'])
    }
   
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on ${PORT}! go Catch it!`)
})