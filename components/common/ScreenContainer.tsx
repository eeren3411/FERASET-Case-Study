import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

type ScreenContainerProps = {
	children: React.ReactNode;
	style?: ViewStyle | ViewStyle[];
};

export default function ScreenContainer({ children, style }: ScreenContainerProps) {
	return (
		<LinearGradient
			colors={['#4B0082', '#FF1493', '#4B0082']}
			start={{ x: 1, y: 1 }}
			end={{ x: 0, y: 0.5 }}
			style={styles.gradient}
		>
			<SafeAreaView style={style}>
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
