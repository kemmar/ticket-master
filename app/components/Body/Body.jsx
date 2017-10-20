import styles from './_Body.scss';
import React from 'react';
import Search from '../Search/Search';
import Ticket from '../Ticket/Ticket';
import Footer from '../Footer/Footer';
import Grid  from '../../../node_modules/react-bootstrap/lib/Grid';
import Row  from '../../../node_modules/react-bootstrap/lib/Row';


let {PropTypes} = React;

export default class Body extends React.Component {

  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    let items = this.props.items;
    return (
      <div className={styles.body} container={this}>
        <Grid>
          <Row>
            <h1 className={styles.header}>Ticket Master</h1>
          </Row>
          <Row> <Search /> </Row>
          <Row>
             { items.map(item => {
              return (<Ticket item={item} />);
            })}
          </Row>
          <Row> <Footer /></Row>
        </Grid>
      </div>
    );
  }
}
