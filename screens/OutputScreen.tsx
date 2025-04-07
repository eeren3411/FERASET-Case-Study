import React from "react";

import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Image,
} from 'react-native'

import { commonStyles } from "@styles/common";

import ScreenContainer from "@components/common/ScreenContainer";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import OctiCons from "react-native-vector-icons/Octicons";

export default function OutputScreen({ navigation }: any) {
	return <ScreenContainer style={commonStyles.container}>
		<View style={styles.header}>
			<Text style={styles.headerText}>Your Design</Text>
			<TouchableOpacity
				onPress={() => navigation.navigate('InputScreen')}
			>
				<MaterialCommunityIcons name="close" size={40} color='#fff'/>
			</TouchableOpacity>
		</View>
		<View style={styles.body}>
			<Image
				source={require('@assets/mock_logo.png')}
				style={styles.image}
				resizeMode="cover"
			/>
			<View style={styles.infoBox}>
				<View style={styles.infoHeader}>
					<Text style={styles.infoHeaderTitle}>Prompt</Text>
					<View style={styles.infoHeaderCopy}>
						<OctiCons name="copy" size={16} color='#A1A1AA'/>
						<Text style={styles.infoHeaderCopyText}>Copy</Text>
					</View>
				</View>
				<Text style={styles.infoText}>Lorem ipsum dolor sit amet</Text>
				<View style={styles.infoLabel}>
					<Text style={styles.infoLabelText}>Monogram</Text>
				</View>
			</View>
		</View>
	</ScreenContainer>;
}

const styles = StyleSheet.create({
	header: {
		justifyContent: 'space-between',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerText: {
		fontSize: 22,
		fontWeight: '800',
		color: '#FAFAFA',
		paddingVertical: 12,
	},
	body: {
		paddingVertical: 12,
		gap: 24,
	},
	image: {
		width: '100%',
		height: undefined,
		aspectRatio: 1,
		borderRadius: 16
	},
	infoBox: {
		gap: 12,
		backgroundColor: '#27272A',
		borderRadius: 12,
		padding: 12
	},
	infoHeader: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	infoHeaderTitle: {
		color: '#FAFAFA',
		fontSize: 15,
		fontWeight: '700'
	},
	infoHeaderCopy: {
		display: 'flex',
		flexDirection: 'row',
		gap: 8,
		alignItems: 'center'
	},
	infoHeaderCopyText: {
		fontSize: 11,
		fontWeight: '400',
	},
	infoText: {
		fontSize: 16,
		fontWeight: '400',
		color: '#FAFAFA',
	},
	infoLabel: {
		borderRadius: 50,
		paddingVertical: 4,
		paddingHorizontal: 8,
		backgroundColor: '#3D3C47',
		alignSelf: 'flex-start'
	},
	infoLabelText: {
		fontSize: 12,
		fontWeight: '400',
		color: '#FAFAFA',
	}
});