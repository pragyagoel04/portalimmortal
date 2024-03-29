import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import axios from 'axios';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    axios.post('/api/users', { user: this.state});
  }

  render() {
    const options = map(timezones, (val, key) => {
      return <option key={val} value={val}>{key}</option>
    }
    );
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join us today!</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input type="text" name="username"
          className="form-control" 
          value={this.state.username}
          onChange={this.onChange} />
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input type="text" name="email"
          className="form-control" 
          value={this.state.email}
          onChange={this.onChange} />
        </div>
        
        <div className="form-group">
          <label className="control-label">Password</label>
          <input type="password" name="password"
            className="form-control" 
            value={this.state.password}
            onChange={this.onChange} />
        </div>

        <div className="form-group">
          <label className="control-label">Password Confirmation</label>
          <input type="password"
            name="passwordConfirmation"
            className="form-control" 
            value={this.state.passwordConfirmation}
            onChange={this.onChange} />
        </div>

        <div className="form-group">
          <label className="control-label">Timezone</label>
          <select 
            name="timezone"
            className="form-control"
            onChange={this.onChange}
            value={this.state.timezone}>
            <option value="" disabled>Choose your timezone</option>
            {options}
          </select>
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign Up
          </button>
        </div>
      </form>
    )
  }
}

export default SignupForm;