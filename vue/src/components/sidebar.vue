<script>
export default {

    name: 'sideBar',
    data() {
        return {
            is_expanded: true,
            class1: 'fixed top-0 left-0 z-40 w-24 h-screen transition-transform -translate-x-full sm:translate-x-0',
            class: 'w-20 h-screen transition-transform -translate-x-full sm:translate-x-0'
        }
    },
    methods: {
        changeStyle() {
            this.is_expanded = !this.is_expanded
            //this.class='fixed top-0 left-0 z-40 w-14 h-screen transition-transform -translate-x-full sm:translate-x-0'
        }
    }, mounted() {
        this.is_expanded = false;
    }
}
</script>
<template>
    <aside id="cta-button-sidebar"
        :class="this.is_expanded ? this.class : '  md:w-44 lg:w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'"
        aria-label="Sidebar">
        <div class=" bg-[#0F172A] h-full  px-3 py-4 overflow-y-auto   ">
            <ul class="space-y-2 font-medium">
                <li @click="changeStyle()">
                    <router-link :to="{ name: 'Dashboard' }">
                        <a
                            :class="this.is_expanded ? ' flex items-center  justify-center' : 'flex items-center ' + ' p-2  hover:bg-[#1E293B] hover:rounded-lg dark:hover:bg-gray-600 '">
                            <svg :class="this.is_expanded ? 'w-8 h-8 ' : 'w-6 h-6 ' + ' transition duration-75 text-gray-500  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 22 21">
                                <path
                                    d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                <path
                                    d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                            </svg>

                            <span v-if="!this.is_expanded" class="text-white pl-3 ml-3 whitespace-nowrap">Dashboard</span>
                            <!-- <span :class="this.is_expanded?'hidden':'' + ' ml-3'">VitaPharm</span> -->
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'EditUSer' }">
                        <a
                            :class="this.is_expanded ? 'flex items-center  justify-center p-3' : 'flex items-center p-2' + '  hover:bg-[#1E293B] hover:rounded-lg dark:hover:bg-gray-600'">
                            <svg :class="this.is_expanded ? 'w-8 h-8 transition duration-75' : 'w-6 h-6 transition duration-75' + ' flex-shrink-0  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 20 18">
                                <path
                                    d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                            </svg>
                            <span v-if="!this.is_expanded" class="text-white   pl-3 ml-3 whitespace-nowrap">User</span>
                        </a>
                    </router-link>
                </li>
                <li>
                    <a href="#"
                        :class="this.is_expanded ? 'flex items-center  justify-center' : 'flex items-center ' + ' p-2  hover:bg-[#1E293B] hover:rounded-lg dark:hover:bg-gray-600'">
                        <svg :class="this.is_expanded ? 'w-8 h-8 transition duration-75' : 'w-6 h-6 transition duration-75' + ' flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path
                                d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                        </svg>
                        <span v-if="!this.is_expanded" class=" text-white  pl-3 ml-3 whitespace-nowrap">Test</span>
                    </a>
                </li>

                <li class="absolute bottom-0 pl-3 pb-4">
                    <a href="#"
                        :class="this.is_expanded ? 'flex items-center  justify-center' : 'flex items-center ' + ' p-2  hover:bg-[#1E293B] hover:rounded-lg dark:hover:bg-gray-600  bottom-0'">
                        <svg :class="this.is_expanded ? 'w-8 h-8 transition duration-75' : 'w-6 h-6 transition duration-75 ' + ' flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z">
                            </path>
                            <path d="m11 16 5-4-5-4v3.001H3v2h8z"></path>
                        </svg>
                        <span v-if="!this.is_expanded" class="text-white pl-3 ml-3 whitespace-nowrap">Salir</span>
                    </a>

                </li>
            </ul>
        </div>
    </aside>
</template>
<style></style>

