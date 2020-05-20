export default theme => ({
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

	btnFull: {
		height: 48,
		backgroundColor: theme.color.MAIN,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		flex: 1,
		flexDirection: 'row',
	},
	textBtnFull: {
		color: theme.color.WHITE,
		fontWeight: theme.simple.fontWeight.bold,
	},
});
