const authModel=require('../models/AuthModel.js');

const AuthController={
    async userSignUp(req,res){
        try{
            const SignUp=await authModel.signUp()
            res.json(SignUp);
        }catch(err){
            res.status(404).json({error: err.message});
        }
    
    },
    
    async userSignIn(req,res){
        try{
            const SignIn=await authModel.signIn()
            res.json(SignIn);
        }catch(err){
            res.status(404).json({error: err.message});
        }
    }
}

module.exports=AuthController;