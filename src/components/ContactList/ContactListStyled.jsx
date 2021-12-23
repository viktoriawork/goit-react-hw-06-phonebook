import styled from "styled-components";

const ContactListStyled = styled.ul`
  margin-top: 30px;
  .item {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
  p {
    display: inline-block;
    margin-right: 20px;
  }

  .name {
    color: #f0f1f3;
    font-weight: 600;
    font-size: 20px;
  }

  .number {
    color:#f0f1f3;
    font-weight: 600;
    font-size: 17px;
  }

  .delBtn {

    margin-left: auto;
    padding: 5px;
    color:#8b1455;
    border-color:8b1455;
    background-color:#f0f1f3;
    border-radius: 5px;
    font-weight: 700;
    &:hover,
    &:focus {
      box-shadow: 1px 1px 3px 0 #8b1455;
    }
  }
`;

export default ContactListStyled;
