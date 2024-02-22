import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useLocalSearchParams } from 'expo-router';

export interface StackParamList {
	Transport: {
		id: string;
		driver: string;
		name: string;
		category: string;
		tel: string;
		latitude: number;
		longitude: number;
		latitudeDelta: number;
		longitudeDelta: number;
	};
};

export type propsStack = NativeStackNavigationProp<StackParamList>


export interface ITs extends Array<any> {
	id: string;
	name: string;
	driver: string;
	category: string;
	tel: string;
	coordinates: {
		latitude: number;
		longitude: number;
		latitudeDelta: number;
		longitudeDelta: number;
	}
}

export interface ReturnHook {
	error?: unknown;
	isLoading: boolean;
	data?: ITs;
}

export interface IlL {
	en: {
		name: string;
		nativeName: string;
	},
	ru: {
		name: string;
		nativeName: string;
	}
}