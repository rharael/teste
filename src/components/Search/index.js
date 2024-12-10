import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import styled from "styled-components/native";

const SvgInput = ({ placeholder, ...props }) => {
	const [isFocused, setIsFocused] = useState(false);

	return (
	<InputContainer>
		<Svg width={21} height={21} viewBox="0 0 17 17" fill="none">
		<Path
			d="M15.5271 16.1912C15.9296 16.5937 16.5509 15.9725 16.1484 15.5787L12.8671 12.2887C14.0184 11.0154 14.6547 9.35917 14.6521 7.6425C14.6521 3.80125 11.5284 0.677498 7.68714 0.677498C3.84589 0.677498 0.722137 3.80125 0.722137 7.6425C0.722137 11.4837 3.84589 14.6075 7.68714 14.6075C9.41964 14.6075 11.0209 13.9687 12.2459 12.91L15.5271 16.1912ZM1.59626 7.6425C1.59626 4.2825 4.33501 1.5525 7.68626 1.5525C11.0463 1.5525 13.7763 4.2825 13.7763 7.6425C13.7763 11.0025 11.0463 13.7325 7.68626 13.7325C4.33501 13.7325 1.59626 11.0025 1.59626 7.6425Z"
			fill={isFocused ? "#FE724C" : "#7C7C7C"}
		/>
		</Svg>
		<Input
		{...props}
		placeholder={placeholder}
		onFocus={() => setIsFocused(true)}
		onBlur={() => setIsFocused(false)}
		/>
	</InputContainer>
	);
};

const Input = styled.TextInput`
	flex: 1;
	height: 40px;
	padding-left: 30px;
	font-size: 16px;
`;

const InputContainer = styled.View`
	flex-direction: row;
	align-items: center;
	background-color: #f0f1f2;
	border-color: "#DCDCDC";
	border-radius: 8px;
	padding-horizontal: 10px;
	margin-bottom: 20px;
`;

export default SvgInput;
