import {StyleSheet} from 'react-native';

export default theme =>
	StyleSheet.create({
		container: {
			flexDirection: 'row',
		},
		icon: {
			marginRight: 8,
			width: 16,
			height: 16,
		},
		inButtonContainer: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'row',
		},

		btnSimple: {},
		textBtnSimple: {
			fontSize: 17,
			color: theme.color.BLUE_BTN_SIMPLE,
		},
	});
