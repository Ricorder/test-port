import { Stack } from 'expo-router';

export default function () {
	return (
		<Stack>
				<Stack.Screen name='Map' options={{headerShown: false}} />
			</Stack>
	);
}
