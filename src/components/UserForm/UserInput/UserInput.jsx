import {
  ContactUserParam,
  InputField,
  LabelInputName,
  ParamBox,
  ParamUserCurWeight,
  ParamUserDesWeight,
  ParamUserHeight,
  WarningMessage,
} from './UserInput.styled';

import BirthdayCalendar from '../../UserCard/BirthdayCalendar/BirthdayCalendar';

const UserInput = ({ errors, touched, onDateChange, savedBirthday }) => {
  return (
    <>
      <ContactUserParam>
        <label>
          <LabelInputName>Name </LabelInputName>
          <InputField name="name" type="text" autoComplete="off" />
          {errors.name && touched.name && (
            <WarningMessage>{errors.name}</WarningMessage>
          )}
        </label>
        <label>
          <LabelInputName>Email </LabelInputName>
          <InputField
            style={{ color: ' rgba(239, 237, 232, 0.6)' }}
            name="email"
            type="text"
            autoComplete="off"
            disabled
          />
          {errors.email && touched.email && (
            <WarningMessage>{errors.email}</WarningMessage>
          )}
        </label>
      </ContactUserParam>
      <ParamBox>
        <label>
          <LabelInputName>Height </LabelInputName>
          <ParamUserHeight name="height" type="number" placeholder="0" />
          {errors.height && touched.height && (
            <WarningMessage>{errors.height}</WarningMessage>
          )}
        </label>

        <label>
          <LabelInputName>Current Weight </LabelInputName>
          <ParamUserCurWeight
            name="currentWeight"
            type="number"
            placeholder="0"
          />
          {errors.currentWeight && touched.currentWeight && (
            <WarningMessage>{errors.currentWeight}</WarningMessage>
          )}
        </label>
        <label>
          <LabelInputName> Desired Weight</LabelInputName>
          <ParamUserDesWeight
            name="desiredWeight"
            type="number"
            placeholder="0"
          />
          {errors.desiredWeight && touched.desiredWeight && (
            <WarningMessage>{errors.desiredWeight}</WarningMessage>
          )}
        </label>
        <label>
          <LabelInputName>Date of birth </LabelInputName>
          <BirthdayCalendar
            savedBirthday={savedBirthday}
            name="birthday"
            onDateChange={onDateChange}
          />
        </label>
      </ParamBox>
    </>
  );
};

export default UserInput;
