export default function validations(input) {
  let errors = {};

  if (input.name.length > 20) {
    errors.name = "Name must be less than or equal to 20 characters";
  } else if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\d/?~]/.test(input.name)) {
    errors.name = "Name must be a string";
  } else if (!input.name) {
    errors.name = "Name is necessary";
  }

  if (input.height < 0) {
    errors.height = "Height must be greater than or equal to 0";
  } else if (input.height > 255) {
    errors.height = "Height must be less than or equal to 255";
  } else if (!input.height) {
    errors.height = "Height is necessary";
  }
  if (input.weight < 0) {
    errors.weight = "Weight must be greater than or equal to 0";
  } else if (input.weight > 255) {
    errors.weight = "Weight must be less than or equal to 255";
  } else if (!input.weight) {
    errors.weight = "Height is necessary";
  }
  return errors;
}
