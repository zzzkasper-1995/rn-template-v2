import {StyleSheet} from 'react-native';

export default theme =>
	StyleSheet.create({
		mainBtn: {
			height: 48,
			backgroundColor: theme.color.MAIN,
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: 4,
			flex: 1,
			flexDirection: 'row',
		},
		textBtn: {
			color: theme.color.WHITE,
			fontWeight: theme.simple.fontWeight.bold,
		},
		icon: {
			width: 16,
			height: 16,
		},
	});
