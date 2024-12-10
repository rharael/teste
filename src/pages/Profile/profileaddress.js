import React, { useEffect, useState, useContext, useRef } from "react";
import { TouchableOpacity } from "react-native";
import { UserContext } from "../../utils/context/UserContext";
import Styles from "./styles";
import Icons from "../../assets/icons";

export default function ProfileAddress(){
	const { userData, updateUserData } = useContext(UserContext);
	const [activeField, setActiveField] = useState(null);
	const [editedData, setEditedData] = useState({ ...userData });

	const zipcodeInputRef = useRef(null);
	const streetInputRef = useRef(null);
	const districtInputRef = useRef(null);
	const stateInputRef = useRef(null);
	const cityInputRef = useRef(null);
	const scrollViewRef = useRef(null);

	const handleSave = (field) => {
		updateUserData({
			...userData,
			address: { ...userData.address, [field]: editedData[field] },
		});
		setActiveField(null);
		setCursorPosition(null);
		Keyboard.dismiss();
	};

	const handleActivateField = (field, inputRef) => {
		setActiveField(field);

		scrollViewRef.current?.scrollTo({
			y: inputRef.current?.offsetTop || 0,
			animated: true,
		});

		const textLength = editedData[field]?.length || 0;
		setTimeout(() => {
			inputRef.current?.focus();
			inputRef.current?.setNativeProps({
				selection: { start: textLength, end: textLength },
			});
		}, 250);
};

  return (
    <Styles.Container>
		<Styles.InputScrollContainer vertical showsVerticalScrollIndicator={false}>
		<Styles.EmptySpace/>
		<Styles.LabelContainer>
			<Styles.Label>CEP</Styles.Label>
		</Styles.LabelContainer>
		<Styles.InputContainer
                style={{
                    borderColor: activeField === "zipcode" ? "#FE724C" : "#DCDCDC",
                }}
            >
                <Icons.AddressPin width={18} height={18} color="#FE724C" />
                <Styles.Input ref={zipcodeInputRef} editable={activeField === "zipcode"} value={userData.address.zipcode}
					                    onChangeText={(text) =>
											setEditedData((prev) => ({ ...prev, zipcode: text }))
										}
										onFocus={() => setActiveField("zipcode")}
										/>
                <TouchableOpacity
                    onPress={() =>
                        activeField === "zipcode"
						? handleSave("zipcode")
						: handleActivateField("zipcode", zipcodeInputRef)
                    }
                >
                    {activeField === "zipcode" ? (
                        <Icons.Save width={20} height={20} />
                    ) : (
                        <Icons.Edit width={20} height={20} />
                    )}
                </TouchableOpacity>
            </Styles.InputContainer>

			<Styles.LabelContainer>
				<Styles.Label>Logradouro</Styles.Label>
			</Styles.LabelContainer>
			<Styles.InputContainer
				style={{
					borderColor: activeField === "street" ? "#FE724C" : "#DCDCDC",
				}}
			>
				<Icons.AddressPin width={18} height={18} color="#FE724C" />
				<Styles.Input ref={streetInputRef} editable={activeField === "street"} value={userData.address.street}
					                    onChangeText={(text) =>
											setEditedData((prev) => ({ ...prev, street: text }))
										}
										onFocus={() => setActiveField("street")}
										/>
				<TouchableOpacity
					onPress={() =>
						activeField === "street"
							? handleSave("street")
                            : handleActivateField("street", streetInputRef)
					}
				>
					{activeField === "street" ? (
						<Icons.Save width={20} height={20} />
					) : (
						<Icons.Edit width={20} height={20} />
					)}
				</TouchableOpacity>
			</Styles.InputContainer>

			<Styles.LabelContainer>
				<Styles.Label>Bairro</Styles.Label>
			</Styles.LabelContainer>
			<Styles.InputContainer
				style={{
					borderColor: activeField === "district" ? "#FE724C" : "#DCDCDC",
				}}
			>
				<Icons.AddressPin width={18} height={18} color="#FE724C" />
				<Styles.Input ref={districtInputRef} editable={activeField === "district"} value={userData.address.district} 
					                    onChangeText={(text) =>
											setEditedData((prev) => ({ ...prev, district: text }))
										}
										onFocus={() => setActiveField("district")}
										/>
				<TouchableOpacity
					onPress={() =>
						activeField === "district"
							? handleSave("district")
                            : handleActivateField("district", districtInputRef)
					}
				>
					{activeField === "district" ? (
						<Icons.Save width={20} height={20} />
					) : (
						<Icons.Edit width={20} height={20} />
					)}
				</TouchableOpacity>
			</Styles.InputContainer>

			<Styles.LabelContainer>
				<Styles.Label>Estado</Styles.Label>
			</Styles.LabelContainer>
			<Styles.InputContainer
				style={{
					borderColor: activeField === "state" ? "#FE724C" : "#DCDCDC",
				}}
			>
				<Icons.AddressPin width={18} height={18} color="#FE724C" />
				<Styles.Input ref={stateInputRef} editable={activeField === "state"} value={userData.address.state} 
					                    onChangeText={(text) =>
											setEditedData((prev) => ({ ...prev, state: text }))
										}
										onFocus={() => setActiveField("state")}
										/>
				<TouchableOpacity
					onPress={() =>
						activeField === "state"
							? handleSave("state")
                            : handleActivateField("state", stateInputRef)
					}
				>
					{activeField === "state" ? (
						<Icons.Save width={20} height={20} />
					) : (
						<Icons.Edit width={20} height={20} />
					)}
				</TouchableOpacity>
			</Styles.InputContainer>

			<Styles.LabelContainer>
				<Styles.Label>Cidade</Styles.Label>
			</Styles.LabelContainer>
			<Styles.InputContainer
				style={{
					borderColor: activeField === "city" ? "#FE724C" : "#DCDCDC",
				}}
			>
				<Icons.AddressPin width={18} height={18} color="#FE724C" />
				<Styles.Input ref={cityInputRef} editable={activeField === "city"} value={userData.address.city}
					                    onChangeText={(text) =>
											setEditedData((prev) => ({ ...prev, city: text }))
										}
										onFocus={() => setActiveField("city")}
										 />
				<TouchableOpacity
					onPress={() =>
						activeField === "city"
							? handleSave("city")
                            : handleActivateField("city", cityInputRef)
					}
				>
					{activeField === "city" ? (
						<Icons.Save width={20} height={20} />
					) : (
						<Icons.Edit width={20} height={20} />
					)}
				</TouchableOpacity>
				</Styles.InputContainer>
		<Styles.EmptySpace/>
		<Styles.EmptySpace/>
		<Styles.EmptySpace/>
		</Styles.InputScrollContainer>
    </Styles.Container>
  );
};