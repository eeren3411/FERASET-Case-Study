import React from 'react';
import { StyleSheet, ViewStyle, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

type ScreenContainerProps = {
	children: React.ReactNode;
	style?: ViewStyle | ViewStyle[];
};

export default function ScreenContainer({ children, style }: ScreenContainerProps) {
	return (
		<LinearGradient
			colors={['#0E0F1F', '#281B37', '#0E0F1F']}
			start={{ x: 1, y: 1 }}
			end={{ x: 0, y: 0.5 }}
			style={styles.gradient}
		>
			<SafeAreaView style={style}>
				<StatusBar barStyle="light-content" backgroundColor={'#0E0F1F'} />
				{children}
			</SafeAreaView>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	gradient: {
		flex: 1,
		paddingHorizontal: 24
	}
});
