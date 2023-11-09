import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Intrest() {
  const [formData, setFormData] = useState({
    reasonForRelationship: "",
    importantInRelationship: "",
    morningOrNightPerson: "",
    cellphoneUsage: "",
    importanceOfSexuality: "",
    livingTogetherOrMarriage: "",
  });
   
  // console.log(formData)

  const handleChange = (category, value) => {
    setFormData({
      ...formData,
      [category]: value,
    });
  };
  const tokan = localStorage.getItem('AccessToken');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to the backend using Axios
    axios
      .put("http://192.168.1.79:3999/users/updateuser", formData,{
      headers: {
        authorization:  tokan,
    },
      })
      .then((response) => {
        // Handle successful response
        console.log(response);
        navigate("/choos");
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <div className="login-section padding-tb1">
      <div className="container">
        <div className="account-wrapper account-width">
          <h3 className="title">Choose Your Tastes</h3>
          <form className="account-form" onSubmit={handleSubmit}>
            <div className="choice" style={{ textAlign: "left" }}>
              <label htmlFor="reasonForRelationship">
                What are your main reasons for wanting a relationship?
              </label>
              <br />
              <input
                type="radio"
                id="emotionalSecurity"
                name="reasonForRelationship"
                value="Emotional Security"
                checked={formData.reasonForRelationship === "Emotional Security"}
                onChange={() =>
                  handleChange("reasonForRelationship", "Emotional Security")
                }
              />
              <label htmlFor="emotionalSecurity">Emotional Security</label>
              <br />
              <input
                type="radio"
                id="trust"
                name="reasonForRelationship"
                value="Having a partner I can trust"
                checked={
                  formData.reasonForRelationship ===
                  "Having a partner I can trust"
                }
                onChange={() =>
                  handleChange(
                    "reasonForRelationship",
                    "Having a partner I can trust"
                  )
                }
              />
              <label htmlFor="trust">Having a partner I can trust</label>
              <br />
              <input
                type="radio"
                id="justDate"
                name="reasonForRelationship"
                value="Just a date"
                checked={formData.reasonForRelationship === "Just a date"}
                onChange={() => handleChange("reasonForRelationship", "Just a date")}
              />
              <label htmlFor="justDate">Just a date</label>
              <br />
            </div>

            <div className="choice" style={{ textAlign: "left" }}>
              <label htmlFor="importantInRelationship">
                What do you think is most important in the relationship?
              </label>
              <br />
              <input
                type="radio"
                id="lotOfSpaces"
                name="importantInRelationship"
                value="Giving each other lot of spaces"
                checked={formData.importantInRelationship === "Giving each other lot of spaces"}
                onChange={() => handleChange("importantInRelationship", "Giving each other lot of spaces")}
              />
              <label htmlFor="lotOfSpaces">Giving each other lot of spaces</label>
              <br />
              <input
                type="radio"
                id="imperfections"
                name="importantInRelationship"
                value="Accepting our imperfections"
                checked={formData.importantInRelationship === "Accepting our imperfections"}
                onChange={() => handleChange("importantInRelationship", "Accepting our imperfections")}
              />
              <label htmlFor="imperfections">Accepting our imperfections</label>
              <br />
              <input
                type="radio"
                id="considerNothing"
                name="importantInRelationship"
                value="Consider nothing"
                checked={formData.importantInRelationship === "Consider nothing"}
                onChange={() => handleChange("importantInRelationship", "Consider nothing")}
              />
              <label htmlFor="considerNothing">Consider nothing</label>
              <br />
            </div>

            <div className="choice" style={{ textAlign: "left" }}>
              <label htmlFor="morningOrNightPerson">
                Are you a morning person or a night person?
              </label>
              <br />
              <input
                type="radio"
                id="morningPerson"
                name="morningOrNightPerson"
                value="Morning person"
                checked={formData.morningOrNightPerson === "Morning person"}
                onChange={() => handleChange("morningOrNightPerson", "Morning person")}
              />
              <label htmlFor="morningPerson">Morning person</label>
              <br />
              <input
                type="radio"
                id="nightOwl"
                name="morningOrNightPerson"
                value="Night Owl"
                checked={formData.morningOrNightPerson === "Night Owl"}
                onChange={() => handleChange("morningOrNightPerson", "Night Owl")}
              />
              <label htmlFor="nightOwl">Night Owl</label>
              <br />
              <input
                type="radio"
                id="dependsOnDay"
                name="morningOrNightPerson"
                value="It depends on the day"
                checked={formData.morningOrNightPerson === "It depends on the day"}
                onChange={() => handleChange("morningOrNightPerson", "It depends on the day")}
              />
              <label htmlFor="dependsOnDay">It depends on the day</label>
              <br />
            </div>

            <div className="choice" style={{ textAlign: "left" }}>
              <label htmlFor="cellphoneUsage">
                Does it bother you when people use their cellphone around you?
              </label>
              <br />
              <input
                type="radio"
                id="notBothered"
                name="cellphoneUsage"
                value="Not really, I am used to it"
                checked={formData.cellphoneUsage === "Not really, I am used to it"}
                onChange={() => handleChange("cellphoneUsage", "Not really, I am used to it")}
              />
              <label htmlFor="notBothered">Not really, I am used to it</label>
              <br />
              <input
                type="radio"
                id="cantStand"
                name="cellphoneUsage"
                value="I can't stand it"
                checked={formData.cellphoneUsage === "I can't stand it"}
                onChange={() => handleChange("cellphoneUsage", "I can't stand it")}
              />
              <label htmlFor="cantStand">I can't stand it</label>
              <br />
              <input
                type="radio"
                id="checkPhoneToo"
                name="cellphoneUsage"
                value="I use the time to check my phone too"
                checked={formData.cellphoneUsage === "I use the time to check my phone too"}
                onChange={() => handleChange("cellphoneUsage", "I use the time to check my phone too")}
              />
              <label htmlFor="checkPhoneToo">I use the time to check my phone too</label>
              <br />
            </div>

            <div className="choice" style={{ textAlign: "left" }}>
              <label htmlFor="importanceOfSexuality">
                How important is sexuality to you?
              </label>
              <br />
              <input
                type="radio"
                id="veryImportant"
                name="importanceOfSexuality"
                value="Very important"
                checked={formData.importanceOfSexuality === "Very important"}
                onChange={() => handleChange("importanceOfSexuality", "Very important")}
              />
              <label htmlFor="veryImportant">Very important</label>
              <br />
              <input
                type="radio"
                id="notParticularlyImportant"
                name="importanceOfSexuality"
                value="Not particularly important"
                checked={formData.importanceOfSexuality === "Not particularly important"}
                onChange={() => handleChange("importanceOfSexuality", "Not particularly important")}
              />
              <label htmlFor="notParticularlyImportant">Not particularly important</label>
              <br />
              <input
                type="radio"
                id="notImportant"
                name="importanceOfSexuality"
                value="Not important"
                checked={formData.importanceOfSexuality === "Not important"}
                onChange={() => handleChange("importanceOfSexuality", "Not important")}
              />
              <label htmlFor="notImportant">Not important</label>
              <br />
            </div>

            <div className="choice" style={{ textAlign: "left" }}>
              <label htmlFor="livingTogetherOrMarriage">
                Do you believe in living together or marriage?
              </label>
              <br />
              <input
                type="radio"
                id="livingTogether"
                name="livingTogetherOrMarriage"
                value="Living together"
                checked={formData.livingTogetherOrMarriage === "Living together"}
                onChange={() => handleChange("livingTogetherOrMarriage", "Living together")}
              />
              <label htmlFor="livingTogether">Living together</label>
              <br />
              <input
                type="radio"
                id="marriage"
                name="livingTogetherOrMarriage"
                value="Marriage"
                checked={formData.livingTogetherOrMarriage === "Marriage"}
                onChange={() => handleChange("livingTogetherOrMarriage", "Marriage")}
              />
              <label htmlFor="marriage">Marriage</label>
              <br />
              <input
                type="radio"
                id="dependsOnPerson"
                name="livingTogetherOrMarriage"
                value="It depends on the person"
                checked={formData.livingTogetherOrMarriage === "It depends on the person"}
                onChange={() => handleChange("livingTogetherOrMarriage", "It depends on the person")}
              />
              <label htmlFor="dependsOnPerson">It depends on the person</label>
              <br />
            </div>

            <div className="form-group">
              <button type="submit" className="d-block lab-btn" >
                <span>Get Started Now</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Intrest;
