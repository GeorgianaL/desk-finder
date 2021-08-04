import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const Inner = styled.View`
  padding: 8px 16px;
  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`;

const Button = styled.View`
  background: whitesmoke;
  border: 0;
  box-sizing: border-box;
  color: #363636;
  cursor: pointer;
  font-size: 1rem;
  margin: 0;
  outline: 0;
  padding: 8px 16px;
  text-align: center;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  &:focus,
  &:hover {
    background: #eeeeee;
  }
`;

function TextEditor(props) {
  return (
    <React.Fragment>
      <Inner>
        <textarea
          placeholder="Write description"
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          onChange={props.onChange}
          value={props.value}
        ></textarea>
      </Inner>
      {props.value && <Button onClick={props.onSubmit}>Submit</Button>}
    </React.Fragment>
  );
}

export default TextEditor;
