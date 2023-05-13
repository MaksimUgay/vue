const app = {
    data() {
        return {
            player:'',
            category: '',
            dota: [],
            rust: [],
            csgo: [],
            inputError: '',
            categoryError: '',
        }
    },

    methods: {
        addPlayer() {
            try {
                if (this.player.length > 1 && this.category == 'Rust') {
                    this.rust.push(this.player)
                    this.player = ''
                    this.inputError = ''
                    this.categoryError = ''
                } else if (this.player.length > 1 && this.category == 'Dota' && this.dota.length < 5) {
                    this.dota.push(this.player)
                    this.player = ''
                    this.inputError = ''
                    this.categoryError = ''
                } else if (this.player.length > 1 && this.category == 'CS:GO' && this.csgo.length < 5) {
                    this.csgo.push(this.player)
                    this.player = ''
                    this.inputError = ''
                    this.categoryError = ''
                } else if (this.player.length < 2) {
                    this.inputError = 'Минимальная длина ника - 2 символа'
                } else if (this.category < 4) {
                    this.categoryError = 'Вы не выбрали категорию!'
                }
            } catch (error) {
                console.error(error)
            }
        }
    }
}

Vue.createApp(app).mount('#app')