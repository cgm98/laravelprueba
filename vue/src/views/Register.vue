
<template>
    <div class="w-full max-w-md">
        <form @submit.prevent="handleRegister" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <!-- <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Supervisor">
                    nombre de usuario
                </label>
                <input v-model="form.username"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Usuario" type="text" placeholder="Usuario">
            </div> -->
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Operario">
                    nombre
                </label>
                <input v-model="form.name"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nombre" type="text" placeholder="nombre">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Producto">
                    Apellidos
                </label>

                <input v-model="form.lastName"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Apellidos" type="text" placeholder="Apellidos">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Producto">
                    email
                </label>

                <input v-model="form.email"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="email" placeholder="email">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="clave">
                    Contraseña
                </label>
                <input v-model="form.password"
                    class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="Clave" type="password" placeholder="******************">

            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Confirmar contraseña
                </label>
                <input v-model="form.password_confirm"
                    class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="Clave2" type="password" placeholder="******************">
                    <p class="text-red-500 text-xs italic">{{error}}</p>
            </div>
            <div class="mb-4">

                <button
                    class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Registrarte
                </button>
            </div>
            <div class="mb-4">
                <router-link :to="{ name: 'Login' }">
                    <button
                        class="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        Inicia Sesion
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
    setup() {
        const form = ref({
            name: '',
            lastName: '',
            email: '',
            password: '',
            password_confirm: ''
        })
        const authStore = authUserStore();
        const handleRegister= () =>{
            authStore.register(form);
        }
        const error = authStore.getErrMsg;
        return {
            error,form,handleRegister
        }
    }

})
</script>