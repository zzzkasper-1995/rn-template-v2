import React, {Component} from 'react';
import {Modal as RNModal, Platform, StatusBar} from 'react-native';
import {Theme} from '../../Theme';
import {Button} from '../Button';
import {View} from '../View';
import Styles from './styles';

type Props = {
	renderForm?: Function,
	onRequestClose?: Function,
	transparent?: Boolean,
};

/**
 * @module Modal
 * @description модальное окно
 */
class Modal extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
		};
		this.styles = Theme.createStyles(Styles);
	}

	handleClose = () => {
		this.setState({modalVisible: false});
		if (Platform.OS !== 'ios') {
			StatusBar.setHidden(false);
		}
	};

	handleOpen = () => {
		this.setState({modalVisible: true});
		if (Platform.OS !== 'ios') {
			StatusBar.setHidden(true);
		}
	};

	onRequestClose = () => {
		const {onRequestClose} = this.props;

		if (onRequestClose) {
			onRequestClose();
		}
		this.handleClose();
	};

	render() {
		const {styles} = this;
		const {transparent, renderForm} = this.props;
		const {modalVisible} = this.state;

		const isIos = Platform.OS === 'ios';

		return (
			<RNModal
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
			</RNModal>
		);
	}
}

Modal.defaultProps = {
	renderForm: () => null,
	onRequestClose: () => {},
	transparent: true,
};

export {Modal};
