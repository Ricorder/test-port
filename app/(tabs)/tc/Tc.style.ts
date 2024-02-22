import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	tc: {
		width: '90%',
	},
	select: {
		marginVertical: 5,
	},
	cell: {
		borderWidth: 1,
		borderColor: '#ddd',
		flex: 1,
		padding: 5,
	},
	rightCell: {
		borderTopRightRadius: 4,
		borderBottomRightRadius: 4,
	},
	leftCell: {
		borderTopLeftRadius: 4,
		borderBottomLeftRadius: 4,
	},
	header: {
		fontWeight: 'bold',
		fontSize: 12,
		paddingVertical: 5,
		textAlign: 'center'
	},
	headerRow: {
		marginVertical: 2,
	},
	headerColor: {
		backgroundColor: '#FFB6C1'
	},
	row: {
		marginVertical: 1,
	},
	textColor: {
		backgroundColor: '#E0FFFF'
	},
	text: {
		fontSize: 12
	}
});
