import styled from 'styled-components';

const FilterStyled = styled.div`
  text-align: center;
  .title {
    color: #6b7b96;
    margin-bottom: 10px;
  }
  .finde-input {
    display: block;
    padding: 5px;
    text-align: center;
    margin: 0 auto;
    color: #636161;
    outline: none;
  }
  input:focus {
    box-shadow: 1px 1px 2px 0 #12bcb0;
    border: 1px solid #dbd9d9;
  }
`;
export default FilterStyled;
