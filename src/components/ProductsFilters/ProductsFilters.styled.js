import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const FormLabel = styled.label`
  position: relative;
`;

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  width: 335px;
  padding: 14px;

  font-size: 14px;
  line-height: 1.29;

  color: ${globalColor.colorWhite};

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    color: ${globalColor.colorWhite};
  }

  &:hover,
  &:focus {
    outline: none;
    border-color: ${globalColor.colorOrange};
  }
`;

export const InputSearch = styled(Input)`
  width: 335px;
  padding: 14px;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: calc(50% - 18px / 2);
  right: 40px;
  padding: 0;
  border: none;
  background: transparent;
`;

export const SvgClose = styled.svg`
  stroke: ${globalColor.colorOrange};
  width: 18px;
  height: 18px;
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: calc(50% - 18px / 2);
  right: 14px;
  padding: 0;
  border: none;
  background: transparent;
`;

export const SearchSvg = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${globalColor.colorWhite};

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    stroke: ${globalColor.colorOrange};
  }
`;
