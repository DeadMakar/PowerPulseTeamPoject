import { Formik, Form } from 'formik';
import { UserFormSchema } from './UserFormSchema';
import {
  ContactUserParam,
  InputField,
  LabelInputName,
  ParamBox,
  ParamUserBirthDay,
  ParamUserCurWeight,
  ParamUserDesWeight,
  ParamUserHeight,
  WarningMessage,
} from './UserForm.styled';

export const UserForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          height: '',
          currentWeight: 0,
          desiredWeight: 0,
          birthday: '2020-01-01',
          blood: 0,
          sex: '',
          levelActivity: 0,
        }}
        validationSchema={UserFormSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          console.log('Hello');
        }}
      >
        {({ errors, touched }) => (
          <Form>
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
                />
                {errors.email && touched.email && (
                  <WarningMessage>{errors.email}</WarningMessage>
                )}
              </label>
            </ContactUserParam>
            <ParamBox>
              <label>
                <LabelInputName>Height </LabelInputName>
                <ParamUserHeight name="height" type="number" />
                {errors.height && touched.height && (
                  <WarningMessage>{errors.height}</WarningMessage>
                )}
              </label>

              <label>
                <LabelInputName>Current Weight </LabelInputName>
                <ParamUserCurWeight name="currentWeight" type="number" />
                {errors.currentWeight && touched.currentWeight && (
                  <WarningMessage>{errors.currentWeight}</WarningMessage>
                )}
              </label>
              <label>
                <LabelInputName> Desired Weight</LabelInputName>
                <ParamUserDesWeight name="desiredWeight" type="number" />
                {errors.desiredWeight && touched.desiredWeight && (
                  <WarningMessage>{errors.desiredWeight}</WarningMessage>
                )}
              </label>
              <label>
                <LabelInputName>Date of birth </LabelInputName>
                <ParamUserBirthDay name="birthday" type="date" />
                {errors.birthday && touched.birthday && (
                  <WarningMessage>{errors.birthday}</WarningMessage>
                )}
              </label>
            </ParamBox>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
