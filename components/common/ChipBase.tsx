import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type ChipBaseProps = {
	containerStyle?: ViewStyle;
	icon: React.ReactNode;
	iconContainerStyle?: ViewStyle;
	title: string;
	titleStyle?: TextStyle;
	subtitle: string;
	subtitleStyle?: TextStyle;
	onPress?: () => void;
};

export default function ChipBase({
	icon,
	iconContainerStyle,
	title,
	titleStyle,
	subtitle,
	subtitleStyle,
	containerStyle,
	onPress,
}: ChipBaseProps) {
	return (
		<View style={[styles.container, containerStyle]} onTouchEnd={onPress}>
			<View style={[styles.iconContainer, iconContainerStyle]}>
				{icon}
			</View>
			<View style={styles.textContainer}>
				<Text style={[styles.title, titleStyle]}>{title}</Text>
				<Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderRadius: 16,
		overflow: 'hidden',
		alignItems: 'center',
	},
	iconContainer: {
		width: 70,
		height: 70,
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
	},
	subtitle: {
		fontSize: 13,
	},
});
