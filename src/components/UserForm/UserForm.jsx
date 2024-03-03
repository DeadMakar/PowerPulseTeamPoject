import { Formik, Form } from 'formik';
import { UserFormSchema } from './UserFormSchema';
import { UserInput } from './UserInput';
import { RadioBtn } from './RadioBtn';
import { LabelInputName, WarningMessage } from './UserInput/UserInput.styled';
import {
  ActiveSection,
  BloodSexBox,
  BloodSexDiv,
  BloodSexSection,
  Button,
  LabelSection,
  UserFormContainer,
} from './UserForm.styled';
import { useState } from 'react';

// const initialValues = {
//   name: '',
//   email: '',
//   height: 0,
//   currentWeight: 0,
//   desiredWeight: 0,
//   birthday: '2020-01-01',
//   blood: 1,
//   sex: '',
//   levelActivity: 1,
// };

export const UserForm = () => {
  const userInfo = {
    name: 'Katy',
    email: '@gmail.com',
    height: 170,
    currentWeight: 50,
    desiredWeight: 40,
    birthday: '2000-01-01',
    blood: '1',
    sex: 'female',
    levelActivity: '3',
  };

  const [isInfoChanged, setIsInfoChanged] = useState(true);

  const ifUserInfoChanged = (values) => {
    const isInfoChanged = Object.keys(values).some(
      (key) => values[key] !== userInfo[key]
    );
    setIsInfoChanged(!isInfoChanged);

    console.log(values);
  };

  const handleUpdateUserInfo = (newInfo) => {
    console.log(newInfo);
  };

  return (
    <UserFormContainer>
      <Formik
        initialValues={userInfo}
        validationSchema={UserFormSchema}
        onSubmit={(values) => {
          handleUpdateUserInfo(values);
        }}
      >
        {({ errors, touched }) => (
          <Form onChange={(values) => ifUserInfoChanged(values)}>
            <UserInput errors={errors} touched={touched} />
            <BloodSexSection>
              <LabelInputName>Blood</LabelInputName>
              <BloodSexBox>
                <LabelSection>
                  <BloodSexDiv>
                    <RadioBtn name="blood" value="1" text="1" />
                    <RadioBtn name="blood" value="2" text="2" />
                    <RadioBtn name="blood" value="3" text="3" />
                    <RadioBtn name="blood" value="4" text="4" />
                  </BloodSexDiv>
                  {errors.blood && touched.blood && (
                    <WarningMessage>{errors.blood}</WarningMessage>
                  )}
                </LabelSection>

                <LabelSection>
                  <BloodSexDiv>
                    <RadioBtn name="sex" value="male" text="Male" />
                    <RadioBtn name="sex" value="female" text="Female" />
                  </BloodSexDiv>
                  {errors.sex && touched.sex && (
                    <WarningMessage>{errors.sex}</WarningMessage>
                  )}
                </LabelSection>
              </BloodSexBox>
            </BloodSexSection>

            <ActiveSection>
              <RadioBtn
                name="levelActivity"
                value="1"
                text="Sedentary lifestyle (little or no physical activity)"
              />
              <RadioBtn
                name="levelActivity"
                value="2"
                text="Light activity (light exercises/sports 1-3 days per week)"
              />
              <RadioBtn
                name="levelActivity"
                value="3"
                text="Moderately active (moderate exercises/sports 3-5 days per week)"
              />
              <RadioBtn
                name="levelActivity"
                value="4"
                text="Very active (intense exercises/sports 6-7 days per week)"
              />
              <RadioBtn
                name="levelActivity"
                value="5"
                text="Extremely active (very strenuous exercises/sports and physical work)"
              />
              {errors.levelActivity && touched.levelActivity && (
                <WarningMessage>{errors.levelActivity}</WarningMessage>
              )}
            </ActiveSection>

            <Button type="submit" disabled={isInfoChanged}>
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </UserFormContainer>
  );
};
