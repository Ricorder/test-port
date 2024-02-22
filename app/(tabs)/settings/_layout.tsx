import { Stack } from 'expo-router';

export default function () {
	return (
		<Stack>
				<Stack.Screen name='Settings' options={{headerShown: false}} />
			</Stack>
	);
}
