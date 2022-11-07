<template>
  <base-dialog v-if="isInvalid" title="invalid form" @close="confirmError">
  <template #default>
      <p>input is invalid</p>
      <p>please check values before enter</p>
    </template>
    <template #actions>
      <button @click="confirmError">Okay</button>
    </template>
  </base-dialog>

  <submission v-if="submissioon" title="submitted Sucessfully" @close="submisionStatus">
    <template #default>
      <p>Submitted Successfully</p>
      <p>Thankyou...!</p>
    </template>
    <template #actions>
      <button @click="submisionStatus">Okay</button>
    </template>
  </submission>

  <form @submit.prevent="submit">
    <div class="form-control">
      <label for="user-name">Your Name</label>
      <input v-model="userName" id="user-name" name="user-name" type="text" />
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input v-model="userAge" id="age" name="age" type="number" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select v-model="select" id="referrer" name="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input v-model="interest" value="news" id="interest-news" name="interest" type="checkbox" />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input v-model="interest" value="tutorials" id="interest-tutorials" name="interest" type="checkbox" />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input v-model="interest" value="nothing" id="interest-nothing" name="interest" type="checkbox" />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" v-model="how" name="how" type="radio" value="video" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" v-model="how" name="how" type="radio" value="blogs"/>
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" v-model="how" name="how" type="radio" value="other" />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div>
      <input type="checkbox" id="confirm-terms" name="confirm-terms" v-model="confirm">
      <label for="confirm-terms">Agree to terms of use ?</label>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>

export default {
  data() {
    return {
      userName : "",
      userAge: " ",
      select: null,
      interest: [],
      how: null,
      confirm: false,
      isInvalid: false,
      submissioon: false
    }
  },
  methods: {
    submit() {
      if(!this.userName || !this.userAge || !this.select || !this.interest || !this.how || this.confirm === false){
        this.isInvalid = true
      }else{
        console.log(this.userName)
        console.log(this.userAge)
        console.log("select" + this.select)
        console.log(this.interest)
        console.log(this.how)
        console.log(this.confirm)
        this.userName = ""
        this.userAge = ""
        this.select = null
        this.interest = []
        this.how = null
        this.confirm = false
        this.isInvalid = false
        this.submissioon = true
      }
      
    },
    confirmError(){
      this.isInvalid = false
    },
    submisionStatus(){
      this.submissioon = false
    }
  }
} 

</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>