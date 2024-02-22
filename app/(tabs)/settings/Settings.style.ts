import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	button: {
		backgroundColor: '#6258e8',
		padding: 10,
		borderRadius: 3,
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
	},
	text: {
		marginBottom: 100,
		fontSize: 18,
		color: 'white',
	},
	languagesList: {
		flex: 1,
		justifyContent: 'center',
		padding: 10,
		backgroundColor: '#6258e8',
	},
	languageButton: {
		padding: 10,
		borderBottomColor: '#dddddd',
		borderBottomWidth: 1,
	},
	lngName: {
		fontSize: 16,
		color: 'white',
	},
});
