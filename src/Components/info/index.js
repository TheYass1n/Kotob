import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import rAFTimeout from '../../Components/rAFTimeout';
import Close from '../../Components/closeInfo/index.js';
import './index.scss';
import './transition.scss';




class Info extends PureComponent {
  constructor() {
    super();

    this.transition = React.createRef();
    this.view = React.createRef();
    this.close = React.createRef();
    this.onInfoClose = this.onInfoClose.bind(this);
  }

  onInfoClose() {
    rAFTimeout(() => this.view.current.classList.remove('animate-in'), 1);
    rAFTimeout(() => this.close.current.hide(), 20);
    rAFTimeout(() => this.transition.current.classList.remove('animate-in'), 100);
    rAFTimeout(() => {
      this.props.onInfoClose();
      this.view.current.setAttribute('aria-hidden', true);
    }, 110);
  }

  getStyle(show) {
    if (!show) {
      return '';
    }

    rAFTimeout(() => this.transition.current.classList.add('animate-in'), 1);

    rAFTimeout(() => this.close.current.animate(), 50);

    rAFTimeout(() => {
      this.view.current.classList.remove('hide');
      this.view.current.classList.add('animate-in');
      this.view.current.setAttribute('aria-hidden', false);
    }, 150);

    return '';
  }

  render() {
    return <Fragment>
      <div ref={this.transition} className="transition"></div>
      <section ref={this.view} className={`info ${this.getStyle(this.props.show)}`} aria-hidden={true}>
        <Close ref={this.close} onCloseClick={this.onInfoClose} />
        <h1>About</h1>
        <p>PWA Books Search Application made with React and Google Book API</p>
        <p>This is a personal project built in my spare time for learning purposes.</p>
        
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/iondrimba/react-weather-app" className="github" title="Github">
      </a>
      </section>
    </Fragment>
  }
}

Info.propTypes = {
  show: PropTypes.bool,
  onInfoClick: PropTypes.func,
  onInfoClose: PropTypes.func
};

export default Info;