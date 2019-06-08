  const User=require('../models/index').user;
  const Jwt=require('jsonwebtoken');
  const config=require('../config/config');
  const bcrypt=require('bcryptjs');
  
  module.exports={
     register(req,res){
          bcrypt.hash(req.body.password,10, (error,hash)=>{
            if(error){
              res.status(500).send(error.toJSON());
            }else{
              //user create returns a promise so we wait for it before go to res.send
              User.create({email:req.body.email,password:hash})
              .then((response)=>{
                res.status(200).send(response)
              })
              .catch((e)=>{
                res.status(500).send({'Error':e});
              });
            }
          })
          
       
    },

    async login(req,res){

      const {email,password}=req.body;
      const user=await User.findOne({
        where:{
          email:email}
      })

      if(user){
        bcrypt.compare(password,user.password,(error,result)=>{
              
          if(result){
  
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
  
          if(error){
            res.send(500).send(error.toJSON());
          }
  
          });
      }else{
        res.status(403).send({
          Error:"Wrong matches"
        })
      }

    }

  }