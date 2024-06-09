
<template>
    <div class="w-full max-w-md">
        <form @submit.prevent="handleLogin" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Correo">
                    Correo
                </label>
                <input v-model="form.email"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Correo" type="email" placeholder="example@example.com">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Operario">
                    Operario
                </label>
                <select-vue id="Operario"></select-vue>
 
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Producto">
                    Producto
                </label>
                <select-vue id="Producto"></select-vue>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Clave
                </label>
                <input v-model="form.password"
                    class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="Clave" type="password" placeholder="******************">
                <p class="text-red-500 text-xs italic">{{userStore.errMsg}}</p>
            </div>
            <div class="mb-4">

                <button
                    class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Iniciar Sesion
                </button>


            </div>
            <div class="mb-4">
                <router-link :to="{ name: 'Register' }">
                    <button
                        class="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        Registrarte
                    </button>
                </router-link>
            </div>

        </form>
        <p class="text-center text-gray-500 text-xs">
            &copy;2023 Acme Corp. All rights reserved.
        </p>
    </div>
</template>
<script>
import { authUserStore } from '../store/auth.js'
import { defineComponent, ref } from "vue";
export default defineComponent({
    name: 'Login',
    setup() {
        const userStore = authUserStore();
        const form = ref({
            email: '',
            password: '',
            remember: false
        })
        //const errorMessage= userStore.errMsg;
        const handleLogin= () =>{
            console.log(form)
            userStore.login(form);
        }
        return {
            userStore, handleLogin,form
        };
    },
     

})
</script>