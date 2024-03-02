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
} from './UserForm.styled';

export const UserForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          height: 0,
          currentWeight: 0,
          desiredWeight: 0,
          birthday: '2020-01-01',
          blood: 0,
          sex: '',
          levelActivity: 0,
        }}
        validationSchema={UserFormSchema}
        onSubmit={() => {
          console.log('Hello');
        }}
      >
        {({ errors, touched }) => (
          <Form>
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

            <Button type="submit">Save</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
