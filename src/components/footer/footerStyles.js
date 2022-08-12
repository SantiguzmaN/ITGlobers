import styled from 'styled-components';

export const Box = styled.div`
  padding: 20px;
  background: white;
  position: relative;
  border-top: 4px solid #a5aab0;
  left: 0;
  width: 100%;
  display: flex;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  flex: auto;
  flex-direction: column;
  justify-content: space-between;
  bottom: 0px;
  max-width: 1000px;
  margin: 0 auto;
  
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  border-right: 2px solid #a5aab0;
`;

export const ColumnWOborder = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(150px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(100px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: black;
  margin-bottom: 15px;
  font-size: 10px;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const FooterLogo = styled.img`
  width: 100px;
`;

export const FooterLogo2 = styled.img`
  width: 140px;
`;
