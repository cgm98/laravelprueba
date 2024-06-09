<template>
    <div class=" max-h-[100vh] max-w-[100vw] grid grid-cols-[auto,1fr] gap-1">
        <sidebar-vue />
        <div class="grid-area-body">
            <router-view></router-view>
        </div>

    </div>
</template>
<script>


export default {
    name: 'Layout',

}
</script>