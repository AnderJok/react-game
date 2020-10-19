import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ButtonComponent = props = {
	return (
		<View>
			<Text>{props.buttonName}</Text>
			<Text>Press</Text>
		</View>
	);
};

export default ButtonComponent;
