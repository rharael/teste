import React from 'react';
import Svg, { Rect, Circle } from 'react-native-svg';
import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const SwitchBase = ({ backgroundColor }) => (
	<StyledBase>
		<Svg width="40" height="22" viewBox="0 0 39 22">
			<Rect
			  x="0"
			  y="0"
			  width="40"
			  height="22"
			  rx="12"
			  fill={backgroundColor}
			/>
		</Svg>
	</StyledBase>
);

export const CircleSVG = () => (
	<Svg width="18" height="18" viewBox="0 0 18 18">
		<Circle cx="9" cy="9" r="9" fill="white" />
	</Svg>
);

const StyledBase = styled.View`
	width: 40px;
	height: 22px;
	justify-content: center;
	align-items: center;
	position: relative;
`;

export const SwitchCircle = styled(Animated.View)`
	position: absolute;
`;

export const PressableWrapper = styled.Pressable`
	width: 39px;
	height: 22px;
	position: 'relative'
`;