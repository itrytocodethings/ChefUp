import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";



export const SignUp = props => {
  const history = useHistory()
  let PostToMeCall = () => {

    let sample = {
      "fname": SignUpInfo.SignUpFirstName,
      "lname": SignUpInfo.SignUpLastName,

      "username": SignUpInfo.SignUpUserName,
      "email": SignUpInfo.SignUpEmail,
      "avatar": "https://www.mecallapi.com/users/cat.png"
    }



    fetch("https://www.mecallapi.com/api/users/create", {

      method: "POST",
      body: JSON.stringify(sample),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          console.log(response);
          history.push("/login")


          return response;
        }
      })
      .catch(e => console.log(e, " THE ERROR"));
  }


  //The three keys below are linked to the values of the input fields username, email, and password in the JSX
  const [SignUpInfo, setSignUpInfo] = useState({
    "SignUpFirstName": '',
    "SignUpLastName": '',
    "SignUpUserName": '',
    "SignUpEmail"
      : '', 'SignUpPassword': ''
  })

  //The idea with these useStates is that they start out as true on render, and should remain true onSubmit if they pass the logic tests we give them.
  //If the user enters invalid data, these useStates become false and the corresponding error messages in the ternary operators located in the
  //JSX become visible as feedback for the user. 
  const [IsEmailVerified, setIsEmailVerified] = useState(true)
  const [IsPasswordVerified, setIsPasswordVerified] = useState(true)
  const [IsUserNameVerified, setIsUserNameVerified] = useState(true)

  // SpecialCharCount and isUpperCaseCount are used with the function passwordVerifier. Passwords should have at least 1 uppercase letter
  //and one special character
  let SpecialCharCount = 0
  let isUpperCaseCount = 0

  //blankSpacesforUsername is used with the function checksForBlankSpaces. Usernames should not have a blankspace in them
  const blankSpacesforUsername = 0

  //emailregex and blankespaceregex are referenced in the HandleSubmit function
  const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
  const blankspaceregex = /^\s*$/

  const passwordVerifier = (givenpassword) => {
    const isSpecialChar = (eachcharacter) => /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(eachcharacter);
    const isUpperCase = (eachcharacter) => /^[A-Z]*$/.test(eachcharacter)

    for (let eachcharacter of givenpassword) {
      //goes through each character in the given password and checks for the special character. If true, SpecialCharCount is incremented
      if (isSpecialChar(eachcharacter) == true) {
        SpecialCharCount += 1
      }
      //goes through each character in the given password and checks for the uppercase. If true, isUpperCaseCount is incremented
      if (isUpperCase(eachcharacter) == true) {
        isUpperCaseCount += 1
      }
    }
    //Ideally, the given password has a count of at least one special character and uppercase letter. It should also be at least 6 characters.
    //If all those conditions are met, the function passwordVerifier returns a boolean of "true."
    return SpecialCharCount >= 1 && isUpperCaseCount >= 1 && givenpassword.length >= 6

  }

  const checksForBlankSpaces = (givenUserName) => {
    const isBlankSpace = (eachcharacter) => /^\s*$/.test(eachcharacter) == true
    const blankspaceregex = /^\s*$/
    //goes through each character in the given username and checks for a blank space that ideally does not exist
    for (let eachcharacter of givenUserName) {
      if (isBlankSpace(eachcharacter) == true) {
        blankSpacesforUsername += 1
      }


    }
    //If the user gives us a username with no blank spaces, the function "checksForBlankSpaces" should return a boolean of "true."
    return blankSpacesforUsername == 0 && givenUserName.length >= 6

  }
  //just a placeholder name for this function at the moment. 
  let POSTMethodMaybe = (results) => {
    console.log('Are the User Name, Email, and Password valid?', results)
    results === true ? console.log("And if the given data passed the logic check, I'm thinking we would put a POST method here?") : null;
    if (results == true) {
      localStorage.setItem("SignUpFirstName", SignUpInfo.SignUpFirstName);
      localStorage.setItem("SignUpLastName", SignUpInfo.SignUpLastName);
      localStorage.setItem("SignUpUserName", SignUpInfo.SignUpUserName);
      localStorage.setItem("SignUpEmail", SignUpInfo.SignUpEmail);
      localStorage.setItem("SignUpPassword", SignUpInfo.SignUpPassword);
      console.log(localStorage.getItem("SignUpUserName"), localStorage.getItem("SignUpEmail"), localStorage.getItem("SignUpPassword"),)
      PostToMeCall()
    }


  }



  const HandleChange = (e) => {

    console.log('The chosen key is: ', e.target.id)
    console.log('the key will be updated with the following info: ', e.target.value)
    //The target ids in the JSX were set to the key values in the SignUpInfo object so that the line below could be a bit more abstract.
    // e.target.id should always result in either SignUpUserName, SignUpEmail, or SignUpPassword.
    setSignUpInfo({ ...SignUpInfo, [e.target.id]: e.target.value })

  }

  //to the best of my ability, the function below is...functional lol.
  const HandleSubmit = (e) => {

    //preventDefault used to prevent the refresh of the page when the submit button is clicked
    e.preventDefault()
    //The regex below was found online and "regex.test(SignUpInfo.SignUpEmail)" returns true or false if the given email is 
    //entered in a valid format. If false, isEmailVerified is set to false and an error message is displayed for the user
    setIsEmailVerified(emailregex.test(SignUpInfo.SignUpEmail))


    //passwordverifier is given SignUpPassword as a parameter and returns "true" or "false". If false, isPasswordVerified is set to false
    //and an error message is displayed for the user.
    setIsPasswordVerified(passwordVerifier(SignUpInfo.SignUpPassword))

    //checks if the given username is a valid length and does not contain blank spaces. Ideally, it returns 4 "true" booleans.
    setIsUserNameVerified(SignUpInfo.SignUpUserName != '' &&
      //endsWith and startsWith are probably overkill given the function "checksForBlankSpaces" but I guess the extra checks don't hurt
      !SignUpInfo.SignUpUserName.endsWith(' ') &&
      !SignUpInfo.SignUpUserName.startsWith(' ') &&
      SignUpInfo.SignUpUserName.length >= 6 &&
      checksForBlankSpaces(SignUpInfo.SignUpUserName)
    )
    //just a placeholdername for this function right now, but every time the submit button is clicked we could try and validate the given data
    //goal is to be able to have all these expressions evaluate to true, confirming that the username, email, and password are entered correctly
    POSTMethodMaybe(

      //Checks the email format
      emailregex.test(SignUpInfo.SignUpEmail) &&

      //checks the user name format
      SignUpInfo.SignUpUserName != '' &&
      !SignUpInfo.SignUpUserName.endsWith(' ') &&
      !SignUpInfo.SignUpUserName.startsWith(' ') &&
      checksForBlankSpaces(SignUpInfo.SignUpUserName) &&
      SignUpInfo.SignUpUserName.length >= 6 &&

      //checks the password format
      SpecialCharCount >= 1 &&
      isUpperCaseCount >= 1 &&
      SignUpInfo.SignUpPassword.length >= 6


    )
  }




  return (
    <>
      {/* The divs with the labels "SignUpUserName","SignUpEmail, and "SignUpPassword" contain the ternary operators linked to
      linked to the useStates in lines 11-13 */}
      <form className="row g-3" onSubmit={HandleSubmit} noValidate >
        <div className="col-md-6">
          <label for="SignUpFirstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="SignUpFirstName" value={SignUpInfo.SignUpFirstName} onChange={HandleChange} />
        </div>
        <div className="col-md-6">
          <label for="SignUpLastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="SignUpLastName" value={SignUpInfo.SignUpLastName} onChange={HandleChange} />
        </div>
        <div className="col-md-4">
          <label for="SignUpUserName" className="form-label">Username</label>
          <input type="text" className="form-control" id="SignUpUserName" value={SignUpInfo.SignUpUserName} onChange={HandleChange} />
          {IsUserNameVerified ? null : <p style={{ color: "red" }}>Invalid username! Must be at least 6 characters in length and contain no blank spaces</p>}
        </div>
        <div className="col-md-4">
          <label for="SignUpEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="SignUpEmail" value={SignUpInfo.SignUpEmail} onChange={HandleChange} />
          {IsEmailVerified ? null : <p style={{ color: "red" }}>Invalid email! Please check the format and try again</p>}
        </div>
        <div className="col-md-4">
          <label for="SignUpPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="SignUpPassword" value={SignUpInfo.SignUpPassword} onChange={HandleChange} />
          {IsPasswordVerified ? null : <p style={{ color: "red" }}>Invalid password! Must be at least 6 characters in length and contain at least one capital letter and one special character</p>}
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">City</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">State</label>
          <select id="inputState" className="form-select">
            <option value="Choose...">Choose...</option>
            <option value="">N/A</option>
            <option value="AK">Alaska</option>
            <option value="AL">Alabama</option>
            <option value="AR">Arkansas</option>
            <option value="AZ">Arizona</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DC">District of Columbia</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="IA">Iowa</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="MA">Massachusetts</option>
            <option value="MD">Maryland</option>
            <option value="ME">Maine</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MO">Missouri</option>
            <option value="MS">Mississippi</option>
            <option value="MT">Montana</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="NE">Nebraska</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NV">Nevada</option>
            <option value="NY">New York</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="PR">Puerto Rico</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VA">Virginia</option>
            <option value="VT">Vermont</option>
            <option value="WA">Washington</option>
            <option value="WI">Wisconsin</option>
            <option value="WV">West Virginia</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">Zip</label>
          <input type="text" className="form-control" id="inputZip" />
        </div>


        <div className="col-md-6">
          <label for="FoodAllergies" className="form-label">Food Allergies</label>
          <input type="email" className="form-control" id="FoodAllergies" />
        </div>
        <div className="col-md-6">
          <label for="FavoriteCuisines" className="form-label">Favorite Cuisines</label>

          <select id="FavoriteCuisines" className="form-select">
            <option selected>Choose...</option>
            <option>I think the API has a section that lists all the cuisines it has recipes for</option>
          </select>

        </div>
        <div className="col-6">
          <button type="submit" className="btn btn-primary" >Sign Up</button>
        </div>
        <div className="col-6">
          <Link to="/login">
            <button className="btn btn-primary">Test button to Login</button>
          </Link>
        </div>
      </form>
    </>
  )
}




//exists just so I could copy and paste at the end in case we even need to take an address. can/will be deleted
let states = `<option value="">N/A</option>
  <option value="AK">Alaska</option>
  <option value="AL">Alabama</option>
  <option value="AR">Arkansas</option>
  <option value="AZ">Arizona</option>
  <option value="CA">California</option>
  <option value="CO">Colorado</option>
  <option value="CT">Connecticut</option>
  <option value="DC">District of Columbia</option>
  <option value="DE">Delaware</option>
  <option value="FL">Florida</option>
  <option value="GA">Georgia</option>
  <option value="HI">Hawaii</option>
  <option value="IA">Iowa</option>
  <option value="ID">Idaho</option>
  <option value="IL">Illinois</option>
  <option value="IN">Indiana</option>
  <option value="KS">Kansas</option>
  <option value="KY">Kentucky</option>
  <option value="LA">Louisiana</option>
  <option value="MA">Massachusetts</option>
  <option value="MD">Maryland</option>
  <option value="ME">Maine</option>
  <option value="MI">Michigan</option>
  <option value="MN">Minnesota</option>
  <option value="MO">Missouri</option>
  <option value="MS">Mississippi</option>
  <option value="MT">Montana</option>
  <option value="NC">North Carolina</option>
  <option value="ND">North Dakota</option>
  <option value="NE">Nebraska</option>
  <option value="NH">New Hampshire</option>
  <option value="NJ">New Jersey</option>
  <option value="NM">New Mexico</option>
  <option value="NV">Nevada</option>
  <option value="NY">New York</option>
  <option value="OH">Ohio</option>
  <option value="OK">Oklahoma</option>
  <option value="OR">Oregon</option>
  <option value="PA">Pennsylvania</option>
  <option value="PR">Puerto Rico</option>
  <option value="RI">Rhode Island</option>
  <option value="SC">South Carolina</option>
  <option value="SD">South Dakota</option>
  <option value="TN">Tennessee</option>
  <option value="TX">Texas</option>
  <option value="UT">Utah</option>
  <option value="VA">Virginia</option>
  <option value="VT">Vermont</option>
  <option value="WA">Washington</option>
  <option value="WI">Wisconsin</option>
  <option value="WV">West Virginia</option>
  <option value="WY">Wyoming</option>`