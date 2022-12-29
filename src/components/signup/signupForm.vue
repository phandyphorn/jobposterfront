<template>
    <div class="animate__zoomIn animate__animated">
        <form id="app" @submit.prevent="handleFormSubmit"
            class="bg-gray-100 shadow-2xl md:w-[80%] lg:w-[50%] w-full m-auto mt-20 rounded px-8 pt-6 pb-8 mb-4">
            <p v-if="verifyEmail"
                class="rounded bg-green-500 text-white animate__animated animate__bounce flex text-center w-full">
                Please check your
                email account to verify email before login </p>
            <span class="text-light-600 font-sans flex justify-center items-center mb-5 font-bold">REGISTER</span>
            <div class="mb-2 w-full grid grid-cols-2">
                <div class="flex flex-col w-full">
                    <input type="text" placeholder="FullName"
                        class="peer shadow appearance-none border mr-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="fullName" required>
                </div>

                <div class="flex flex-col w-full">
                    <select v-model="gender" id="job-type"
                        class="peer shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required="">
                        <option selected>Gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </div>
            </div>

            <div class="grid w-full gap-4 mb-2 grid-cols-1">
                <div class="w-full">
                    <input required type="email" placeholder="Email"
                        class="peer shadow appearance-none border mr-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="emailUser">
                </div>
            </div>


            <div class="mb-2 w-full grid grid-cols-2">
                <div class="flex flex-col mb-2 w-full">
                    <div class="relative">
                        <input placeholder="Password" :type="showPass ? 'text' : 'password'"
                            class="peer shadow appearance-none border mr-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            v-model="passwordUser">
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                            <svg class="h-5 w-5 text-black" @click="showPass = !showPass" width="24" height="24"
                                viewBox="0 0 24 24" :class="{ 'hidden': !showPass, 'block': showPass }" stroke-width="2"
                                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="2" />
                                <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                                <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                            </svg>


                            <svg class="h-5 w-5 text-black" @click="showPass = !showPass" fill="none"
                                viewBox="0 0 24 24" :class="{ 'block': !showPass, 'hidden': showPass }"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                            </svg>
                        </div>
                    </div>
                </div>


                <div class="flex flex-col w-full">
                    <div class="relative">
                        <input placeholder="Confirm Password" :type="showConfirmPassword ? 'text' : 'password'"
                            class="peer shadow appearance-none border mr-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            v-model="passwordUserConfirm">
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">

                            <svg class="h-5 w-5 text-black" @click="showConfirmPassword = !showConfirmPassword"
                                width="24" height="24" viewBox="0 0 24 24"
                                :class="{ 'hidden': !showConfirmPassword, 'block': showConfirmPassword }"
                                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="2" />
                                <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                                <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                            </svg>


                            <svg class="h-5 w-5 text-black" @click="showConfirmPassword = !showConfirmPassword"
                                fill="none" viewBox="0 0 24 24"
                                :class="{ 'block': !showConfirmPassword, 'hidden': showConfirmPassword }"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                            </svg>
                        </div>
                    </div>
                </div>


            </div>

            <div
                class="grid w-full items-center justify-between lg:grid-cols-3 md:grid-cols-1 md:w-full grid-cols-2 gap-2">
                <button class="bg-blue-600 rounded p-2 w-full text-white" @click="register">
                    Register
                </button>

                <button class="bg-blue-600 rounded p-2  w-full text-white" @click="registerByGoogle" type="button">
                    Register Via Google
                </button>

                <button class="bg-blue-600 rounded p-2  w-full text-white" type="button">
                    <router-link to="/login">
                        Back
                    </router-link>
                </button>
            </div>
        </form>
    </div>

    <!-- <div class="bg-gray w-full  mb-20">
        <div class="w-3/6 m-auto bg-gray-200 p-4 grid gap-y-4 rounded-md">
            <p class="text-lg font-bold">Hello !</p>
            <p class="text-sm">You are receiving this email because we received a password reset request for your
                account.</p>
            <button class="bg-gray-500 w-1/5 p-3 rounded-sm  m-auto text-white">Verify Email</button>
            <div class="  border-t-2 border-gray-500 mt-5"></div>
            <p class="text-gray-500 text-sm">If you're having trouble clicking the "Verify Email" button, copy and
                paste the URL below into your web browser: <a href="">dfsdf</a>
            </p>
        </div>
    </div> -->
</template>

<script>
import axios from "axios"
import { googleTokenLogin } from "vue3-google-login";
export default {
    data() {
        return {
            // ==========Register=======
            showPass: false,
            showConfirmPassword: false,
            fullName: '',
            emailUser: '',
            passwordUser: '',
            passwordUserConfirm: '',
            isFormComplete: false,
            passwordGoogle: '',
            fullNameGoogle: '',
            emailGoogle: '',
            gender: '',
            dataRegisterViaGoo: {},
            verifyEmail: false
        }
    },

    methods: {
        register() {
            if (!this.fullName.trim() == "" &&
                !this.emailUser.trim() == "" &&
                !this.passwordUser.trim() == "" &&
                !this.passwordUserConfirm.trim() == "" &&
                !this.gender.trim() == "" &&
                this.passwordUser == this.passwordUserConfirm) {
                let body = {
                    fullName: this.fullName,
                    role: this.role,
                    email: this.emailUser,
                    gender: this.gender,
                    password: this.passwordUser,
                }
                axios.post("http://52.221.224.24/api/register/", body)
                    .then(() => {
                        axios.post('http://52.221.224.24/api/registerEmail/' + this.emailUser)
                            .then(() => {
                                this.fullName = "";
                                this.emailUser = "";
                                this.passwordUser = "";
                                this.passwordUserConfirm = "";
                                this.gender = "";
                                this.verifyEmail = true;

                            })
                            .catch(error => {
                                console.log(error)
                            })
                    })
            }
        },

        registerByGoogle() {
            googleTokenLogin({ clientId: '353283530301-lgl6jhjvg6cr3foc30607b3omfqs2ste.apps.googleusercontent.com' }).then((response) => {
                var url = 'https://www.googleapis.com/oauth2/v3/userinfo?access_token=' + response.access_token;
                axios.get(url)
                    .then((res) => {
                        console.log(res.data)
                        this.fullNameGoogle = res.data.name;
                        this.emailGoogle = res.data.email;
                    })

                this.pass_show = true
            })
        },

        registerByGoogleLast() {
            this.dataRegisterViaGoo = {
                fullName: this.fullNameGoogle,
                email: this.emailGoogle,
                password: this.passwordGoogle
            }
            axios.post("http://52.221.224.24/api/register/", this.dataRegisterViaGoo)
                .then(() => {
                    axios.post('http://52.221.224.24/api/registerEmail/' + this.emailGoogle)
                        .then((res) => {
                            console.log(res.data);
                            this.emailGoogle = "";
                            this.verifyEmail = true;
                        })
                    this.pass_show = false;
                })
        },


    },

}
</script>

<style>

</style>