import React, { useMemo } from 'react';
import ChipBase from './common/ChipBase';
import { ActivityIndicator, StyleSheet } from 'react-native';

type PendingProps = {
	time?: number
}

export default function PendingChip({ time }: PendingProps) {
	const subtitle = useMemo(() => {
		if (!time) {
			return "Creating Your Design..."
		}
		if (time < 60) {
			return `Ready in ${time} seconds.`
		}
		return `Ready in ${Math.floor(time / 60)} minutes.`
	}, [time])

	return <ChipBase
			containerStyle={ styles.container }
			icon={ <ActivityIndicator color="#fff"/> }
			iconContainerStyle={ styles.iconContainer }
			title="Creating Your Design..."
			titleStyle={ styles.title }
			subtitle={subtitle}
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