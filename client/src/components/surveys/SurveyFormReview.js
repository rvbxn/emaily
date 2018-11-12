import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

import formFields from "./formFields";

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow white-text darken-3 btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = ({ form }) => {
  return { formValues: form.surveyForm.values };
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyReview));
