<template>
   <div id="register" class='container mt-5'>
        <form class="" autocomplete="false">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input  v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button  v-on:click="register" type="submit" class="btn btn-primary">Submit</button>
        </form>
   </div>
</template>

<script>
    
    export default {
       data(){
           return {
               email:'',
               password:''
           }
       },
       methods: {
           register(e){
               e.preventDefault();
               
            //    console.log(this.email);
              this.$http.post('http://localhost:8585/register',{
                email:this.email,
                password:this.password
            }).then((message)=>{
                   console.log(message);
                    this.$store.dispatch('setUser',message)
               }).catch((e)=>{
                   console.log(e);
               })
           }
       },
    }
</script>

<style scoped>
    #register{
        
    }
</style>