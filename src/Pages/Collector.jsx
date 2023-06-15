import { useState } from "react";
import "./Collector.css";
// import { getcolleges } from "../../actions/college";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

import district from "./district";

const listOfBranch = [
  { value: "civil", label: "Civil" },
  { value: "comp", label: "Computer/IT" },
  { value: "entc", label: "Electronic & Telecommunication" },
  { value: "mech", label: "Mechanical" },
  { value: "ele", label: "Electrical" },
];
const listOfCat = [
  { value: "open", label: "Open" },
  { value: "obc", label: "OBC" },
  { value: "sc", label: "SC" },
  { value: "st", label: "ST" },
];
const listOfDistrict = district;
const listOfExam = [{ value: "CET", label: "CET" }];
const listOfGender = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const Collector = () => {
  const navigate = useNavigate();
  //   const dispatch = useDispatch();
  const [page, setpage] = useState(false);

  const initData = {
    percentile: "",
    exam: "CET",
    category: "open",
    branch: "comp",
    district: "all",
    gender: "male",
    dist1: "all",
    dist2: "all",
    dist3: "all",
  };
  const [formData, setFormData] = useState(initData);

  const handlenext = (e) => {
    e.preventDefault();
    if (!page && formData.percentile !== "") {
      setpage(true);
    } else {
      window.alert("enter percentile");
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    // dispatch(getcolleges(formData, navigate));
    console.log("Sending the data");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="collector center-div">
      <form className="collector__form">
        <>
          {!page ? (
            <>
              <div className="Collector__page__title">
                *All filled are required to fill
              </div>
              <div>
                <label htmlFor="">1. Enter your Percentile</label>
                <input
                  required
                  onChange={handleChange}
                  name="percentile"
                  type="number"
                />
              </div>

              <div>
                <label htmlFor="">2. Choose Your Exam : </label>
                <select name="exam" onChange={handleChange} id="">
                  {listOfExam.map((i) => {
                    return (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label htmlFor="">3. Choose Your Category : </label>
                <select name="category" onChange={handleChange} id="">
                  {listOfCat.map((i) => {
                    return (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label htmlFor="">4. Choose Your Branch : </label>
                <select name="branch" onChange={handleChange} id="">
                  {listOfBranch.map((i) => {
                    return (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label htmlFor="">5. Completed Your 12th in (district) </label>
                <select name="district" onChange={handleChange} id="">
                  {listOfDistrict.map((i) => {
                    return (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label htmlFor="">6. Select Your Gender </label>
                <select name="gender" onChange={handleChange} id="">
                  {listOfGender.map((i) => {
                    return (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </>
          ) : (
            <>
              <div className="Collector__page__title">
                Intereseted District To Study in?
              </div>
              <div>
                <label htmlFor="">Choose your First District </label>
                <select name="dist1" onClick={handleChange} id="">
                  {listOfDistrict.map((i) => {
                    return (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label htmlFor="">Choose your Second District </label>
                <select name="dist2" onClick={handleChange} id="">
                  {listOfDistrict.map((i) => {
                    return (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label htmlFor="">Choose your Third District </label>
                <select name="dist3" onClick={handleChange} id="">
                  {listOfDistrict.map((i) => {
                    return (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </>
          )}
        </>
        <div className="float-right">
          {!page ? (
            <button className="btn-1" onClick={handlenext}>
              Next
            </button>
          ) : (
            <button className="btn-1" onClick={handlesubmit}>
              Submit
            </button>
          )}
        </div>
        <div className="dots">
          <div className="dot"></div>
          <div
            className="dot"
            style={{ "background-color": "var(--clr-highlight)" }}
          ></div>
        </div>
      </form>
    </div>
  );
};

export default Collector;
