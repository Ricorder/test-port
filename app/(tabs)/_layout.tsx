import { Tabs } from 'expo-router';
import TruckIcon from '../../assets/Truck';
import SettingsIcon from '../../assets/Settings';
import MapIcon from '../../assets/Map';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

export default function () {
	const { t } = useTranslation();
	const queryClient = new QueryClient();
	const commonOptions = {
		headerTitleAlign: 'center',
		tabBarShowLabel: false,
	}
	const optionsTC = {
		...commonOptions,
		title: `${t('vehicles')}`,
		tabBarIcon: () => <TruckIcon />
	}
	const mapTC = {
		...commonOptions,
		title: `${t('map')}`,
		tabBarIcon: () => <MapIcon />
	}
	const settingsTC = {
		...commonOptions,
		title: `${t('settings')}`,
		tabBarIcon: () => <SettingsIcon />
	}
	return (
		<QueryClientProvider client={queryClient}>
			<Tabs>
				<Tabs.Screen name='tc' options={optionsTC} />
				<Tabs.Screen name='map' options={mapTC} />
				<Tabs.Screen name='settings' options={settingsTC} />
			</Tabs>
		</QueryClientProvider>
	);
}
