import {StyleSheet} from 'react-native';

export default theme =>
	StyleSheet.create({
		text: {
			fontSize: 14,
			color: theme.color.BLACK,
			letterSpacing: 0.32,
		},
		screen: theme.simple.screenSize,
		dummy: {
			backgroundColor: theme.color.DUMMY,
			color: theme.color.DUMMY,
		},
	});
