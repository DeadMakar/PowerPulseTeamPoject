import * as Yup from 'yup';

export const UserFormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  height: Yup.number()
    .min(150, 'Height must be minimum 150 cm')
    .max(300, 'The value must be no more then 300 cm')
    .required('Please fill your height'),
  currentWeight: Yup.number()
    .min(35, 'Current weight must be minimum 35 kg')
    .max(270, 'The value must be no more then 270 kg')
    .required('Please fill your current weight'),
  desiredWeight: Yup.number()
    .min(35, 'Desired weight must be minimum 35 kg')
    .max(270, 'Desired weight must be no more then 270 kg')
    .required('Please fill your desired weight'),
  birthday: Yup.date()
    .test('isAdult', 'You must be 18 years or older', function (value) {
      const today = new Date();
      const age = today.getFullYear() - new Date(value).getFullYear();
      return age >= 18;
    })
    .required('Birthday is required'),
  blood: Yup.number()
    .oneOf([1, 2, 3, 4], 'Invalid type of the value')
    .required('Please choose your blood type'),

  sex: Yup.string()
    .oneOf(['male', 'female'], 'Invalid type of the value')
    .required('Please choose your gender'),

  levelActivity: Yup.number()
    .oneOf([1, 2, 3, 4, 5], 'Invalid type of the value')
    .required('Please choose your level activity'),
});
