<template>
  <section>
    <div class="">
      <div class="flex justify-center lg:justify-start ">
        <label v-if="(isSubscription == 1)" for="my-modal-3" class="btn bg-blue-500 btn-circle">
          <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
        </label>
      </div>

      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal overflow-auto" id="form">
        <div class="mt-8 lg:w-[40%] w-full p-3 lg:m-auto ml-3 bg-white rounded-lg m-auto ">
          <form>
            <h1 class="
                text-center
                bg-blue-600
                text-white
                rounded
                p-2
                mb-1
                text-lg
              ">
              CREATE JOB
            </h1>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="job-title" class="
                    font-semibold
                    block
                    mb-1
                    text-sm text-gray-900
                    dark:text-gray-300
                  ">Job Title</label>
                <input v-model="jobTitle" type="text" id="job-title" class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block
                    w-full
                    p-1.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  " placeholder="Web Developer" required="" />
                <span class="text-red-500 text-sm animate__animated animate__shakeX"
                  v-if="(!validationFiveWords(jobTitle) && isClikcAdd)">Please Input
                  Job Title</span>
              </div>

              <div>
                <label for="job-location" class="
                    font-semibold
                    block
                    mb-1
                    text-sm text-gray-900
                    dark:text-gray-300
                  ">Job Location</label>
                <input v-model="jobLocation" type="text" id="job-location" class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block
                    w-full
                    p-1.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  " placeholder="Phnom Penh or Province" required="" />
                <span class="text-red-500 text-sm animate__animated animate__shakeX"
                  v-if="(!validationFiveWords(jobLocation) && isClikcAdd)">Please Input
                  contactEmail</span>
              </div>

              <div>
                <label for="job-type" class="
                    font-semibold
                    block
                    mb-1
                    text-sm text-gray-900
                    dark:text-gray-300
                  ">Job Type</label>
                <select v-model="jobType" id="job-type" class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block
                    w-full
                    p-1.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  " placeholder="Flowbite" required="">
                  <option disabled>Job Type</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Training Workshop">Training Workshop</option>
                </select>
                <span class="text-red-500 text-sm animate__animated animate__shakeX"
                  v-if="(!validationFiveWords(jobType) && isClikcAdd)">Please Input
                  Job Type</span>

              </div>

              <div>
                <label for="closing-date" class="
                    font-semibold
                    block
                    mb-1
                    text-sm text-gray-900
                    dark:text-gray-300
                  ">Job Closing Date</label>
                <input v-model="jobClosedate" type="date" id="closing-date" class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block
                    w-full
                    p-1.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  " required="" />
              </div>

              <div>
                <label for="salary" class="
                    font-semibold
                    block
                    mb-1
                    text-sm text-gray-900
                    dark:text-gray-300
                  ">Salary(per month)</label>
                <input v-model="salary" type="number" id="salary" class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block
                    w-full
                    p-1.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  " placeholder="Salary" />
                <span class="text-sm text-red-500" v-if="(salary < 100 && isClikcAdd)">Please Input Salary</span>
              </div>

              <div>
                <label for="contact-name" class="
                    font-semibold
                    block
                    mb-1
                    text-sm text-gray-900
                    dark:text-gray-300
                  ">Contact Name</label>
                <input v-model="contactName" type="text" id="contact-name" class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block
                    w-full
                    p-1.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  " placeholder="Name" required="" />
                <span class="text-red-500 text-sm animate__animated animate__shakeX"
                  v-if="(!validationFiveWords(jobType) && isClikcAdd)">Please Input
                  Contact Name</span>
              </div>

              <div>
                <label for="contact-email" class="
                    font-semibold
                    block
                    mb-1
                    text-sm text-gray-900
                    dark:text-gray-300
                  ">Contact Email</label>
                <input v-model="contactEmail" type="email" id="contact-email" class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block
                    w-full
                    p-1.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  " placeholder="Email" />
                <span class="text-red-500 text-sm animate__animated animate__shakeX"
                  v-if="(!validationTenWords(contactEmail) && isClikcAdd)">Please Input
                  contactEmail</span>
              </div>

              <div>
                <label for="company-name" class="
                    font-semibold
                    block
                    mb-1
                    text-sm text-gray-900
                    dark:text-gray-300
                  ">Company Name</label>
                <input v-model="companyName" type="text" id="company-name" class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block
                    w-full
                    p-1.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  " placeholder="Company Name" />
                <span class="text-red-500 text-sm animate__animated animate__shakeX"
                  v-if="(!validationFiveWords(companyName) && isClikcAdd)">Please Input
                  Company Name</span>
              </div>
            </div>

            <div class="grid w-full gap-4 mb-6 grid-cols-1">
              <div class="mb-1 w-full">
                <label for="jobAddress" class="
                    font-semibold
                    block
                    mb-1
                    text-sm text-gray-900
                    dark:text-gray-300
                  ">Company Address</label>
                <textarea v-model="companyAddress" name="" cols="30" class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block
                    w-full
                    p-1.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  " placeholder="Job Address" required="">
                </textarea>
                <span class="text-red-500 text-sm animate__animated animate__shakeX"
                  v-if="(!validationTenWords(companyAddress) && isClikcAdd)">Please Input
                  Company Name</span>
              </div>

              <div class="mb-1 w-full">
                <label for="job-description" class="
                    font-semibold
                    block
                    mb-1
                    text-sm text-gray-900
                    dark:text-gray-300
                  ">Job Description</label>
                <textarea v-model="jobDescription" name="" cols="30" class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block
                    w-full
                    p-1.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  " placeholder="Job Description" required="">
                </textarea>
                <span class="text-red-500 text-sm animate__animated animate__shakeX"
                  v-if="(!validationTenWords(jobDescription) && isClikcAdd)">Please Input
                  Job Description</span>
              </div>

              <div class="mb-1">
                <label for="job-requirement" class="
                    font-semibold
                    block
                    mb-1
                    text-sm text-gray-900
                    dark:text-gray-300
                  ">Job Requirement</label>
                <textarea v-model="jobRequirement" name="" cols="30" class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block
                    w-full
                    p-1.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  " placeholder="Job Requirement" required="">
                </textarea>
                <span class="text-red-500 text-sm animate__animated animate__shakeX"
                  v-if="(!validationTenWords(jobRequirement) && isClikcAdd)">Please Input
                  Job Requirement</span>
              </div>

              <div class="grid gap-12 grid-cols-2">
                <div class="modal-action">
                  <label for="my-modal-3" class="
                      text-white
                      w-full
                      bg-blue-700
                      hover:bg-blue-800
                      focus:ring-4 focus:outline-none focus:ring-blue-300
                      font-medium
                      rounded
                      text-sm
                      sm:m-auto
                      px-5
                      py-2.5
                      text-center
                      dark:bg-blue-600
                      dark:hover:bg-blue-700
                      dark:focus:ring-blue-800
                    ">Cancel</label>
                </div>

                <div class="modal-action cursor-pointer">
                  <label @click="postJob" class="
                      text-white
                      w-full
                      bg-blue-700
                      hover:bg-blue-800
                      focus:ring-4 focus:outline-none focus:ring-blue-300
                      font-medium
                      rounded
                      text-sm
                      sm:m-auto
                      px-5
                      py-2.5
                      text-center
                      dark:bg-blue-600
                      dark:hover:bg-blue-700
                      dark:focus:ring-blue-800
                      cursor-pointer
                    ">Add</label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      isClikcAdd: false,
      userId: localStorage.getItem("userId"),
      jobTitle: "",
      jobLocation: "",
      jobType: "",
      jobClosedate: "",
      companyName: "",
      salary: "",
      contactName: "",
      contactEmail: "",
      companyAddress: "",
      jobDescription: "",
      jobRequirement: "",
      expire_date: null,
      isDeadline: false,
      startDay: "",
      endDay: "",
      currentDate: null,
      lastDate: null,
      startDate: null,
      postDate: null,
      endDate: null,
      sumDate: null,
      duration: 7,
      disappearDate: null,
      role: localStorage.getItem("role"),
      id: localStorage.getItem("userId"),
      job: localStorage.getItem("jobId"),
      subscription: localStorage.getItem("subscription"),
      isSubscription: 0,

    };
  },

  methods: {

    postJob() {
      this.isClikcAdd = true;
      if (this.validationTenWords(this.jobDescription) && this.validationFiveWords(this.jobLocation) && this.validationFiveWords(this.contactName) && this.validationFiveWords(this.jobType) &&
        this.validationFiveWords(this.jobTitle) && this.validationTenWords(this.companyAddress) && this.validationTenWords(this.jobRequirement) &&
        this.validationTenWords(this.contactEmail) && this.salary > 100) {
        axios.post("http//127.0.0.1:8000/api/jobposter/", {
          user_id: localStorage.getItem("userId"),
          job_title: this.jobTitle,
          company_location: this.jobLocation,
          job_type: this.jobType,
          job_closedate: this.jobClosedate,
          company_name: this.companyName,
          salary: this.salary,
          contact_name: this.contactName,
          contact_email: this.contactEmail,
          job_description: this.jobDescription,
          company_address: this.companyAddress,
          job_requirement: this.jobRequirement,
        }).then((res) => {
          if (res.data.msg == 'job posted') {
            this.jobTitle = "";
            this.jobLocation = "";
            this.jobType = "";
            this.jobClosedate = "";
            this.companyName = "";
            this.salary = "";
            this.contactName = "";
            this.contactEmail = "";
            this.companyAddress = "";
            this.jobDescription = "";
            this.jobRequirement = "";
            Swal.fire(
              'Job Posted!',
              // 'You clicked the button!',
              'success'
            )
            // document.getElementById("form").style.display = 'none';
            this.$router.go();
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Failed to posted job',
              text: res.data.msg,
            })
          }
        }).catch((err) => {
          this.jobTitle = "";
          this.jobLocation = "";
          this.jobType = "";
          this.jobClosedate = "";
          this.companyName = "";
          this.salary = "";
          this.contactName = "";
          this.contactEmail = "";
          this.companyAddress = "";
          this.jobDescription = "";
          this.jobRequirement = "";
          Swal.fire({
            icon: 'error',
            title: 'Failed to posted job',
            text: err.data,
          })
        })
      } else {
        this.validationTenWords(this.jobDescription)
        this.validationFiveWords(this.jobLocation)
        this.validationFiveWords(this.contactName)
        this.validationFiveWords(this.jobType)
        this.validationFiveWords(this.jobTitle)
        this.validationTenWords(this.companyAddress)
        this.validationTenWords(this.jobRequirement)
        this.validationTenWords(this.contactEmail)
      }
    },

    get_current_user_subscription() {
      axios.get("http://54.169.143.212/api/current_scubscribe/" + localStorage.getItem("userId")).then((res) => {
        this.isSubscription = res.data;
      })
    },

    validationTenWords(value) {
      if (value.length > 9) {
        return true;
      }
      return false;
    },

    validationFiveWords(value) {
      if (value.length > 2) {
        return true;
      }
      return false;
    }
  },

  mounted() {
    if (localStorage.getItem('role') != "Admine") {
      this.get_current_user_subscription()
    }
  }

};
</script>
<style scoped>

</style>>
