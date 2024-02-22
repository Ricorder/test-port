import MapView, { Callout, MarkerAnimated, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';
import { useGetTransports } from '../../../shared/api/useGetTransports';
import { ITs, StackParamList } from '../../../shared/types/interfases';
import { REGION } from '../../../shared/constants/region';
import { Link, useNavigation } from 'expo-router';

export default function Map() {
	const {data, isLoading} = useGetTransports()
	const { navigate } = useNavigation()
	const onMarkerSelect = (m: ITs): void => {
		navigate('Transport', {
			id: m.id,
			driver: m.driver,
			name: m.name,
			category: m.category,
			tel: m.tel,
			latitude: m.coordinates.latitude,
			longitude: m.coordinates.longitude,
			latitudeDelta: m.coordinates.latitudeDelta,
			longitudeDelta: m.coordinates.longitudeDelta,
		})
	}
	return (
		<View style={styles.container}>
			<MapView
				style={StyleSheet.absoluteFill}
				provider={PROVIDER_GOOGLE}
				region={REGION}
				showsScale
			>
				{(!isLoading && data) && data.map((marker: ITs) => (
					<MarkerAnimated
						key={marker.id}
						coordinate={marker.coordinates}
					>
						<Callout onPress={() => onMarkerSelect(marker)}>
							<View>
								<Text>Имя водителя: {marker.driver}</Text>
								<Text>Название ТС: {marker.name}</Text>
								<Text>Категория ТС: {marker.category}</Text>
							</View>
						</Callout>
					</MarkerAnimated>
				))}
			</MapView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});
