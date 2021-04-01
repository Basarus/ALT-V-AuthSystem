var app = new Vue({
    el: '#app',
    data() {
        return {
        page: 'Регистрация',
        pageList: ['Авторизация', 'Регистрация', 'Восстановление']
        }
    },
    watch: {

    },
    methods: {
        handleClick(page){
            let login, email, pass, re_pass;
            if (document.getElementById('login').value) login = document.getElementById('login').value;
            if (document.getElementById('email').value) email = document.getElementById('email').value;
            if (document.getElementById('pass').value) pass = document.getElementById('pass').value;
            if (document.getElementById('re_pass').value) re_pass = document.getElementById('re_pass').value;

            switch (page) {
                case 'Авторизация':
                    if ('alt' in window) {
                        alt.emit('cef::auth:authorization', { login, pass })
                    }
                    break;
                case 'Регистрация':
                    if ('alt' in window) {
                        alt.emit('cef::auth:registration', { login, email, pass, re_pass })
                    }
                    break;
                case 'Восстановление':
                    if ('alt' in window) {
                        alt.emit('cef::auth:recovery', {email })
                    }
                    this.page = 'Авторизация';
                    break;
            }
        }
    }
})