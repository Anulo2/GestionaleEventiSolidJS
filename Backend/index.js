import { Elysia } from 'elysia'
import {
    swagger
} from '@elysiajs/swagger'
import { cors } from '@elysiajs/cors'

new Elysia()
    .use(swagger
        ())
    .use(cors())
    

    .get('/', () => 'Hello Elysia')
    .get('/user/:id', ({ params: { id } }) => id)
    .post('/form', ({ body }) => body)
    .listen(process.env.PORT || 3000, () => {
        console.log('Server started on port:', process.env.PORT || 3000)

    })