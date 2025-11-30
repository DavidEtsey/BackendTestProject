
const authModel={
    async SignUp(){
        try{
            const results= await Pool.query(`INSERT INTO users (first_name,surname,
                username,email,password,
                gender,DOB,location,address)
                VALUES`($1,$2,$3,$4,$5,$6,$7,$8,$9));
            return results
        }catch(err){
            res.status(404).json({error: err.message});
        }
    },

    async SignIn(){
        try{
            const results= await Pool.query(`SELECT * FROM users WHERE username=$1 AND password=$2`);
            return results
        }catch(err){
            res.status(404).json({error: err.message});
        }
    }
}

module.exports=authModel;