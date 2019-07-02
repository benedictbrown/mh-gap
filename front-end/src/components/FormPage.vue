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
          />
        </div>
        <br />
        <div>
          <input
            id="lname"
            type="text"
            name="lname"
            v-model="form.lname"
            label="Last Name"
            placeholder="Last Name"
          />
        </div>
        <div style="float:right;">
          <button
            class="navigate"
            @click.prevent="save('yes'),changeStep(json[step]['nextTrue'],json)"
          >Next</button>
        </div>
      </div>
      <div v-if="(step !=='step1'&& step !=='step10')">
        <h1 text-align:center>Patient Diagnosis</h1>
        <br />
        <button v-if="(step !=='step2')" style="float:right;" @click.prevent="summary()">Summary</button>
        <br />
        <br />
        <h2>{{json[step]['questions'][0]}}</h2>
        <div v-if="fillHtml()">
          <ul v-html="html"></ul>
        </div>
        <div>
          <p v-for="item in json[step]['tips']">{{item}}</p>
          <div>
            <div v-if="json[step]['next']=== 'submit'">
              <p>click proceed to submit</p>
              <button @click.prevent="changeStep('step10',json)">Proceed</button>
            </div>
            <button
              v-if="json[step]['willProceed']"
              @click.prevent="changeStep(json[step]['nextTrue'],json)"
            >Proceed</button>
            <button
              v-if="json[step]['yesButton']"
              @click.prevent="recordAnswer(' yes');changeStep(json[step]['nextTrue'],json), save(' yes')"
            >Yes</button>

            <br />
            <br />
            <button
              v-if="json[step]['noButton']"
              @click.prevent="recordAnswer(' no');changeStep(json[step]['nextFalse'],json),save(' no')"
            >No</button>
            <br />
          </div>
        </div>
        <br />
        <button
          v-if="json[step]['previousButton']"
          style="float:right;"
          @click.prevent="previous()"
        >Previous</button>
      </div>
    </b-form>
    <br />
    <div id="summary" v-show="step === 'step10'">
      <h1 text-align:center>Patient Summary</h1>
      <h2>{{patientName}}</h2>
      <div>
        <ul>
          <li>Patient Name:{{patientSummary.name}}</li>
          <li>Date: {{ patientSummary.date }}</li>
          <li>Examiner Name: {{ patientSummary.examiner }}</li>
          <li>Results:</li>
          <ul>
            <li>{{ sumString }}</li>
          </ul>
        </ul>
      </div>
      <button
        style="float:right;"
        @click.prevent="previous()"
      >Previous</button>
      <br />
      <br />
      <div>
        <p>Please click to email patient results.</p>
        <button style="float:left;" @click.prevent="email()">Send Results</button>
      </div>
      <br />
      <br />
      <br />
      <div>
        <p>When you are done reviewing the patient summary and emailing, please click to submit.</p>
        <button style="float:left;" @click.prevent="submit()">Submit</button>
      </div>
      <br />
      <div></div>
    </div>
  </div>
</template>

<script src="./Form.js">
/* eslint-disable no-console */
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
