import React from "react";
import ReactDOM from "react-dom";
import Stepper from "react-js-stepper";
import Formregis from "./form_regis";
import Contact_regis from "./contact_regis";
import Mbti_regis from "./mbti_regis";
import "../style/regis.scss";
import { Button } from "semantic-ui-react";
import Complete_regis from "./complete_regis";
import axios from "axios";
import { API_USER_REGISTER } from "../constant/ENV";
import { thisExpression, API_GET_ALL_USER } from "@babel/types";

const steps = [
  { title: "Information" },
  { title: "Contact" },
  { title: "MBTI" },
  { title: "Complete" }
];

export default class Steppers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageOne: {
        password: "",
        username: "",
        fristname: "",
        lastname: "",
        answer: "",
        age: "",
        gender: ""
      },
      pageTwo: {
        email: "",
        phoneNumber: "",
        instargram: "",
        facebook: ""
      },
      mbti: "",
      activeStep: 1
    };
  }
  onChange = e => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = e => {
    let data = {
      email: this.state.pageTwo.email,
      username: this.state.pageOne.username,
      password: this.state.pageOne.password,
      fristName: this.state.pageOne.fristname,
      lastName: this.state.pageOne.lastname,
      phoneNumber: this.state.pageTwo.phoneNumber,
      question: "string",
      answer: "string",
      mbti: this.state.mbti,
      image: "string",
      age: this.state.pageOne.age,
    //   gender: this.state.pageOne.gender
    };

    console.log(data);
    axios({
      method: "POST",
      url: "https://api.superder.me/client/v2.0.0/student/register",
      data: {
        email: this.state.pageTwo.email,
        username: this.state.pageOne.username,
        password: this.state.pageOne.password,
        fristName: this.state.pageOne.fristname,
        lastName: this.state.pageOne.lastname,
        phoneNumber: this.state.pageTwo.phoneNumber,
        question: "string",
        answer: "string",
        mbti: this.state.mbti,
        image: "string",
        age: this.state.pageOne.age,
        //  gender: this.state.pageOne.gender
      }
    }).then(res => {
      console.log(res);
      console.log(res.data.payload);
      let nextStep = this.state.activeStep + 1;
      this.setState({ activeStep: nextStep });
    });
  };
  submitNon = e => {
    let data = {
      email: this.state.pageTwo.email,
      username: this.state.pageOne.username,
      password: this.state.pageOne.password,
      fristName: this.state.pageOne.fristname,
      lastName: this.state.pageOne.lastname,
      phoneNumber: this.state.pageTwo.phoneNumber,
      question: "string",
      answer: "string",

      image: "string",
    
      age: this.state.pageOne.age,
    //   gender: this.state.pageOne.gender
    };

    console.log(data);
    axios({
      method: "POST",
      url: "https://api.superder.me/client/v2.0.0/student/register",
      data: {
        email: this.state.pageTwo.email,
        username: this.state.pageOne.username,
        password: this.state.pageOne.password,
        fristName: this.state.pageOne.fristname,
        lastName: this.state.pageOne.lastname,
        phoneNumber: this.state.pageTwo.phoneNumber,
        question: "string",
        answer: "string",
        image: "string",
        age: this.state.pageOne.age,
        // gender: this.state.pageOne.gender
      }
    }).then(res => {
      console.log(res);
      console.log(res.data.payload);
      let nextStep = this.state.activeStep + 1;
      this.setState({ activeStep: nextStep });
    });
  };

  onChangePageOne = e => {
    if (this.state.pageOne.password.length < 10 && e.target.name == "password") {
      this.setState({
        pageOne: {
          ...this.state.pageOne,
          [e.target.name]: e.target.value
        }
      });
    }else if(e.target.name != "password" ||(e.target.name == "password"&&e.target.value.length < 10)){
        this.setState({
            pageOne: {
              ...this.state.pageOne,
              [e.target.name]: e.target.value
            }
          });
    }
  };
  onChangePageTwo = e => {
    this.setState({
      pageTwo: {
        ...this.state.pageTwo,
        [e.target.name]: e.target.value
      }
    });
  };

  handleOnClickStepper = step => {
    this.setState({ activeStep: step });
  };

  handleOnClickNext = () => {
    let nextStep = this.state.activeStep + 1;
    this.setState({ activeStep: nextStep });
  };

  handleOnClickBack = () => {
    let prevStep = this.state.activeStep - 1;
    this.setState({ activeStep: prevStep });
  };

  render() {
    //console.log(this.state);
    return (
      <React.Fragment>
        <div className="step-bg">
          <Stepper
            steps={steps}
            activeStep={this.state.activeStep}
            onSelect={this.handleOnClickStepper}
            showNumber={false}
          />
        </div>
        <div style={{ marginTop: "40px" }}>
          {this.state.activeStep === 1 ? (
            <div>
              {" "}
              <Formregis
                afterClick={this.handleOnClickNext}
                onChange={this.onChangePageOne}
                value={this.state.pageOne}
              />{" "}
            </div>
          ) : this.state.activeStep === 2 ? (
            <div>
              {" "}
              <Contact_regis
                afterClick={this.handleOnClickNext}
                onChange={this.onChangePageTwo}
                value={this.state.pageTwo}
              />{" "}
            </div>
          ) : this.state.activeStep === 3 ? (
            <div>
              {" "}
              <Mbti_regis
                afterClick={this.submit}
                afterClickNon={this.submitNon}
                onChange={this.onChange}
                value={this.state}
              />{" "}
            </div>
          ) : (
            <div>
              {" "}
              <Complete_regis value={this.state} />{" "}
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}
