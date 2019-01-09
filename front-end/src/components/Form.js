// import PDFDocument from "pdfkit";
const api = "http://localhost:3001";
var FormData = require("form-data");

export default {
  name: "FormPage",
  data() {
    return {
      step: 1,
      form: {
        fname: "",
        lname: "",
        report: [{
            text2: "There are explanations for symptoms",
            value2: "No"
          },
          {
            text3: "Access and manage acute physical condition",
            value3: "No"
          },
          {
            text4: "DEMENTIA, DEPRESSION, DRUG/ALCOHOL INTOXICATION OR WITHDRAWAL suspected",
            value4: "No"
          },
          {
            text5: "Acute Manic Episode",
            value5: "No"
          },
          {
            text6: "BIPLAR DISORDER manic episode",
            value6: "No"
          },
          {
            text7: "Does the person have psychosis?",
            value7: "No"
          },
          {
            text8: "Consultation with specialist to review other possible causes",
            value8: "No"
          },
          {
            text9: "Pyschosis is likely",
            value9: "No"
          }
        ]
      }
    };
  },
  methods: {
    prev(step) {
      this.step = step;
    },
    next(newStep) {
      this.step = newStep;
    },
    submit() { <<
      << << < HEAD
      var formData = new FormData("FormPage");
      fetch(`${api}/submit`, {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData
        })
        .then(res => res.json())
        .then(console.log("Submitted!")); ===
      === =
      var formData = new FormData();
      fetch(`${api}/submit`, {
          method: 'POST',
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data"
          },
          body: formData
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(res => console.log('Success:', JSON.stringify(res))) >>>
        >>> > 7 a39552fb0ccbafeeb9023104c463f8d1f918a52
    }
  }
};