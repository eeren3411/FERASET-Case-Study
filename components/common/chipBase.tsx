import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type ChipBaseProps = {
	icon: React.ReactNode;
	iconContainerStyle?: ViewStyle;
	title: string;
	subtitle: string;
	containerStyle?: ViewStyle;
	onPress?: () => void;
};

export default function ChipBase({
	icon,
	iconContainerStyle,
	title,
	subtitle,
	containerStyle,
	onPress,
}: ChipBaseProps) {
	return (
		<View style={[styles.container, containerStyle]} onTouchEnd={onPress}>
			<View style={[styles.iconContainer, iconContainerStyle]}>
				{icon}
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subtitle}>{subtitle}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderRadius: 8,
		overflow: 'hidden',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	iconContainer: {
		width: 60,
		height: 60,
		alignItems: 'center',
		justifyContent: 'center'
	},
	textContainer: {
		padding: 10,
		flex: 1,
	},
	title: {
		fontWeight: '600',
		fontSize: 16,
		color: '#000',
	},
	subtitle: {
		fontSize: 12,
		color: '#666',
	},
});
