/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {PropWrapper} from '@react-mdc/base';

import {BASE_CLASS_NAME} from './constants';

export const CLASS_NAME = `${BASE_CLASS_NAME}__toolbar-spacer`;

export type Props<P> = WrapperProps<P> & {
  className?: string
};

export default class Content<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    wrap: <div />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      className,
      ...props
    } = this.props;
    className = classNames(
      CLASS_NAME,
      className
    );
    props = {
      ...props,
      className
    };
    return props;
  }
}