import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: 100px;
  background: #fff;
  box-shadow:#dbdbdb 4px 4px 10px 5px;
  overflow:hidden;

  @media (max-width:750px){
     height:45px;
     padding-top: 0px;
  }
`;

const LogoContenedor = styled.div`
  width: 25%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing:border-box;
`;

const MenuContenedor = styled.nav`
  display: flex;
  align-items: center;
  padding: 0rem 1rem;
`;

const Lista = styled.li`
  display: flex;

  :hover {
    transform: scale(1.1);
  }
`;
const ItemLista = styled.ul`
  width: auto;
  height: auto;
  align-items: center;
  padding: 0 1rem;
  margin: 0 0.5rem;
  position: relative; /* Necesario para que ::after se posicione correctamente */

  :hover::after {
    animation: 1.5s infinite ease-in-out FlexDex;
  }

  /* Definir el pseudoelemento ::after aquí */
  ::after {
    content: "";
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    align-items: center;
    background: none;
    z-index: -1; /* Para que el pseudoelemento esté detrás del contenido */
  }

  @keyframes FlexDex {
    0% {
      background: none;
    }
    50% {
      background: skyblue;
    }
    100% {
      background: none;
    }
  }
`;

const AnclaItemLista = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
  
`;

const HeaderComponent = () => {
  return (
    <Header>
      <LogoContenedor>
        <Logo src="SLF DEVELOPMENT.svg" />
      </LogoContenedor>
      <MenuContenedor>
        <Lista>
          <ItemLista>
            <AnclaItemLista to={""}>inicio </AnclaItemLista>
          </ItemLista>
          |
          <ItemLista>
            <AnclaItemLista to={""}>Servicios</AnclaItemLista>
          </ItemLista>
          |
          <ItemLista>
            <AnclaItemLista to={""}>Contacto </AnclaItemLista>
          </ItemLista>
        </Lista>
      </MenuContenedor>
    </Header>
  );
};

export default HeaderComponent;
