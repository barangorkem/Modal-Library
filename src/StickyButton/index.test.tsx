import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import StickyButton from './index';

describe('StickyButton component testing', () => {
  test('should render component', async () => {
    render(<StickyButton handleClick={jest.fn()} />);
    const sticky_button = await screen.queryByTestId('sticky-button-test');
    expect(sticky_button).not.toBeNull();
  });

  test('should call handleClick method', async () => {
    const mockCallback = jest.fn();

    render(<StickyButton handleClick={mockCallback} />);

    const sticky_button = await screen.queryByTestId('sticky-button-test');
    fireEvent.click(sticky_button);

    expect(mockCallback).toBeCalledTimes(1);
  });
});
