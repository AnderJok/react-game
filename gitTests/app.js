import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ButtonComponent = props = {
	return (
		<View>
			<Text style={styles.buttonTitle}>{props.buttonName}</Text>
			<Text>Press</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonTitle = {
		fontSize: 16,
	},
});

export default ButtonComponent;
