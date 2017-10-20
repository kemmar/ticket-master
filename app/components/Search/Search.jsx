import styles from './_Search.scss';
import React from 'react';
import FormGroup from '../../../node_modules/react-bootstrap/lib/FormGroup';
import FormControl  from '../../../node_modules/react-bootstrap/lib/FormControl';
import ControlLabel  from '../../../node_modules/react-bootstrap/lib/ControlLabel';
import SearchAction from "./SearchAction";

export default class Search extends React.Component {

  constructor(props) {
    super(props);
  }

    handleChange(e) {
      SearchAction.getItems({
        value: e.target.value
      })
    }

    render() {
      return (
        <form>
          <FormGroup controlId="searchField">
            <ControlLabel>search tickets</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter text"
              onChange={this.handleChange}
            />
          </FormGroup>
        </form>
      );
    }
}
