<template>
    <div class="flex items-center justify-center w-full h-full">
        <div id="timer" class="p-4 m-2 items-center justify-center w-[40vw]">

            <div class="w-full  text-center border-2 border-white p-5 shadow-2xl">
                <p class="text-white italic text-3xl font-bold">{{ this.chronometerDisplay }}</p>

            </div>
            <div class="w-full text-center mt-2 mb-2">
                <button id="play" v-bind:class="this.classButton" @click="chronometerPlay()"
                    :disabled="this.buttonDisabled">
                    <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                        <path d="M7 6v12l10-6z"></path>
                    </svg>
                    play
                </button>
                <button id="pause"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    @click="chronometerPause()">
                    <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M8 7h3v10H8zm5 0h3v10h-3z"></path>
                    </svg>
                    pause
                </button>
                <button
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    @click="chronometerStop()">
                    <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M7 7h10v10H7z"></path>
                    </svg>stop
                </button>
            </div>

            <table id="table-list" class="table-fixed hover:table-fixed w-full">
                <thead>
                    <tr>
                        <th class="border-2 p-2">Id</th>
                        <th class="border-2 p-2">Timer</th>
                        <th class="border-2 p-2">createAt</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>

        </div>

    </div>
</template>
<script>

export default {
    name: "timer-component",
    data() {
        return {
            hours: `00`,
            minutes: `00`,
            seconds: `00`,
            chronometerDisplay: '00:00:00',
            chronometerCall: '',
            divPlay: '',
            buttonDisabled: false,
            classButton: 'focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
            classButtonDisabled: 'py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
            countItem: 0,

        }
    },
    mounted() {
        console.log("Component mounted.");
    },
    methods: {
        chronometer() {

            this.seconds++

            if (this.seconds < 10) this.seconds = `0` + this.seconds

            if (this.seconds > 59) {
                this.seconds = `00`
                this.minutes++

                if (this.minutes < 10) this.minutes = `0` + this.minutes
            }

            if (this.minutes > 59) {
                this.minutes = `00`
                this.hours++

                if (this.hours < 10) this.hours = `0` + this.hours
            }

            this.chronometerDisplay = `${this.hours}:${this.minutes}:${this.seconds}`

        },

        chronometerPlay() {
            this.stateButton()

            this.chronometerCall = setInterval(this.chronometer, 1000);
        },

        chronometerPause() {
            this.stateButton()
            clearInterval(this.chronometerCall)

        },
        chronometerStop() {
            try {

                clearInterval(this.chronometerCall)
                this.addRecordToList(this.chronometerDisplay)
                this.stateButton()

                this.chronometerDisplay = `00:00:00`
                this.hours = `00`,
                    this.minutes = `00`,
                    this.seconds = `00`

            } catch (error) {
                console.log(error)

            }

        },

        addRecordToList(record) {
            const tableList = document.getElementById('table-list')
            this.countItem += 1
            const createAt = this.formatDateNow()
            const itemList = [this.countItem, record, createAt]

            let row = tableList.querySelector('tbody').insertRow();

            for (let i = 0; i < itemList.length; i++) {
                console.log(itemList[i])
                var cell = row.insertCell(i)
                cell.innerHTML = itemList[i];
                cell.classList.add('border-2', 'p-2');
            }


        },
        formatDateNow() {
            var formatDateNow = new Date();
            var day = formatDateNow.getDate();
            var month = formatDateNow.getMonth() + 1;
            var year = formatDateNow.getFullYear();
            var hour = formatDateNow.getHours();
            var minute = formatDateNow.getMinutes();
            var second = formatDateNow.getSeconds();
            // Format "dd/mm/yyyy hh:mm:ss"
            return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year} ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
        },

        stateButton() {
            if (this.buttonDisabled) {
                this.buttonDisabled = false
                this.classButton = this.classButton

            } else {
                this.buttonDisabled = true
                this.classButton = 'py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'

            }
        }
    },
};
</script>
