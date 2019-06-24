// import PDFDocument from "pdfkit";
const api = "http://localhost:3001";
let FormData = require('form-data');

export default {
  name: "FormPage",
  data() {

    return {
      json: {},
      step: "step1",
      path: ['step1'],
      html: '',
      responses: {},
      form: {
        fname: "",
        lname: "",
        report: [
          { text2: "There are explanations for symptoms", value2: "No" },
          { text3: "Access and manage acute physical condition", value3: "No" },
          {
            text4:
              "DEMENTIA, DEPRESSION, DRUG/ALCOHOL INTOXICATION OR WITHDRAWAL suspected",
            value4: "No"
          },
          { text5: "Acute Manic Episode", value5: "No" },
          { text6: "BIPLAR DISORDER manic episode", value6: "No" },
          { text7: "Does the person have psychosis?", value7: "No" },
          {
            text8:
              "Consultation with specialist to review other possible causes",
            value8: "No"
          },
          { text9: "Pyschosis is likely", value9: "No" }
        ]
      }
    };
  },
  mounted() {
    console.log("A1");
    console.log(this);
    let that = this;
    fetch('./mhgsteps.json')
      .then(res => res.json())
      .then(res => { console.log(JSON.stringify(res)); return res; })
      .then(res => {
        console.log("A2");
        console.log(res);
        console.log(that);
        that.json = res;
      });
  },
  methods: {
    recordAnswer(answer) {
      this.responses[this.step] = answer;
      console.log(this.responses);
    },
    changeStep(newStep, json) {
      console.log(json[this.step]['nextTrue'])
      this.path.push(newStep)
      console.log(this.path);
      this.step = newStep;
    },
    previous() {
      let last = this.path[this.path.length - 2];
      //console.log(last)
      this.path.pop(last);
      delete this.responses[last];
      console.log(this.responses)
      if (this.step === 'step1') {
        console.log(this.step);
        this.step = 'step1';
      }
      else { this.step = last; }
    },
    fillHtml() {
      if (this.step === 'step7' || 'step5') {
        this.html = this.json[this.step]['html']
        return true;
      }
    },
    loadData() {
      console.log(step);
      console.log(this);
      let that = this;
      fetch('./mhgsteps.json')
        .then(res => res.json())
        .then(res => { console.log(JSON.stringify(res)); return res; })
        .then(res => {
          console.log(step);
          console.log(res);
          console.log(that);
          that.json = res;
        });
    },
    submit() {
      if (this.json[this.step]['next'] === "submit") {
        alert('Submitting...')
        var formData = new FormData("FormPage");
        fetch(`${api}/submit`, {
          method: 'POST',
          headers: {
            Accept: "application/json",
          },
          body: formData
        })
          .then(res => res.json())
          .then(res => console.log('Success:', JSON.stringify(res)))
          .then(console.log("Submitted!"));
      }
      else {
        changeStep(json[this.step]['nextTrue'], json)
      }
    }
  }
}
