import React, {Component} from 'react';
import {Modal, Platform, ModalProps} from 'react-native';
import {Button} from '../Button';
import {View} from '../View';
import styles from './styles';

// For more details,
// https://reactnative.dev/docs/modal#__docusaurus

type Props = {
  renderForm?: Function,
  onRequestClose?: Function,
  transparent?: Boolean,
};

/**
 * @module Modal
 * @description модальное окно
 */
class WrapperModal extends Component<Props & ModalProps> {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  handleClose = () => {
    this.setState({modalVisible: false});
  };

  handleOpen = () => {
    this.setState({modalVisible: true});
  };

  onRequestClose = () => {
    const {onRequestClose} = this.props;

    if (onRequestClose) {
      onRequestClose();
    }
    this.handleClose();
  };

  render() {
    const {transparent, renderForm} = this.props;
    const {modalVisible} = this.state;

    const isIos = Platform.OS === 'ios';

    return (
      <Modal
        visible={modalVisible}
        transparent={transparent}
        animationType="fade"
        onRequestClose={this.onRequestClose}>
        <Button
          onAction={this.onRequestClose}
          style={[styles.missView, isIos && styles.missViewIos]}
          activeOpacity={1}>
          <View style={styles.contentWrap}>
            <Button activeOpacity={1} style={[styles.childrenView]}>
              {renderForm()}
            </Button>
          </View>
        </Button>
      </Modal>
    );
  }
}

WrapperModal.defaultProps = {
  renderForm: () => null,
  onRequestClose: () => {},
  transparent: true,
};

export default WrapperModal;
