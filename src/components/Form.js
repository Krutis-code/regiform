import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationType: 'individual',
      title: 'mr',
      name: ' ',
      FatherTitle: 'S/O',
      FatherName: '',
      birthdate: '',
      address: ' ',
      PINCode: '',
      MolbileNo: '',
      EmailId: '',
      PANNumber: '',
      AdharNumber: '',
      NomineeName: '',
      NomineeRelation: '',
      Password: '',

      formErr: {
        nameErr: '',
        mobileNoErr: ' ',
        emailErr: ' ',
        fathernameErr:'',
        addressErr:'',
        pinErr:" ",
        panErr:"",
        adharErr:"",
        nomineenameeErr:"",
        nomineerelationErr:"",
        passwordErr:""

      },
    };
    this.submithandle = this.submithandle.bind(this);
    // this.checkerros = this.checkerros.bind(this);
  }

  
  changeHandler = (e) =>{
    // let name = e.target.name;
    let errors=this.state.formErr;
    let value = e.target.value
    switch(e.target.name){
      case "name":
        errors.nameErr = value.length > 60? "user name must be 5 characters long": "";
        break;
      
        case "EmailId" : 
        errors.emailErr = value.length >100 ? "email must be 5 characters long" : "";
        let apos = value.indexOf('@');
        let dotpos = value.indexOf('.');
        if(apos < 1 || dotpos - apos <2){
          errors.emailErr="please enter valid email id";
        }
      break;
      
      case "MobileNo" :
          errors.mobileNoErr =( value.length < 10 || value.length > 10) ? "mobile no should be exactly 10 letters" : "";
          
      break;
      
      case "FatherName" :
        errors.fathernameErr = value.length > 60 ? "must be less than 60" : "";
      break;

      case "address":
        errors.addressErr =value.length > 250 ? "must be less than 250" : "";
      break;

      case "PINCode":
        errors.pinErr=value.length>10?"must be less than 10":"";
      break;

      case "PANNumber":
        errors.panErr=value.length>=10?"must be less than 10 letters":"";
      break;
      
      case "AdharNumber":
        errors.adharErr=(value.length <10 || value.length>10) ?"must be exactly 10 numbers" : "";
      break;

      case "NomineeName":
        errors.nomineenameeErr=(value.length > 50 ) ? "must be less than 50 letters" : "";
        // errors.nomineenameeErr=value.length <=  0 ? "can't be left empty" : "";
      break;

      case "NomineeRelation":
        errors.nomineerelationErr= value.length> 50  ? "must be less than 50 letters":"";
      break;

      case "Password":
        errors.passwordErr=value.length < 8 ? "at least 8 letters long " : "";
      break;
      default:
      break;
          }
          
          // console.log(errors);
          this.setState({[e.target.name] : e.target.value});
  }
  // checkerros = (e) =>{
  //   e.preventDefault();
    
  // }
  submithandle = async (event) => {
    event.preventDefault();
    if(this.state.formErr.nameErr.length === 0 &&
      this.state.formErr.emailErr.length === 0 &&
      this.state.formErr.mobileNoErr.length === 0 &&
      this.state.formErr.fathernameErr.length === 0 &&
      this.state.formErr.addressErr.length === 0 &&
      this.state.formErr.pinErr.length === 0 &&
      this.state.formErr.panErr.length === 0 &&
      this.state.formErr.adharErr.length === 0 &&
      this.state.formErr.nomineenameeErr.length === 0 &&
      this.state.formErr.nomineerelationErr.length=== 0 &&
      this.state.formErr.passwordErr.length === 0 ){
        alert('form is valid');
        console.log("everything is okay");
      }
      else{
        alert("fill all the fields");
      }
    const data = {
      LoginPwd: this.state.Password,
      Title: this.state.Title,
      MemberName: this.state.name,
      FatherTitle: this.state.FatherTitle,
      FatherName: this.state.FatherName,
      BirthDate: this.state.birthdate,

      MemberAddress: this.state.address,

      MemberPinCode: this.state.PINCode,
      MobileNo: this.state.MolbileNo,
      EmailID: this.state.EmailId,
      MemberPANNo: this.state.PANNumber,

      NomineeName: this.state.NomineeName,
      NomineeRelation: this.state.NomineeRelation,
    };
    const url = 'http://uatbenmoon.malayinfotech.com/api/memberapi/';
    axios.post(url,data).then(
      response => console.log(response)
      

    ).catch(
      error => console.log(error)
    )
    


  };

  render() {

    const {formErr}=this.state;
    return (
      <div className="regiform">
        <form onSubmit={this.submithandle} >
        <div className="formcontainer">
          <div>
            <label>Registration Type :</label>
            <select
              value={this.state.registrationType}
              onChange={this.changeHandler}
              name="registrationType"
            >
              <option value="individual" >Individual</option>
              <option value="organizational">Organizational</option>
            </select>
          </div>
          <div>
            <label>Title :</label>
            <select value={this.state.title} name="title" onChange={this.changeHandler}>
              <option value="mr">Mr</option>
              <option value="ms">Ms</option>
              <option value="mrs">Mrs</option>
            </select>
          </div>
          <div>
            <label>Name :</label>
            <br></br>
            <input
              type="text"
              value={this.state.name}
              onChange={this.changeHandler}
              className="textinput"
              placeholder="name"
              name="name"
            />
          </div>
          <div style={{ fontSize: 12, color: 'red' }} >{formErr.nameErr}</div>
          <div>
            <label>Father / Husband :</label>
            <select
              value={this.state.FatherTitle}
              onChange={this.changeHandler}
              name="fathertitle"
            >
              <option value="S/0">S/o</option>
              <option value="D/0">D/o</option>
              <option value="W/0">W/o</option>
            </select>
          </div>
          <div className="fhname">
            <label>Father / Husband name :</label>
            <br></br>
            <input
              className="textinput"
              value={this.state.FatherName}
              onChange={this.changeHandler}
              type="text"
              placeholder=""
              name="FatherName"
            />
          </div>

          <div style={{ fontSize: 12, color: 'red' }}>{formErr.fathernameErr}</div>
          <div
            className="dob"
            value={this.state.Birthdate}
            onChange={this.changeHandler}
            name="Birthdate"
          >
            <label>Birth Date :</label>
            <input type="date" />
          </div>
          <div className="address">
            <label>Address : </label>
            <input
              className="textinput"
              type="text"
              value={this.state.address}
              onChange={this.changeHandler}
              name="address"
            />
          </div>

          <div style={{ fontSize: 12, color: 'red' }}>{formErr.addressErr}</div>

          <div>
            <label>PINCode : </label>
            <input
              value={this.state.PINCode}
              onChange={this.changeHandler}
              className="textinput"
              type="text"
              name="PINCode"
            />
          </div>
          <div style={{ fontSize: 12, color: 'red' }}>{formErr.pinErr}</div>

          <div>
            <label>Mobile No :</label>
            <input
            className="textinput"
              type="number"
              value={this.setState.MolbileNo}
              onChange={this.changeHandler}
              name="MobileNo"
            ></input>
          </div>
          <div style={{ fontSize: 12, color: 'red' }} >{formErr.mobileNoErr}</div>
          <div>
            <label>Email ID :</label>
            <input
              className="textinput"
              value={this.state.EmailId}
              onChange={this.changeHandler}
              type="email"
              name="EmailId"
            />
          </div>
          <div style={{ fontSize: 12, color: 'red' }} >{formErr.emailErr}</div>
          

          <div>
            <label>PAN Number :</label>
            <input
              className="textinput"
              value={this.state.PANNumber}
              onChange={this.changeHandler}
              type="text"
              name="PANNumber"
            />
          </div>


          <div style={{ fontSize: 12, color: 'red' }}>{formErr.panErr}</div>
          <div>
            <label>Adhar Number :</label>
            <input
              className="textinput"
              value={this.state.AdharNumber}
              onChange={this.changeHandler}
              type="number"
              name="AdharNumber"
            />
          </div>
          <div style={{ fontSize: 12, color: 'red' }}>{formErr.adharErr}</div>


          <div>
            <label>Nominee Name :</label>
            <input
              className="textinput"
              value={this.state.NomineeName}
              onChange={this.changeHandler}
              type="text"
              name="NomineeName"
            ></input>
          </div>
          <div style={{ fontSize: 12, color: 'red' }}>{formErr.nomineenameeErr}</div>


          <div>
            <label>Nominee Relation :</label>
            <input
              className="textinput"
              value={this.state.NomineeRelation}
              onChange={this.changeHandler}
              type="text"
              name="NomineeRelation"
            ></input>
          </div>

          <div style={{ fontSize: 12, color: 'red' }}>{formErr.nomineerelationErr}</div>
          <div>
            <label>Password :</label>
            <input
              type="password"
              value={this.state.Password}
              onChange={this.changeHandler}
              className="textinput"
              name="Password"
            ></input>
          </div>
          <div style={{ fontSize: 12, color: 'red' }}>{formErr.passwordErr}</div>

          <div>
            <button type="submit" className="btn">Submit</button>
          </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
