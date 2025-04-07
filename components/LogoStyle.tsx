import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6'

type LogoStyleProps = {
	src?: number,
	srcContainerStyle?: ViewStyle
	caption: string,
	captionStyle?: TextStyle
}

export default function LogoStyle({
	src,
	srcContainerStyle,
	caption,
	captionStyle
}: LogoStyleProps) {
	return <View style={styles.container}>
		<View style={[styles.srcContainer, srcContainerStyle]}>
			{src && <Image source={src} style={styles.image} /> || <Icon name="ban" size={40} color='#fff' style={styles.icon}/>}
		</View>
		<Text style={[styles.caption, captionStyle]}>
			{caption}
		</Text>
	</View>
}

const styles = StyleSheet.create({
	container: {
		gap: 6,
		alignItems: 'center',
		marginHorizontal: 6
	},
	srcContainer: {
		width: 90,
		height: 90,
		borderRadius: 16,
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#282C57'
	},
	image: {
		width: '100%',
		height: '100%',
		borderRadius: 16
	},
	icon: {
		transform: [
			{rotate: '90deg'}
		]
	},
	caption: {
		fontSize: 13,
		color: '#71717A',
		fontWeight: '400'
	}
});