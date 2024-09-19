import styled from "styled-components";
import Faqs from "./FaqList";

const StyledFaqItem = styled.li`
  border-bottom: 1px solid var(--color-pink-30);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 1.3rem;
  padding-bottom: 1.3rem;
  transition: all 0.3s ease-in-out;

  &:last-child {
    border-bottom: none;
  }
  &:hover h3 {
    transition: all 0.3s ease-in-out;
    color: var(--color-grayish-purple-30);
  }
`;

const H3 = styled.h3`
  font-size: 1.5rem;
  font-family: "Work Sans Regular";
  color: var(--color-dark-purple);
  width: 70%;
  white-space: nowrap; /* جلوگیری از شکستن خط */
  overflow: hidden; /* پنهان کردن محتواهای خارج از باکس */
  text-overflow: ellipsis; /* نمایش سه نقطه در انتها */
`;

function FaqItem({ faq }) {
  return (
    <StyledFaqItem>
      <Faqs>
        <Faqs.Title id={faq.id}>
          <H3>{faq.title}</H3>
          <Faqs.Icon
            id={faq.id}
            openIcon={"/image/icon-plus.svg"}
            closeIcon={"/image/icon-minus.svg"}
          />
        </Faqs.Title>

        <Faqs.Information id={faq.id}>{faq.description}</Faqs.Information>
      </Faqs>
    </StyledFaqItem>
  );
}

export default FaqItem;
