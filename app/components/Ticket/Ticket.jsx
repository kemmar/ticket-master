import React from 'react';
import Col  from '../../../node_modules/react-bootstrap/lib/Col';
import Thumbnail  from '../../../node_modules/react-bootstrap/lib/Thumbnail';
import Button  from '../../../node_modules/react-bootstrap/lib/Button';

let { Component, PropTypes } = React;

export default class Search extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
  let item = this.props.item;
    return (
      <Col xs={6} md={4}>
        <Thumbnail>
          <h3>{item.name}</h3>
          <p>Price: { item.price }</p>
          <p>Available: { item.count }, in play: { item.total }</p>
          <p>
            <Button bsStyle="primary">Bid</Button>
          </p>
        </Thumbnail>
      </Col>
    );
  }
}
