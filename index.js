const json_server=require('json-server')

// server creation
const vidServer=json_server.create()

// create middleware for converting json to js
const middleware=json_server.defaults()

// create router for connecting database to index
const router=json_server.router('db.json')

// connect server with frontend
        // CORS // npm i cors
const cors=require('cors')

vidServer.use(cors())

// apply middleware
vidServer.use(middleware)
// apply database
vidServer.use(router)


const PORT=8001

vidServer.listen(PORT,()=>{
        console.log(`___ Video Server Started at Port Number ${PORT} ___`);
})
