import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import { SwitchBase, SwitchCircle, CircleSVG, PressableWrapper } from './SwitchComponents';

const Switch = ({ value, onValueChange }) => {
	const [animatedValue] = useState(new Animated.Value(value ? 20 : 2));

	useEffect(() => {
		Animated.timing(animatedValue, {
		  toValue: value ? 20 : 3,
		  duration: 300,
		  useNativeDriver: false,
		}).start();
	}, [value]);

	const backgroundColor = value ? '#FE724C' : '#767676';
	const handlePress = () => {
	  onValueChange(!value);
	};

	return (
		<PressableWrapper onPress={handlePress}>
			<SwitchBase backgroundColor={backgroundColor} />
				<SwitchCircle style={{ transform: [{ translateX: animatedValue }, { translateY: 2 }] }}>
					<CircleSVG />
				</SwitchCircle>
		</PressableWrapper>
  );
};

export default Switch;
