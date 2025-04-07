import React, { useState, useEffect } from 'react';
import { 
	StyleSheet,
	View,	
	Text,
	TextInput,
	FlatList,
	TouchableOpacity,
	Animated
 } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { createEntry, listen } from '@myFirebase/controller';

import ScreenContainer from '@components/common/ScreenContainer';

import { commonStyles } from '@styles/common';

import PendingChip from '@components/PendingChip';
import SuccessChip from '@components/SuccessChip';
import ErrorChip from '@components/ErrorChip';

import LogoStyle from '@components/LogoStyle';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type StyleItem = {
	caption: string,
	img?: number // Require(png) returns a number?
}

const LogoStyles: StyleItem[] = [
	{
		caption: "No Style",
		img: undefined,
	},
	{
		caption: "Monogram",
		img: require('@assets/Monogram.png')
	},
	{
		caption: "Abstract",
		img: require('@assets/Abstract.png')
	},
	{
		caption: "Mascot",
		img: require('@assets/Mascot.png')
	}
]

const InputScreen = ({ navigation }: any) => {
	const [status, setStatus] = useState(0);
	const [slideAnim, setSlideAnim] = useState(new Animated.Value(-50));

	useEffect(() => {
		if (status == 0) {
			setSlideAnim(new Animated.Value(-30));
			return;
		}

		Animated.timing(slideAnim, {
			toValue: 0,
			duration: 200,
			useNativeDriver: true
		}).start()
	}, [status])

	const [promptFocused, setPromptFocused] = useState(false);
	const [prompt, setPrompt] = useState('');
	const maxLength = 500;

	const handleSurprise = () => {
		setPrompt("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
	}

	const [selectedStyle, setSelectedStyle] = useState(0);

	const [timeRemaining, setTimeRemaining] = useState(0);

	const renderChip = () => {
		switch (status) {
			case 1:
				return <PendingChip time={timeRemaining} />;
			case 2:
				return <SuccessChip />;
			case -1:
				return <ErrorChip />;
			default:
				return null
		}
	}

	const handleGenerate = () => {
		createEntry({ prompt: prompt, style: LogoStyles[selectedStyle].caption }).then(id => {
			setStatus(1)
			
			const unsub = listen(id, (data) => {
				setTimeRemaining(data.remainingTime);

				if (data.imgUrl) {
					setStatus(2);
					navigation.navigate('OutputScreen', { 
						entryId: id,
						imgUrl: data.imgUrl,
						prompt: data.prompt,
						style: data.style
					});
					unsub();
				}
			})
		}).catch((e) => {
			console.log(e);
			setStatus(-1);

			setTimeout(() => {
				setStatus(0);
			}, 3000)
		})
	}

	return (
		<ScreenContainer style={commonStyles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>AI Logo</Text>
			</View>
			<View style={styles.body}>
				<Animated.View style={{ transform: [{ translateY: slideAnim }] }}>
					{renderChip()}
				</Animated.View>
				<View style={styles.promptBox}>
					<View style={styles.promptHeader}>
						<Text style={styles.promptHeaderText}>Enter Your Prompt</Text>
						<TouchableOpacity onPress={handleSurprise}>
							<View style={styles.promptHeaderSurprise}>
								<Text style={styles.promptHeaderSurpriseText}>🎲</Text>
								<Text style={styles.promptHeaderSurpriseText}>Surprise Me</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={[styles.promptInputBox, promptFocused && styles.promptInputBoxOnFocus]}>
						<TextInput 
							readOnly={status == 1}
							style={[styles.input]}
							onFocus={() => setPromptFocused(true)}
							onBlur={() => setPromptFocused(false)}
							multiline={true}
							textAlignVertical='top'
							placeholder='A blue lion logo reading ‘HEXA’ in bold letters'
							placeholderTextColor={'#71717A'}
							value={prompt}
							onChangeText={setPrompt}
							maxLength={maxLength}
						/>
						<Text style={styles.characterCounter}>
							{`${prompt.length}/${maxLength}`}
						</Text>
					</View>
				</View>
				<View style={styles.LogoStyle}>
					<Text style={styles.LogoStyleText}>Logo Style</Text>
					<FlatList<StyleItem>
						data={LogoStyles}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						renderItem={({ item, index }) => (
							<TouchableOpacity
								disabled={index === selectedStyle || status === 1}
								onPress={() => setSelectedStyle(index)}
							>
								<LogoStyle
									src={item.img}
									srcContainerStyle={index === selectedStyle && styles.selectedStyleContainer || undefined}
									caption={item.caption}
									captionStyle={index === selectedStyle && styles.selectedStyleCaption || undefined}
								/>
							</TouchableOpacity>
						)}
					/>
				</View>
			</View>
			<View style={styles.footer}>
				<TouchableOpacity
					disabled={status == 1 || prompt.length == 0}
					style={styles.generateButton}
					activeOpacity={0.6}
					onPress={handleGenerate}
				>
					<LinearGradient
						colors={['#943DFF', '#2938DC']}
						start={{ x: 1, y: 0.5 }}
						end={{ x: 0, y: 0.5 }}
						style={[StyleSheet.absoluteFillObject, styles.buttonGradient]}
					>
						<Text style={styles.generateButtonText}>Create</Text>
						<Icon name="star-shooting" size={24} color='#FAFAFA'/>
					</LinearGradient>
				</TouchableOpacity>
			</View>
		</ScreenContainer>
	);
};

const styles = StyleSheet.create({
	header: {
		padding: 12,
		alignItems: 'center',
	},
	headerText: {
		fontSize: 17,
		color: '#FAFAFA',
	},
	body: {
		gap: 24,
		flexGrow: 1
	},
	promptBox: {
		gap: 12
	},
	promptHeader: {
		justifyContent: 'space-between',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	promptHeaderText: {
		color: '#FAFAFA',
		fontSize: 20,
	},
	promptHeaderSurprise: {
		display: 'flex',
		flexDirection: 'row',
		gap: 8
	},
	promptHeaderSurpriseText: {
		color: '#FAFAFA',
		fontSize: 13,
	},
	promptInputBox: {
		backgroundColor: '#27272A',
		borderRadius: 16,
		overflow: 'hidden',
		height: 175,
		padding: 12,
		borderWidth: 1,
		borderColor: '#27272A'
	},
	promptInputBoxOnFocus: {
		borderColor: 'white'
	},
	input: {
		color: '#FAFAFA',
		height: '100%',
		paddingTop: 0,
		fontSize: 16
	},
	characterCounter: {
		color: '#71717A',
		position: 'absolute',
		bottom: 12,
		left: 12
	},
	LogoStyle: {
		gap: 12,
	},
	LogoStyleText: {
		color: '#FAFAFA',
		fontSize: 20,
	},
	selectedStyleContainer: {
		borderWidth: 1,
		borderColor: 'white',
	},
	selectedStyleCaption: {
		color: '#FAFAFA',
		fontWeight: '700'
	},
	footer: {
		alignItems: 'center',
		width: '100%',
		paddingVertical: 24,
		paddingHorizontal: 12,
		overflow: 'hidden'
	},
	buttonGradient: {
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		gap: 8
	},
	generateButton: {
		width: '100%',
		height: 56,
		borderRadius: 50,
		overflow: 'hidden',
	},
	generateButtonText: {
		fontSize: 17,
		fontWeight: '800',
		color: '#FAFAFA'
	}
});

export default InputScreen;
