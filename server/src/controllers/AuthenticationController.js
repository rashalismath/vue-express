  const User=require('../models/index').user;
  const Jwt=require('jsonwebtoken');
  const config=require('../config/config');
  
  module.exports={
    async register(req,res){
        try {
          //user create returns a promise so we wait for it before go to res.send
          const user=await User.create(req.body);
          res.send(
              user.toJSON()
          )
        } catch (error) {
          res.status(500)
            .send({
              Error:error
          })
        }
    },

    async login(req,res){
      const {email,password}=req.body;
      const user=await User.findOne({
        where:{
          email:email,
          password:password
        }
      })
      
      if(user){

        const jwt=Jwt.sign(
          { email:user.email  },config.jsonSecret, {expiresIn:60*60/24*7} );

        res.status(200).send(
          {
            jwt
          }
        )
      }else{
        res.status(403).send({
          Error:'Wrong Matches'
        })
      }
      console.log(req.body);
    }





  }