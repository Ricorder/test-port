import { Linking, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import MapView, { MarkerAnimated, PROVIDER_GOOGLE } from 'react-native-maps';
import { REGION } from '../shared/constants/region';
import { Col, Row, Grid } from "react-native-easy-grid";
import { s } from './Transport.style';
import { Key } from 'react';
import WhatsaApp from '../assets/WhatsaApp';
import Phone from '../assets/Phone';
import { openURL } from 'expo-linking';
import { useTranslation } from 'react-i18next';

export default function Transport() {
	const {
		id,
		driver,
		name,
		category,
		tel,
		latitude,
		longitude,
		latitudeDelta,
		longitudeDelta
	} = useLocalSearchParams();
	const { t } = useTranslation();
	const coordinates = {
		latitude: Number(latitude),
		longitude: Number(longitude),
		latitudeDelta: Number(latitudeDelta),
		longitudeDelta: Number(longitudeDelta),
	}
	const goWhatsapp = () => {
		try {
			openURL(`http://api.whatsapp.com/send?phone=${tel}`)
		} catch (error) {
			console.error(error)
		}
	}
	const goTel = async () => {
		try {
			await openURL(`tel:${tel}`)
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<SafeAreaView style={s.container}>
			<Stack.Screen options={{headerTitle: '', headerBackTitleVisible: false}} />
			<Grid style={s.tc}>
				<Col style={s.leftCol}>
					<Row style={[s.row, s.rowTopLeft]}>
						<Text style={s.text}>{t('name-tv')}</Text>
					</Row>
					<Row style={s.row}>
						<Text style={s.text}>{t('driver-name')}</Text>
					</Row>
					<Row style={s.row}>
						<Text style={s.text}>{t('vehicle-category')}</Text>
					</Row>
					<Row style={[s.row, s.rowBottomLeft]}>
						<Text style={s.text}>{t('telephone')}</Text>
					</Row>
				</Col>
				<Col style={s.rightCol}>
					<Row style={[s.row, s.rowTopRight]}>
						<Text style={s.text}>{id} {name}</Text>
					</Row>
					<Row style={s.row}>
						<Text style={s.text}>{driver}</Text>
					</Row>
					<Row style={s.row}>
						<Text style={s.text}>{category}</Text>
					</Row>
					<Row style={[s.row, s.rowBottomRight]}>
						<Text style={s.text}>{tel}</Text>
					</Row>
				</Col>
			</Grid>
			<View style={s.messages}>
				<TouchableOpacity onPress={goWhatsapp}>
					<WhatsaApp />
				</TouchableOpacity>
				<TouchableOpacity onPress={goTel}>
					<Phone />
				</TouchableOpacity>
			</View>
			<MapView
				style={s.map}
				provider={PROVIDER_GOOGLE}
				region={REGION}
			>
				<MarkerAnimated
					key={id as Key}
					coordinate={coordinates}
				/>
			</MapView>
		</SafeAreaView>
	)
}
