import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from './closeicon';


export default class Notibar extends React.Component {

  static propTypes = {
    message: PropTypes.string,
    closeIconStyles: PropTypes.object,
  }


  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.storageKey = 'NOTIFICATIONBAR';

  }

  componentDidMount() {

    setTimeout(() => {
      this.open();
    }, 500);

  }

  close = e => {

    if (e) e.preventDefault();

    this.setState({
      open: false,
    });

    this.saveClosedState();

  };

  open() {

    if (this.isPermanentlyClosed()) return;

    this.setState({
      open: true,
    });


  }

  isPermanentlyClosed() {
    const notifications = JSON.parse(localStorage.getItem(this.storageKey));

    if (!notifications) return false;

    const notification = notifications.find(notice => {
      return notice.message === this.props.message && notice.closed;
    });

    if (notification) {
      return true;
    }

    return false;

  }

  saveClosedState() {
    const notifications = JSON.parse(localStorage.getItem(this.storageKey)) || [];

    notifications.push({
      message: this.props.message,
      closed: true,
    });

    localStorage.setItem(this.storageKey, JSON.stringify(notifications));

  }

  render() {

    return (
      <div className={`NotificationBar ${this.state.open ? 'open' : 'closed'}`}>
        <div className="NotificationBar__message">
          {this.props.message ? (
            <span dangerouslySetInnerHTML={{__html: this.props.message}} />
          ) :
            this.props.children
          }
        </div>
        <a
          className="NotificationBar__close"
          onClick={this.close}
          href="#">
          <CloseIcon {...this.props.closeIconStyles} />
        </a>
      </div>
    );

  }

}