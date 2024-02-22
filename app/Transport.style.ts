import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
	container: {
		height: '100%',
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	tc: {
		width: '60%',
		marginTop: 20
	},
	rightCol: {
		flexDirection: 'column',
		alignSelf: 'center',
		borderTopRightRadius: 4,
		borderBottomRightRadius: 4,
	},
	leftCol: {
		flexDirection: 'column',
		alignSelf: 'center',
		borderTopLeftRadius: 4,
		borderBottomLeftRadius: 4,
	},
	row: {
		marginVertical: 1,
		height: 'auto',
		borderWidth: 1,
		borderColor: '#ddd',
		padding: 5,
		backgroundColor: '#E0FFFF'
	},
	rowTopLeft: {
		borderTopLeftRadius: 8
	},
	rowTopRight: {
		borderTopRightRadius: 8
	},
	rowBottomLeft: {
		borderBottomLeftRadius: 8
	},
	rowBottomRight: {
		borderBottomRightRadius: 8
	},
	text: {
		fontSize: 12
	},
	map: {
		marginBottom: 10,
		width: '90%',
		height: '50%',
		borderRadius: 8
	},
	messages: {
		flex: 1,
		width: '60%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
});
