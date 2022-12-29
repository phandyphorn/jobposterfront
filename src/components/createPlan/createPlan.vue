<template>
    <div class="lg:w-3/5  m-auto grid mt-10 bg-gray-200 gap-y-5 p-6 rounded-md w-full">
        <p class="bg-green-500 rounded-md  text-white text-center text-sm animate__bounceIn animate__animated"
            v-if="if_success">Plan
            Created success
        </p>
        <p class="bg-red-500 rounded-md  text-white text-center text-sm animate__bounceIn animate__animated"
            v-if="if_failed">You need to compelte all Fill !
        </p>
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-3 ">
            <div class=" ">
                <p>Plan Name</p>
                <input type="text" class="w-full p-3 rounded-md" v-model="planeName" placeholder="Plan Name...">
            </div>
            <div class="w-full">
                <p>Plan Price</p>
                <input type="number" class="w-full p-3 rounded-md" v-model="planePrice" placeholder="Plan Price...">
            </div>
            <div class="w-full">
                <p>Plan Quoata</p>
                <input type="number" class="w-full p-3 rounded-md" v-model="quoata" placeholder="Plan Quoata...">
            </div>
            <div class="w-full">
                <p>Plan Grace Days </p>
                <input type="number" class="w-full p-3 rounded-md" v-model="grace_days" placeholder="Plan Benefits...">
            </div>
            <div class="w-full">
                <p>Plan Periodicity </p>
                <input type="number" class="w-full p-3 rounded-md" v-model="periodicity" placeholder="Plan Benefits...">
            </div>
            <div class="w-full">
                <p>Plan Consumable (1=can & 0=can't)</p>
                <input type="number" class="w-full p-3 rounded-md" v-model="consumable"
                    placeholder="Plan Consumable...">
            </div>
            <div class="w-full">
                <p>Plan Benifits</p>
                <input type="text" class="w-full p-3 rounded-md" v-model="planBenifits" placeholder="Plan Benefits...">

            </div>
            <div class="w-full">
                <p>Plan Charges</p>
                <input type="text" class="w-full p-3 rounded-md" v-model="charges" placeholder="Plan charges...">

            </div>
        </div>
        <div class="flex justify-between">
            <button class="p-3 bg-blue-400 rounded-md text-white" @click="createNewPlan">Create Plan</button>
            <router-link to="/subscribe">
                <button class="p-3 bg-blue-400 rounded-md text-white">Back</button>
            </router-link>
        </div>
    </div>
</template>


<script>
import axios from "axios";
export default {
    data() {
        return {
            periodicity: 0,
            quoata: 0,
            consumable: 0,
            grace_days: 0,
            planeName: '',
            planePrice: 0,
            planBenifits: '',
            charges: 0,
            if_success: false,
            if_failed: false,
        }
    },

    methods: {
        createNewPlan() {
            var plan_info = {
                grace_days: this.grace_days,
                name: this.planeName,
                benifits: this.planBenifits,
                periodicity: this.periodicity,
                price: this.planePrice,
                quota: this.quoata,
                consumable: this.consumable,
                charges: this.charges,
            }
            axios.post("http://52.221.224.24/api/newPlane", plan_info).then((res) => {
                console.log(res.data);
                if (res.data.msg == 'plan created') {
                    this.if_failed = false;
                    this.if_success = true;
                }
            }).catch((err) => {
                console.log(err);
                this.if_success = false;
                this.if_failed = true;
            })
        }
    }
}
</script>
