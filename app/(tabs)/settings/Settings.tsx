import { useState } from 'react';
import {
	SafeAreaView,
	Text,
	TouchableOpacity,
	Modal,
	View,
	FlatList,
} from 'react-native';
import i18next, {languageResources} from '../../../shared/services/i18next';
import {useTranslation} from 'react-i18next';
import languagesList from '../../../shared/services/languageslist.json';
import { s } from './Settings.style';
import { IlL } from '../../../shared/types/interfases';

export default function Settings () {
	const [visible, setVisible] = useState<boolean>(false);
	const { t } = useTranslation();

	const changeLng = (lng: string): void => {
		i18next.changeLanguage(lng);
		setVisible(false);
	};


	return (
		<SafeAreaView style={s.container}>
			<Modal visible={visible} onRequestClose={() => setVisible(false)}>
				<View style={s.languagesList}>
					<FlatList
						data={Object.keys(languageResources)}
						renderItem={({item}: {item: string}) => (
							<TouchableOpacity
								style={s.languageButton}
								onPress={() => changeLng(item)}>
								<Text style={s.lngName}>
									{languagesList[item as keyof IlL].nativeName}
								</Text>
							</TouchableOpacity>
						)}
					/>
				</View>
			</Modal>
			<TouchableOpacity style={s.button} onPress={() => setVisible(true)}>
				<Text style={s.buttonText}>{t('change-language')}</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};
