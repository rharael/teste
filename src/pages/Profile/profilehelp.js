import React, { useState } from "react";
import Styles from "./helpStyles.js";
import SvgInput from "../../components/Search/index.js";
import Icons from "../../assets/icons"

const FAQItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Styles.FAQContainer>
      <Styles.QuestionContainer onPress={() => setExpanded(!expanded)}>
        <Styles.Question>{question}</Styles.Question>
		<Icons.DownArrow
          width={18}
          height={18}
          style={Styles.Icon}
        />
      </Styles.QuestionContainer>
      {expanded && <Styles.Answer>{answer}</Styles.Answer>}
    </Styles.FAQContainer>
  );
};

export default function ProfileHelp({ navigation }) {
	const faqs = [
		{
		question: "Posso aplicar o CUPOM mais de uma vez?",
		answer:
				"O CUPOM de nova conta só é valido na primeira compra. ",
		},
		{
		question: "Posso excluir minha conta?",
		answer:
			"Você pode excluir nas configurações no aplicativo.",
		},
		{
		question: "Como atualizar meus dados de pagamento?",
		answer:
			"Você pode atualizar seus dados de pagamento na seção 'Pagamento' dentro do aplicativo.",
		},
	];

  return (
    <Styles.Container>
      <SvgInput placeholder="O que você precisa?" />

      <Styles.FAQList>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </Styles.FAQList>
    </Styles.Container>
  );
}
