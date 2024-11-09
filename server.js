import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/cars', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createCar(body);
    return reply.status(200).send();
})

// READE
server.get('/cars', async () => {
    const cars = await databasePostgres.listCars();
    return cars;
});

// UPDATE
server.put('/cars/:id', async (request, reply) => {
    const carID = request.params.id;
    const body = request.body;
    await databasePostgres.updateCars(carID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/cars/:id', async (request, reply) => {
    const carID = request.params.id;
    await databasePostgres.deleteCars(carID);

    return reply.status(204).send();
})



/////// USUARIOS



// CREATE
server.post('/users', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createUser(body);
    return reply.status(200).send();
})

// READE
server.get('/users', async () => {
    const users = await databasePostgres.listUsers();
    return users;
});

// UPDATE
server.put('/users/:id', async (request, reply) => {
    const userID = request.params.id;
    const body = request.body;
    await databasePostgres.updateUsers(userID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/users/:id', async (request, reply) => {
    const userID = request.params.id;
    await databasePostgres.deleteUsers(userID);

    return reply.status(204).send();
})


export { server };

server.listen({
    port: 3333,
    host: '0.0.0.0'
});
