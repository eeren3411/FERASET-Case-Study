
import React, { useState } from 'react';
import ChipBase from './common/ChipBase';
import { Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SuccessChip() {
	return <LinearGradient
		colors={['#943DFF', '#2938DC']}
		end={{ x: 0, y: 0.5 }}
		start ={{ x: 1, y: 0.5 }}
		style={ styles.gradient }
	>
		<ChipBase
			icon={ <Image source={require('@assets/mock_logo.png')} style={ styles.logo }/> }
			title="Your Design is Ready!"
			titleStyle={ styles.title }
			subtitle="Tap to see it."
			subtitleStyle={ styles.subtitle }
		/>
	</LinearGradient>;
}

const styles = StyleSheet.create({
	gradient: {
		flex: 0,
		overflow: 'hidden',
		borderRadius: 16
	},
	logo: {
		width: '100%',
		height: '100%'
	},
	title: {
		color: '#FAFAFA'
	},
	subtitle: {
		color: '#D4D4D8'
	}
})