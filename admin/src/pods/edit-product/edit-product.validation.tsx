import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    name: [
      {
        validator: Validators.required,
        message: 'El nombre del producto es obligatorio',
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 3 },
        message: 'El nombre debe tener al menos 3 caracteres',
      },
    ],
    categoryId: [
      {
        validator: Validators.required,
        message: 'La categoría del producto es obligatoria',
      },
    ],
    portionTypeId: [
      {
        validator: Validators.required,
        message: 'El tipo de ración es obligatorio',
      },
    ],
  },
};

export const formValidation = createFormikValidation(validationSchema);
