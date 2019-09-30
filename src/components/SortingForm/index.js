import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormSelect } from './FormSelect'

class SortingForm extends Component {
  render() {
    const sortingOptions = [
      {
        label: 'Name ascending A-Z',
        value: '?sort=1',
      },
      {
        label: 'Name descending Z-A',
        value: '?sort=-1'
      }
    ];
    const { handleSubmit } = this.props;
    return (
      <form>
        <Field
          name="currentSorting"
          component={FormSelect}
          options={sortingOptions}
          onChange={handleSubmit}
        />
      </form>
    )
  }
}

SortingForm = reduxForm({
  form: 'sorting',
})(SortingForm);

export default SortingForm;