import { defineStore } from "pinia";
import axios from 'axios'
import { useRouter } from 'vue-router';
export const authUserStore = defineStore({
    id: 'authUser',
    state: () => ({
        authUser: null,
        authToken: null,
        authErrors:[],
        errorMessage: ''
    }),
    getters: {
        getUser: (state) => state.authUser,
        getToken: (state) => state.authToken,
        getUserForm: (state) => state.userForm,
        getErrMsg: (state) => state.errorMessage,
        getErrors:(state)=>state.authErrors
    },
    actions: {
       
        async login(form) {
            //await this.getToken();

            await axios.post('http://127.0.0.1:8000/api/login', {
                email: form.value.email,
                password: form.value.password,
                remember: form.value.remember
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(
                (res) => {

                    this.authToken = res.data.token;
                    this.authUser = res.data.user;
                    this.router.push('/departments')

                }
            ).catch(error => {

                //console.log(error.response.data);
                this.errorMessage = error.response.data.message;
                //console.log(this.errorMessage);
                // if (error.response && error.response.data && error.response.data.error) {
                //     console.log('data:', error.response.data);
                //     if (error.response.data.invalidFields) {
                //         console.log('Campos no válidos:', error.response.data.invalidFields);
                //         // Handle specific error messages
                //         error.response.data.invalidFields.forEach(field => {
                //             switch (field) {
                //                 case 'password':
                //                     console.log('Contraseña y confirmación no coinciden');
                //                     // Implement logic to display this error to the user
                //                     break;

                //                 case 'password_confirmation':
                //                     console.log('Campo de confirmación de contraseña es requerido');
                //                     // Implement logic to display this error to the user
                //                     break;

                //                 case 'password_symbols':
                //                     console.log('La contraseña debe contener al menos un símbolo');
                //                     // Implement logic to display this error to the user
                //                     break;

                //                 // Add more cases for other specific errors

                //                 default:
                //                     console.log(`Error en el campo: ${field}`);
                //                     // Implement a generic message or additional handling
                //                     break;
                //             }
                //         });
                //     }
                // }
            })
        },
        async logout() {
            await axios.get('http://127.0.0.1:8000/api/auth/logout', this.authToken)
            this.authToken = null;
            this.authUser = null;
            this.router.push('/login');
        },
        async register(form) {
            await axios.post('http://127.0.0.1:8000/api/register', {
                name: form.value.name,
                lastName: form.value.lastName,
                email: form.value.email,
                password: form.value.password,
                password_confirmation: form.value.password_confirm
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(
                (response) => {
                     
                    this.router.push('/login');
                }).catch(error => {
                    //console.error('Error al registrar:', error.response.data);
                    if(error.response.status==422){
                        this.authErrors = error.response.data.message;
                    }
                    
                    console.error(this.authErrors)
                    // if (error.response && error.response.data && error.response.data.error) {
                    //     console.log('Error:', error.response.data.error);
                    //     console.log('Mensaje:', error.response.data.message);

                    //     if (error.response.data.invalidFields) {
                    //         console.log('Campos no válidos:', error.response.data.invalidFields);

                    //         // Handle specific error messages
                    //         error.response.data.invalidFields.forEach(field => {
                    //             switch (field) {
                    //                 case 'password':
                    //                     console.log('Contraseña y confirmación no coinciden');
                    //                     // Implement logic to display this error to the user
                    //                     break;

                    //                 case 'password_confirmation':
                    //                     console.log('Campo de confirmación de contraseña es requerido');
                    //                     // Implement logic to display this error to the user
                    //                     break;

                    //                 case 'password_symbols':
                    //                     console.log('La contraseña debe contener al menos un símbolo');
                    //                     // Implement logic to display this error to the user
                    //                     break;

                    //                 // Add more cases for other specific errors

                    //                 default:
                    //                     console.log(`Error en el campo: ${field}`);
                    //                     // Implement a generic message or additional handling
                    //                     break;
                    //             }
                    //         });
                    //     }
                    // }

                })
        }
    },
    persist: true
})
