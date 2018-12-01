import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput';

const PlanetForm = ({allPlanets, onSave, onChange, saving, errors}) => {
  console.log(allPlanets,"$$");

  return (
    <form>
      <h1>Manage Planet</h1>

      {allPlanets.map(planet =>
        <SelectInput
          key = {planet.name}
          name="authorId"
          label="Author"
          value={planet.name}
          defaultOption="Select Planet"
          options={allPlanets}
          onChange={onChange} error={errors.name}/>
      )}

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

PlanetForm.propTypes = {
  planet: PropTypes.object.isRequired,
  allPlanets: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default PlanetForm;
