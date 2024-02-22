import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useGetTransports } from '../../../shared/api/useGetTransports';
import { s } from './Tc.style';
import { Col, Row, Grid } from "react-native-easy-grid";
import { SelectList } from 'react-native-dropdown-select-list';
import { useState } from 'react';
import { ITs } from '../../../shared/types/interfases';
import { useNavigation } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Tc () {
	const {data, error, isLoading} = useGetTransports()
	const [selected, setSelected] = useState("");
	const { navigate } = useNavigation()
	const { t } = useTranslation();
	const type = [
		{key:'Все', value: `${t('all')}`},
		{key:'Грузовой', value:`${t('cargo')}`},
		{key:'Пассажирский', value:`${t('passenger')}`},
		{key:'Спецтранспорт', value:`${t('special-transport')}`},
  ]
	const onMarkerSelect = (m) => {
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
		<View style={s.container}>
			{error && <Text>На сервере неполадки</Text>}
			<SelectList
				maxHeight={150}
				search={false}
				setSelected={setSelected}
				data={type}
				placeholder={`${t('vehicle-category')}`}
				boxStyles={s.select}
			/>
			{!isLoading ? (
				<Grid style={s.tc}>
					<Row size={-1} style={s.headerRow}>
						<Col style={[s.cell, s.leftCell, s.headerColor]}>
								<Text style={s.header}>{t('name-tv')}</Text>
						</Col>
						<Col style={[s.cell, s.headerColor]}>
								<Text style={s.header}>{t('driver-name')}</Text>
						</Col>
						<Col style={[s.cell, s.rightCell, s.headerColor]}>
								<Text style={s.header}>{t('vehicle-category')}</Text>
						</Col>
					</Row>
						<FlatList
							data={
								selected && (selected !== 'Все')
								? data && data.filter((el: ITs) => el.category === selected)
								: data
							}
							renderItem={({ item }: { item: ITs }) =>
								<Row size={1} style={s.row} onPress={() => onMarkerSelect(item)}>
									<Col style={[s.cell, s.leftCell, s.textColor]}>
											<Text style={s.text}>{item.id} {item.name}</Text>
									</Col>
									<Col style={[s.cell, s.textColor]}>
											<Text style={s.text}>{item.driver}</Text>
									</Col>
									<Col style={[s.cell, s.rightCell, s.textColor]}>
											<Text style={s.text}>{item.category}</Text>
									</Col>
								</Row>
							}
						/>
				</Grid>
			) : (
				<ActivityIndicator />
			)}
		</View>
	);
}
