import React, { Component } from 'react';
import { View } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';
import {ToastContainer as Toast} from './ToastContainer';
import {ActionSheetContainer as ActionSheet} from './Actionsheet';
import {Text} from './Text';

class Container extends Component {
  render() {
    return (
      <View ref={c => this._root = c} {...this.props}>
        {this.props.children}
        <Toast ref={ (c) => {Toast.toastInstance = c;}} />
        <ActionSheet ref={ (c) => {ActionSheet.actionsheetInstance = c;}} />
      </View>
    );
  }
}

Container.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object
};

const StyledContainer = connectStyle('NativeBase.Container', {}, mapPropsToStyleNames)(Container);

export {
  StyledContainer as Container,
};
