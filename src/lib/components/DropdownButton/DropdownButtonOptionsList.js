import React from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import OptionsList from '../OptionsList';

import getPortalContainer from '../../helpers/getPortalContainer';


export default class DropdownButtonOptionsList extends OptionsList {
  render() {
    const { children, className, style } = this.props;
    return createPortal((
      <div style={style}  ref={this.container}
        className={classnames('options wrc-dropdown-button__options', className)}>
        <ul className="options__list wrc-dropdown-button__options-list" ref={this.list}>
          {children}
        </ul>
      </div>
    ), getPortalContainer());
  }
}