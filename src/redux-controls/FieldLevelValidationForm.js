import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, ButtonToolbar } from 'react-bootstrap'
import { required, maxLength, maxLength15, isNumeric, minValue, minValue18, email, tooOld, aol } from './Validators';

const renderField = ({
  input,
  label,
  type,
  meta: {
    touched,
    error,
  }
}) => (
  <FormGroup validationState={(touched && error) ? 'error' : null}>
    <ControlLabel>{label}</ControlLabel>
    <div>
      <input className="form-control" {...input} placeholder={label} type={type}/>
      {touched && error && <div className="help-block has-error">{error}</div>}
    </div>
  </FormGroup>
);

const FieldLevelValidationForm = (props) => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
        validate={[required, maxLength15]}/>
      <Field name="email" type="email" component={renderField} label="Email" validate={email} warn={aol}/>
      <Field
        name="age"
        type="isNumeric"
        component={renderField}
        label="Age"
        validate={[required, isNumeric, minValue18]}
        />

        <ButtonToolbar>
        		<Button bsStyle="primary" type="submit" active>
        			Submit
        		</Button>
        		<Button active type="button" disabled={pristine || submitting} onClick={reset}>
        			Clear Values
        		</Button>
        	</ButtonToolbar>

    </form>

  )
}

export default reduxForm({
  form: 'fieldLevelValidation' // a unique identifier for this form
})(FieldLevelValidationForm)
