import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InventoryListComponent from './InventoryListComponent';

describe('<InventoryListComponent />', () => {
  test('it should mount', () => {
    render(<InventoryListComponent />);

    const inventoryListComponent = screen.getByTestId('InventoryListComponent');

    expect(inventoryListComponent).toBeInTheDocument();
  });
});