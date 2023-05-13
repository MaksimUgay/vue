const app = {
    data() {
        return {
            num: '',
            holder: 'Введите число',
            arr: [`green`, `red` , `orange`],
        }
    },
    
    methods: {
        changeColor(col) {
            this.$refs.text.style.background = col
        },
        
    }
}

Vue.createApp(app).mount('#app');