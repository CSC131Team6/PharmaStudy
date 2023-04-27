import React from "react";
import "./JaneHopkins.css";

function JaneHopkins(props) {
  const {
    iconMedicines,
    janehopkins,
    patientList,
    navbarLinkPlace1,
    navbarLinkResults,
    navbarLinkPlace2,
    navbarLinkPlacebo,
    shyamKhanna,
    text1,
    name1,
    text2,
    name2,
    text3,
    title,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="janehopkins screen">
        <div className="overlap-group-1">
          <img className="icon-medicines" src={iconMedicines} alt="icon &#34;Medicines&#34;" />
          <div className="janehopkins-1">{janehopkins}</div>
        </div>
        <div className="overlap-group-container">
          <div className="overlap-group2">
            <div className="patient-list valign-text-middle">{patientList}</div>
            <div className="navbar-link-container poppins-medium-gray-14px">
              <div className="navbar-link-place valign-text-middle">{navbarLinkPlace1}</div>
              <div className="navbar-link-results valign-text-middle">{navbarLinkResults}</div>
              <div className="navbar-link-place-1 valign-text-middle">{navbarLinkPlace2}</div>
              <div className="navbar-link-placebo valign-text-middle">{navbarLinkPlacebo}</div>
            </div>
            <div className="overlap-group4">
              <div className="shyam-khanna valign-text-middle poppins-medium-jacarta-14px">{shyamKhanna}</div>
              <div className="text-1 valign-text-middle poppins-medium-killarney-14px">{text1}</div>
              <img className="vector" src="/img/vector.svg" alt="Vector" />
            </div>
            <div className="overlap-group">
              <div className="name valign-text-middle poppins-medium-jacarta-14px">{name1}</div>
              <div className="text-2 valign-text-middle poppins-medium-killarney-14px">{text2}</div>
              <img className="vector" src="/img/vector.svg" alt="Vector" />
            </div>
            <div className="overlap-group">
              <div className="name-1 valign-text-middle poppins-medium-jacarta-14px">{name2}</div>
              <div className="text-3 valign-text-middle poppins-medium-killarney-14px">{text3}</div>
              <img className="vector" src="/img/vector.svg" alt="Vector" />
            </div>
          </div>
          <div className="overlap-group3">
            <h1 className="title valign-text-middle">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JaneHopkins;
