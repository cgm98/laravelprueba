<template>
    <select id="small"
        class="block w-full p-2 mb-2 text-sm text-b-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Choose a Operario</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
    </select>
</template>
<script>
export default {
    name: 'SelectVue',
    props: {},
    data() {
        return {

        }
    },
}
</script>