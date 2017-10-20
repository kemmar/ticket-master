import styles from './_App.scss';

import React from 'react';
import TicketStore from '../../stores/TicketStore';
import Body from '../Body/Body';

function getAppState() {
  return {
    items: TicketStore.getAll()
  };
}

export default class App extends React.Component {

  state = getAppState()

  componentDidMount() {
    TicketStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    TicketStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(getAppState());
  }

  render() {
    return (
      <div className={styles.app}>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        <Body items={this.state.items} />
      </div>
    );
  }
}
