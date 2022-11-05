import swal from "sweetalert";
import React from "react";

class InformationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
    };
    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    console.log("Change detected. State updated" + name + " = " + value);
  }
  handleSubmit(event) {
    swal(
      "Your Information: ",
      this.state.name + " " + this.state.surname + "\n" + this.state.email,
      "success"
    );
    event.preventDefault();
  }
  render() {
    return (
      <body class="text-center">
        <section class="h-100">
          <div class="container h-100">
            <div class="row justify-content-sm-center h-100">
              <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                <div class="card shadow-lg">
                  <div class="card-body p-5">
                    <form onSubmit={this.handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="nameInput" name="Name">
                          <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            className="form-control"
                            id="nameInput"
                            placeholder="First name"
                          />
                        </label>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="surnameInput" name="Surname">
                          <input
                            type="text"
                            name="surname"
                            value={this.state.surname}
                            onChange={this.handleChange}
                            className="form-control"
                            id="surnameInput"
                            placeholder="Last name"
                          />
                        </label>
                      </div>

                      <div class="mb-3">
                        <label htmlFor="emailInput" name="Email">
                          <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            className="form-control"
                            id="emailInput"
                            placeholder="email@domain.com"
                          />
                        </label>
                      </div>
                      <input
                        type="submit"
                        value="Submit"
                        class="btn btn-danger"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    );
  }
}

export default InformationForm;
