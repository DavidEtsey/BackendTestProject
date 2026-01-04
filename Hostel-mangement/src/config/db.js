const {Pool}=require('pg');
require('dotenv').config();


const pool=(Pool)=>{
    return new Pool({
        user:process.env.DB_USERNAME,
        host:process.env.DB_HOST,  
        database:process.env.DB_NAME,
        password:process.env.DB_PASSWORD,
        port:process.env.DB_PORT,  
    });   
}

/*const pool=new Pool({
    username:process.env.DB_USERNAME,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
})*/



module.exports=pool;