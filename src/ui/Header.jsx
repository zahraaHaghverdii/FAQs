import styled from "styled-components";
import Heading from "../ui/Heading";

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const Image = styled.img`
  width: 7%;
  height: 100%;
`;

function Header() {
  return (
    <StyledHeader>
      <Image src="/dist/image/icon-star.svg" />
      <Heading as="h1">FAQS</Heading>
    </StyledHeader>
  );
}

export default Header;
