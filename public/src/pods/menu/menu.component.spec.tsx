import React from 'react';
import { render, screen } from '@testing-library/react';
import { MenuComponent } from './menu.component';

describe('MenuComponent tests', () => {
  it('should render the expected subcomponents', () => {
    // Arrange
    const props = {
      restaurantInfo: {
        name: 'The Restaurant',
        description: 'A nice restaurant',
        telephone: '951123123',
      },
      categories: [
        {
          name: 'Entrantes',
          products: [
            {
              name: 'Chorizo criollo',
              description: 'Muy picante',
              portions: [{ name: 'Única', price: '5,50 €' }],
            },
            {
              name: 'Queso provolone',
              description: '',
              portions: [{ name: 'Única', price: '5,50 €' }],
            },
            {
              name: 'Jamón ibérico',
              description: '',
              portions: [{ name: 'Única', price: '5,50 €' }],
            },
          ],
        },
      ],
      onHandleChange: jest.fn(),
      themes: ['Meat', 'Fish'],
      theme: 'Meat',
    };

    // Act
    render(<MenuComponent {...props} />);
    const headerTelephone = screen.getByLabelText(
      props.restaurantInfo.telephone.split('').join('.'),
    );
    const menuCategories = props.categories
      .map((c) => c.name)
      .map((name) => screen.getByText(name));

    // Assert
    expect(headerTelephone).toBeInTheDocument();
    menuCategories.map((c) => expect(c).toBeInTheDocument());
  });
});
