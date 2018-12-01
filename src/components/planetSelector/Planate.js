import React, {PropTypes} from 'react';
import {bindActionCreators} from "redux";
import * as planetActions from "../../actions/planetActions";
import * as vehicleActions from "../../actions/vehicleActions";
import {connect} from "react-redux";
import PlanetForm from "./PlanetForm";
import toastr from "toastr";
import {planetsFormattedForDropdown} from "../../selectors/selectors";

class Planet extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      planets: Object.assign({}, this.props.planets),
      errors: {},
      saving: false
    };

    this.savePlanet = this.savePlanet.bind(this);
    this.updatePlanetState = this.updatePlanetState.bind(this);
  }

  updatePlanetState(event) {
    const field = event.target.name;
    let course = Object.assign({}, this.state.planets);
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  courseFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Planet saved.');
    this.context.router.push('/planet');
  }

  savePlanet(event) {
    event.preventDefault();

    if (!this.courseFormIsValid()) {
      return;
    }

    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  render() {
    this.props.planets
    return (
      <div>
        <h1>Courses</h1>
            <PlanetForm
              allPlanets={this.props.planets}
              onChange={this.updatePlanetState}
              onSave={this.savePlanet}
              errors={this.state.errors}
              saving={this.state.saving}
            />
        <p>
          {this.props.vehicles.map(vehicles => vehicles.name + vehicles.speed )}
        </p>
      </div>
    );
  }
}

Planet.propTypes = {
  actions: PropTypes.object.isRequired,
  planets: PropTypes.array.isRequired,
  vehicles: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    planets: planetsFormattedForDropdown(state.planets),
    vehicles: state.vehicles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(planetActions,vehicleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Planet);
