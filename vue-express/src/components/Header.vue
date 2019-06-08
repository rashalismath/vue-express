<template>
   
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-primary">
            <router-link to="home">
                <a class="navbar-brand text-white">Home</a>
            </router-link>
 
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <!-- <li class="nav-item active">
                        <a class="nav-link" href="#">Register <span class="sr-only">(current)</span></a>
                    </li> -->
                </ul>
                <ul class="mr-0 navbar-nav">
                    <li class="mr-2">
                        <router-link to="login">
                            <a class="text-white">Browse</a>
                        </router-link>
                    </li>
                    <li class="mr-2">
                        <router-link to="login">
                            <a class="text-white">Sign-In</a>
                        </router-link>
                    </li>
                    <li class="mr-2">
                        <router-link to="register">
                            <a class="text-white">Sign-Up</a>
                        </router-link>
                    </li>
                    <li class="mr-2">
                        <router-link to="register">
                            <a class="text-white">Log-out</a>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    
</template>
<script>
export default {
    
}
</script>

<style scoped>

</style>
