import React, { useContext, useRef, useState } from "react";
import { TouchableOpacity, Keyboard } from "react-native";
import { UserContext } from "../../utils/context/UserContext";
import Styles from "./styles";
import Icons from "../../assets/icons";

export default function ProfileUser(){
	const { userData, updateUserData } = useContext(UserContext);
	const [activeField, setActiveField] = useState(null);
	const [editedData, setEditedData] = useState({ ...userData });

	const nameInputRef = useRef(null);
	const birthDateInputRef = useRef(null);
	const emailInputRef = useRef(null);
	const phoneInputRef = useRef(null);
	const scrollViewRef = useRef(null);

	const handleSave = (field) => {
		updateUserData({ ...userData, [field]: editedData[field] });
		setActiveField(null);
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
            <Styles.HeaderUser>
                <Styles.ProfileName>{userData.name}</Styles.ProfileName>
                <Styles.ProfileEmail>{userData.email}</Styles.ProfileEmail>
            </Styles.HeaderUser>

            <Styles.InputScrollContainer ref={scrollViewRef} showsVerticalScrollIndicator={false}>
            <Styles.LabelContainer>
                <Styles.Label>Nome...</Styles.Label>
            </Styles.LabelContainer>
            <Styles.InputContainer
                style={{
                    borderColor: activeField === "name" ? "#FE724C" : "#DCDCDC",
                }}
            >
                <Icons.UserProfile width={18} height={18} color="#FE724C" />
                <Styles.Input
                    ref={nameInputRef}
                    editable={activeField === "name"}
                    value={editedData.name}
                    onChangeText={(text) =>
                        setEditedData((prev) => ({ ...prev, name: text }))
                    }
                    onFocus={() => setActiveField("name")}
					
                />
                <TouchableOpacity
                    onPress={() =>
                        activeField === "name"
                            ? handleSave("name")
                            : handleActivateField("name", nameInputRef)
                    }
                >
                    {activeField === "name" ? (
                        <Icons.Save width={20} height={20} />
                    ) : (
                        <Icons.Edit width={20} height={20} />
                    )}
                </TouchableOpacity>
            </Styles.InputContainer>

            <Styles.LabelContainer>
                <Styles.Label>Data de nascimento</Styles.Label>
            </Styles.LabelContainer>
            <Styles.InputContainer
                style={{
                    borderColor: activeField === "birthDate" ? "#FE724C" : "#DCDCDC",
                }}
            >
                <Icons.Calendar width={18} height={18} color="#FE724C" />
                <Styles.Input
                    ref={birthDateInputRef}
                    editable={activeField === "birthDate"}
                    value={editedData.birthDate}
                    onChangeText={(text) =>
                        setEditedData((prev) => ({ ...prev, birthDate: text }))
                    }
                    onFocus={() => setActiveField("birthDate")}
					
                />
                <TouchableOpacity
                    onPress={() =>
                        activeField === "birthDate"
                            ? handleSave("birthDate")
                            : handleActivateField("birthDate", birthDateInputRef)
                    }
                >
                    {activeField === "birthDate" ? (
                        <Icons.Save width={20} height={20} />
                    ) : (
                        <Icons.Edit width={20} height={20} />
                    )}
                </TouchableOpacity>
            </Styles.InputContainer>

            <Styles.LabelContainer>
                <Styles.Label>Email</Styles.Label>
            </Styles.LabelContainer>
            <Styles.InputContainer
                style={{
                    borderColor: activeField === "email" ? "#FE724C" : "#DCDCDC",
                }}
            >
                <Icons.Mail width={18} height={18} color="#FE724C" />
                <Styles.Input
                    ref={emailInputRef}
                    editable={activeField === "email"}
                    value={editedData.email}
                    onChangeText={(text) =>
                        setEditedData((prev) => ({ ...prev, email: text }))
                    }
                    onFocus={() => setActiveField("email")}
					
					
                />
                <TouchableOpacity
                    onPress={() =>
                        activeField === "email"
                            ? handleSave("email")
                            : handleActivateField("email", emailInputRef)
                    }
                >
                    {activeField === "email" ? (
                        <Icons.Save width={20} height={20} />
                    ) : (
                        <Icons.Edit width={20} height={20} />
                    )}
                </TouchableOpacity>
            </Styles.InputContainer>

            <Styles.LabelContainer>
                <Styles.Label>Telefone</Styles.Label>
            </Styles.LabelContainer>
            <Styles.InputContainer
                style={{
                    borderColor: activeField === "phone" ? "#FE724C" : "#DCDCDC",
                }}
            >
                <Icons.Phone width={18} height={18} color="#FE724C" />
                <Styles.Input
                    ref={phoneInputRef}
                    editable={activeField === "phone"}
                    value={editedData.phone}
                    onChangeText={(text) =>
                        setEditedData((prev) => ({ ...prev, phone: text }))
                    }
                    onFocus={() => setActiveField("phone")}
					
                />
                <TouchableOpacity
                    onPress={() =>
                        activeField === "phone"
                            ? handleSave("phone")
                            : handleActivateField("phone", phoneInputRef)
                    }
                >
                    {activeField === "phone" ? (
                        <Icons.Save width={20} height={20} />
                    ) : (
                        <Icons.Edit width={20} height={20} />
                    )}
                </TouchableOpacity>
            </Styles.InputContainer>
			<TouchableOpacity onPress={() => scrollToInput(nameInputRef, "name")}>
				 <Styles.Label>Button</Styles.Label>
				 </TouchableOpacity>
			<Styles.EmptySpace/>
			<Styles.EmptySpace/>
			<Styles.EmptySpace/>
			</Styles.InputScrollContainer>
        </Styles.Container>

    );
}
