import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />

      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>filtro de productos:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Negro</Option>
            <Option>Blanco</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Nuevo</Option>
            <Option>precio (asc)</Option>
            <Option>precio (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />

      <Footer />
    </Container>
  );
};

export default ProductList;
