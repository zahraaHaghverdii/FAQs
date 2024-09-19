import { useFaqesData } from "./useFaqesData";
import SpinnerMini from "../../ui/SpinnerMini";
import styled from "styled-components";
import FaqItem from "./FaqItem";

const StyledUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

function Faq() {
  const { faq, isLoading } = useFaqesData();

  if (isLoading) return <SpinnerMini />;
  return (
    <StyledUl>
      {faq?.map((faq) => (
        <FaqItem key={faq.id} faq={faq} />
      ))}
    </StyledUl>
  );
}

export default Faq;
