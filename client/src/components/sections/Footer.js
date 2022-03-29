import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <FooterInfo>
        <p>© 2022 - MATIAS WASIAK</p>
      </FooterInfo>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  height: 60px;
  background: linear-gradient(#353ab080, #9816ff80);
  min-width: 410px;
`;
const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 60px;
`;

export default Footer;
