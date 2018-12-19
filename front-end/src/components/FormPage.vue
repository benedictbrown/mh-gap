<template>
  <div id="FormPage">
    <b-form action="/submit" enctype="multipart/form-data">
      <b-form-group id="registration" v-show="step === 1">
        <h1>Patient Registration</h1>
        <legend>Patient Name</legend>
        <b-form-input id="fname" 
                      type="text" 
                      required
                      name="fname" 
                      v-model="form.fname"
                      label="First Name"
                      placeholder="Enter First Name">
        </b-form-input>
        <b-form-input id="lname" 
                      type="text"
                      required 
                      name="lname" 
                      v-model="form.lname"
                      label="Last Name"
                      placeholder="Last Name">

        </b-form-input>
        <div style="float:right;">
          <button class="navigate" @click.prevent="next(2)">Next</button>
        </div>
      </b-form-group>
      <div v-show="step !==1">
        <h1 text-align:center>Patient Diagnosis</h1>
        <br>
      </div>
      <div v-show="step === 2">
        <h2>Are there any other explanations for the symptoms?</h2>
        <div>
          <p>
            Assess signs and symptoms of delirium due to an acute physical condition, e.g. infection, celebral malaria, dehydration, metabolic abnormalities (such as hypoglycaemia or hyponatraemia); or medication side effects, e.g. due to some antimalarial
            medication or steroids.
          </p>
          <div>
            <button @click.prevent="next(3)">Yes</button>
            <br>
            <br>
            <button @click.prevent="next(4)">No</button>
            <br>
          </div>
        </div>
        <br>
        <button align="right" @click.prevent="prev(1)">Previous</button>
      </div>

      <div v-show="step === 3">
        <p>Assess and manage the acute physical condition, and refer to emergency services/specialist as needed.</p>
        <button @click.prevent="prev(2)">Previous</button>
        <br>
        <button align="right" @click.prevent="submit()">Proceed</button>
      </div>

      <div v-show="step === 4">
        <p>Is DEMENTIA, DEPRESSION, DRUG/ALCOHOL INTOXICATION OR WITHDRAWAL suspected?</p>
        <p>If that is the case, please consult a Mental Health Specialist</p>
        <button @click.prevent="prev(2)">Previous</button>
        <button @click.prevent="next(5)">Proceed</button>
      </div>

      <div v-show="step === 5">
        <h2>Is the person having an acute manic episode?</h2>
        <div>Have several of the following symptoms occurred simultaneously, lasting for at least 1 week, and severely enough to interfere significantly with work and social activities or requiring confinement or hospitalization:
          <br>
          <ul>
            <li>Elevated or irritable mood</li>
            <li>Decreased need for sleep</li>
            <li>Increased activity, feeling of increased energy, increased talkativeness or rapid speech</li>
            <li>Loss of normal social inhibitions such as sexual indiscretion</li>
            <li>Impulsive or reckless behaviours such as excessive spending, making imp</li>
            <li>Being easily distracted</li>
            <li>Unrealistically inflated self-esteem</li>
          </ul>
        </div>
        <div>
          <button @click.prevent="next(6)">Yes</button>
          <br>
          <button @click.prevent="next(7)">No</button>
          <br>
        </div>

        <button @click.prevent="prev(4)">Previous</button>
      </div>

      <div v-show="step === 6">
        <p>BIPOLAR DISORDER manic episode is likely</p>
        <p>Go to Protocol 1 (Manic episode in Bipolar disorder</p>
        <p>Click "Proceed" to submit this report</p>
        <button @click.prevent="prev(5)">Previous</button>
        <button @click.prevent="submit()">Proceed</button>
      </div>

      <div v-show="step === 7">
        <h2>Does the person have psychosis?</h2>
        <div>Does the person have at least two of the following:
          <br>
          <ul>
            <li>Delusions, fixed false beliefs not shared by others in the person’s culture</li>
            <li>Hallucinations, hearing voices or seeing things that are not there</li>
            <li>Disorganized speech and/or behaviour, e.g. incoherent/irrelevant speech such as mumbling or laughing to self, strange appearance, signs of self-neglect or appearing unkempt</li>
          </ul>
        </div>
        <div>
          <button @click.prevent="next(9)">Yes</button>
          <br>
          <button @click.prevent="next(8)">No</button>
          <br>
        </div>

        <button @click.prevent="prev(5)">Previous</button>
      </div>

      <div v-show="step === 8">
        <p>Consider consultation with specialist to review other possible causes of psychoses.</p>
        <p>Go to Protocol 2 (Psychosis)</p>
        <button @click.prevent="prev(7)">Previous</button>
        <button @click.prevent="submit()">Proceed</button>
      </div>

      <div v-show="step === 9">
        <p>PSYCHOSIS is likely</p>
        <p>Go to Protocol 2 (Psychosis)</p>
        <button @click.prevent="prev(7)">Previous</button>
        <button @click.prevent="submit()">Proceed</button>
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
