import { Badge } from "@material-ui/core";
import {
  LaptopWindows,
  LaptopWindowsTwoTone,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Container = styled.div`
  height: 65px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: orange;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>nodox</Logo>
          <SearchContainer>
            <Input placeholder="Buscar" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center></Center>
        <Right>
          <MenuItem>
            <Link to={`/`}>SER PROVEEDOR</Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/messenger"}>CHAT(Beta Preview)</Link>
          </MenuItem>

          <MenuItem>
            <Link to={`/profile/${user.username}`}>{user.username}</Link>
          </MenuItem>

          <MenuItem>
            <Badge badgeContent={0} color="Primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
