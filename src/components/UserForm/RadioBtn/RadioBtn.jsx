import { RadioCircle, RadioField, RadioLabel } from './RadioBtn.styled';

const RadioBtn = ({ name, value, text }) => {
  return (
    <RadioLabel>
      <RadioField type="radio" name={name} value={value} />
      <RadioCircle></RadioCircle>
      {text}
    </RadioLabel>
  );
};

export default RadioBtn;
