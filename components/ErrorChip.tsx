import React, { useState } from 'react';
import ChipBase from './common/ChipBase';
import { ActivityIndicator, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6'

export default function ErrorChip() {
	return <ChipBase
			containerStyle={ styles.container }
			icon={ <Icon name="circle-exclamation" size={24} color='#FAFAFA'/> }
			iconContainerStyle={ styles.iconContainer }
			title="Oops, something went wrong!"
			titleStyle={ styles.title }
			subtitle="Click to try again."
			subtitleStyle={ styles.subtitle }
		/>
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#EF4444'
	},
	iconContainer: {
		backgroundColor: '#F37C7C'
	},
	title: {
		color: '#FAFAFA'
	},
	subtitle: {
		color: '#D4D4D8'
	}
})