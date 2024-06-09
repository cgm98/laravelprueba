<template>
    <div class="w-auto  h-auto py-5">
        <div class="flex items-center justify-center py-5">
            <div id="icon-user" class="flex items-center justify-center mt-4 p-4">
                <div class="w-[50vw] mt-4 ">
                    <div id="head" class="p-4 flex items-center justify-center">
                        <div class="items-center ">
                            <img class="object-cover h-80 w-80 border rounded-full" src="../../assets/avatar.png" alt="">
                        </div>
                    </div>

                    <div class="card-body grid py-4 px-4">
                        <h1 class="row-start-1 text-lg text-center">Hola ,User name</h1>
                        <div class="py-2 px-4">
                            <label :class="classLabel" for="Nombres">Nombres</label>
                            <input :class="classInput" type="text" name="nombres" id="nombres" placeholder="Nombres" disabled="true">
                        </div>
                        <div class="py-2 px-4">
                            <label :class="classLabel" for="Apellidos">
                                Apellidos
                            </label>
                            <input :class="classInput" type="text" name="apellidos" id="apellidos" placeholder="Apellidos" disabled="true">
                        </div>
                        <div class="py-2 px-4">
                            <label :class="classLabel" for="Correo">Correo</label>
                            <input :class="classInput" type="email" name="correo" id="correo" placeholder="Correo" disabled="true">
                        </div>
                        <div class="py-2 px-4">
                            <label :class="classLabel" for="Telefono">Telefono</label>
                            <input :class="classInput" type="number" name="telefono" id="telefono" placeholder="Telefono" disabled="true">
                        </div>
                        <div class="flex row-start-auto-1 items-center justify-center">
                            <button
                                class="inline-flex items-center justify-center rounded-md bg-blue-950 py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<style>
/** {
    border: 0.9px solid white;  
}*/
</style>
<script>
export default {
    name: 'EditUSer',
    data() {
        return {
            classLabel: 'text-base text-gray-900 dark:text-white',
            classInput: 'block w-full p-2 pl-5 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        }
    }
}
</script>