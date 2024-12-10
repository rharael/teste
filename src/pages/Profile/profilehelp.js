import React, { useState } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import Styles from "./helpStyles";

// Componente de FAQ
const FAQItem = ({ question, answer }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <View style={Styles.FAQContainer}>
            <TouchableOpacity
                style={Styles.QuestionContainer}
                onPress={() => setExpanded(!expanded)}
            >
                <Text style={Styles.Question}>{question}</Text>
            </TouchableOpacity>
            {expanded && <Text style={Styles.Answer}>{answer}</Text>}
        </View>
    );
};

export default function ProfileHelp({ navigation }) {
    const faqs = [
        {
            question: "Como faço para rastrear meu pedido?",
            answer: "Você pode rastrear seu pedido acessando a seção 'Meus Pedidos' no aplicativo.",
        },
        {
            question: "Posso cancelar uma compra após o pagamento?",
            answer: "Sim, você pode solicitar o cancelamento até 24 horas após a compra, contanto que o pedido não tenha sido enviado.",
        },
        {
            question: "Como atualizar meus dados de pagamento?",
            answer: "Você pode atualizar seus dados de pagamento na seção 'Configurações' dentro do aplicativo.",
        },
        {
            question: "O que fazer se o produto que recebi estiver com defeito?",
            answer: "Caso o produto esteja com defeito, entre em contato conosco através do nosso suporte ao cliente e nós resolveremos o problema.",
        },
    ];

    return (
        <ScrollView style={Styles.Container}>
            <Styles.Input placeholder="Pesquise uma dúvida..." />

            <View style={Styles.FAQList}>
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </View>
        </ScrollView>
    );
}
