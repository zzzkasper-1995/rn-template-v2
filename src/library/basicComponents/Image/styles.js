import {StyleSheet} from 'react-native';

export default theme =>
	StyleSheet.create({
		image: {
			// width: 90,
			// height: 72,
			// backgroundColor: theme.color.GRAY_DARK,
		},
		text: {
			fontWeight: theme.simple.fontWeight.semibold,
			fontSize: 24,
			color: theme.color.WHITE,
		},
		reserveView: {
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: theme.color.IMAGE_DUMMY,
		},
		dummy: {
			backgroundColor: theme.color.DUMMY,
		},
		absolute: {
			position: 'absolute',
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
		},
	});
