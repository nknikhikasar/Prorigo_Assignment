var config = require('./dbconfig');
const sql = require('mssql');
//const { Connection } = require('mssql');

async function getOrders() {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request().query("SELECT * from Emp1");
        //console.log(product);
        return product;
    } catch (error) {
        console.log(error);
    }
}

async function getOrder(orderId) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.Int, orderId)
            .query("select * from Emp1 where Id=@input_parameter");
        return product.recordsets;
    } catch (error) {
        console.log(error);
    }
}

async function add(order) {
    try {
        let pool = await sql.connect(config);
        let Product = await pool.request()
            .input('Id', sql.Int, order.Id)
            .input('Name', sql.NVarChar, order.Name)
            .input('Age', sql.Int, order.Age)
            .input('City', sql.NVarChar, order.City)
            .query("insert into Emp1 values(@Id,@Name,@Age,@City)");
        return Product;
    } catch (error) {
        console.log(error);
    }
}

async function update(order) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('Id', sql.Int, order.Id)
            .input('Name', sql.VarChar, order.Name)
            .input('Age', sql.Int, order.Age)
            .input('City', sql.VarChar, order.City)
            .query("update Emp1 set Name=@Name,Age=@Age,City=@City where Id=@Id");
        return product;
    } catch (error) {
        console.log(error);
    }
}

async function del(order) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('Id', sql.Int, order)
            .query("delete from Emp1 where Id=@Id")
        return product;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getOrders: getOrders,
    getOrder: getOrder,
    add: add,
    update: update,
    del: del
}