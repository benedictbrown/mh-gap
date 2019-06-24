<template>
  <div id="FormPage">
    <b-form action="/submit" enctype="multipart/form-data">
      <div id="registration" v-show="step === 'step1'">
        <h1>Patient Registration</h1>
        <h2>Patient Name</h2>
        <div>
          <input
            id="fname"
            type="text"
            name="fname"
            v-model="form.fname"
            label="First Name"
            placeholder="First Name"
          >
        </div>
        <br>
        <div>
          <input
            id="lname"
            type="text"
            name="lname"
            v-model="form.lname"
            label="Last Name"
            placeholder="Last Name"
          >
        </div>
        <div style="float:right;">
          <button class="navigate" @click.prevent="changeStep(json[step]['nextTrue'],json),fillHtml()">Next</button>
        </div>
      </div>
      <div v-show="step !=='step1'">
        <h1 text-align:center>Patient Diagnosis</h1>
        <br>
      </div>
      <div v-if="step !=='step1'">
        <h2>{{json[step]['questions'][0]}}</h2>
        <div v-if="fillHtml()">
          <ul v-html = "html"></ul>
        </div>
        
        <div>
          <p v-for="item in json[step]['tips']">{{item}}</p>
          <div>
            <div v-if="json[step]['next']=== 'submit'">
              <p>click proceed to submit</p>
              <button @click.prevent="submit()">Proceed</button>
            </div>
            <button
              v-if="json[step]['willProceed']"
              @click.prevent="changeStep(json[step]['nextTrue'],json)"
            >Proceed</button>
            <button
              v-if="json[step]['yesButton']"
              @click.prevent="recordAnswer('yes');changeStep(json[step]['nextTrue'],json)"
            >Yes</button>

            <br>
            <br>
            <button
              v-if="json[step]['noButton']"
              @click.prevent="recordAnswer('no');changeStep(json[step]['nextFalse'],json)"
            >No</button>
            <br>
          </div>
        </div>
        <br>
        <button
          v-if="json[step]['previousButton']"
          style="float:right;"
          @click.prevent="previous()"
        >Previous</button>
      </div>
    </b-form>
    <br>
  </div>
</template>

<script src="./Form.js">
</script>

<style>
h1 {
  text-align: center;
}

input {
  width: 80%;
  padding: 1.5% 4%;
  font-size: 17px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  border: 1px solid #aaaaaa;
}

button {
  background-color: #ffdddd;
  color: #1f1c1c;
  border: 1px;
  padding: 8px 16px;
  font-size: 17px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  cursor: pointer;
}
</style>
