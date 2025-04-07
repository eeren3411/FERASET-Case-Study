import React, { useState } from 'react';
import ChipBase from './common/ChipBase';
import { ActivityIndicator, StyleSheet } from 'react-native';

export default function PendingChip() {
	return <ChipBase
			containerStyle={ styles.container }
			icon={ <ActivityIndicator color="#fff"/> }
			iconContainerStyle={ styles.iconContainer }
			title="Creating Your Design..."
			titleStyle={ styles.title }
			subtitle="Ready in 2 minutes"
			subtitleStyle={ styles.subtitle }
		/>
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#27272A'
	},
	iconContainer: {
		backgroundColor: '#181818'
	},
	title: {
		color: '#FAFAFA'
	},
	subtitle: {
		color: '#71717A'
	}
})