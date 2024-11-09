import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 

  async listCars() {
    const cars = await sql`select * from cars`;
    return cars;
  }

  async createCar(car) {
    const id = randomUUID();
    console.log('id', id);
    const name = car.name;
    const placa = car.placa;
    const marca = car.marca;
    
    await sql`insert into cars (id, name, placa, marca)
    values (${id}, ${name}, ${placa}, ${marca})`
  }

  async updateCars(id, car) {
    const name = car.name;
    const placa = car.placa;
    const marca = car.marca;

    await sql`update cars set 
        name = ${name},
        placa = ${placa},
        marca = ${marca}
        where id = ${id}
    `;
  }

  async deleteCars(id) {
    await sql`delete from cars where id = ${id}`
  }


  ////// usuarios

  async listUsers() {
    const users = await sql`select * from users`;
    return users;
  }

  async createUser(user) {
    const id = randomUUID();
    console.log('id', id);
    const name = user.name;
    const senha = user.senha;
    const email = user.email;
    
    await sql`insert into users (id, name, senha, email)
    values (${id}, ${name}, ${senha}, ${email})`
  }

  async updateUser(id, user) {
    const name = user.name;
    const senha = user.senha;
    const email = user.email;

    await sql`update users set 
        name = ${name},
        senha = ${senha},
        email = ${email}
        where id = ${id}
    `;
  }

  async deleteUser(id) {
    await sql`delete from users where id = ${id}`
  }


}