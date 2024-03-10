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
import { useDispatch } from 'react-redux';
import { updateSettings } from '../../redux/profile/operations';

import { refreshUser } from '../../redux/auth/operations';

import { toast } from 'react-toastify';

export const UserForm = ({ user }) => {
  const dispatch = useDispatch();

  // Users initial info

  const initialValueForForm = {
    name: user?.userName,
    email: user?.email,
    height: user?.height,
    currentWeight: user?.currentWeight,
    desiredWeight: user?.desiredWeight,
    blood: user?.blood && user?.blood.toString(),
    sex: user?.sex,
    levelActivity: user?.levelActivity && user?.levelActivity.toString(),
  };

  //  STATE

  const [birthdayNew, setBirthdayDate] = useState(
    user?.birthday || '00.00.0000'
  );

  const [isInfoChanged, setIsInfoChanged] = useState(true);

  //  fanc to check age

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
    return `${formattedDay}.${formattedMonth}.${year}`;
  };

  const mathFullYear = (birthday) => {
    const [day, month, year] = birthday.split('.');
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    return age;
  };

  const onDateChange = (date) => {
    const formatedDate = formatDate(date);
    setBirthdayDate(formatedDate);
    const fullYear = mathFullYear(formatedDate);

    if (fullYear < 18) {
      // notification
      toast.error('Sorry, but only adults can use our app.', {
        theme: 'dark',
      });
      setIsInfoChanged(true);
    }
  };

  const ifUserInfoChanged = (values) => {
    const isInfoChanged = Object.keys(values).some(
      (key) => values[key] !== initialValueForForm[key]
    );
    setIsInfoChanged(!isInfoChanged);
  };

  const handleUpdateUserInfo = (newInfo) => {
    const {
      name,
      height,
      currentWeight,
      desiredWeight,
      blood,
      sex,
      levelActivity,
    } = newInfo;

    // check age
    const fullYear = mathFullYear(birthdayNew);

    if (fullYear < 18) {
      // notification
      toast.error('Sorry, but only adults can use our app.', {
        theme: 'dark',
      });
      setIsInfoChanged(true);
      return;
    }

    // try {
    dispatch(
      updateSettings({
        userName: name,
        height,
        currentWeight,
        desiredWeight,
        birthday: birthdayNew,
        blood: Number(blood),
        sex,
        levelActivity: Number(levelActivity),
      })
    );

    setIsInfoChanged(true);

    dispatch(refreshUser());
  };

  return (
    <UserFormContainer>
      <Formik
        initialValues={initialValueForForm}
        validationSchema={UserFormSchema}
        onSubmit={(values) => {
          handleUpdateUserInfo(values);
        }}
      >
        {({ errors, touched }) => (
          <Form onChange={(values) => ifUserInfoChanged(values)}>
            <UserInput
              errors={errors}
              touched={touched}
              onDateChange={onDateChange}
              savedBirthday={birthdayNew}
            />
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
