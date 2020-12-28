export const validate = values => {
  const errors = {};
  const { phone, password } = values;

  if (!phone) {
    errors.phone = 'The login field is required';
  } else if (phone && phone.length !== 11) {
    errors.phone = 'Your login must be 11 characters';
  }

  if (!password) {
    errors.password = 'The password field is required';
  } else if (password && password.length < 3) {
    errors.password = 'Your password must be at least 3 characters. ';
  }

  return errors;
};
