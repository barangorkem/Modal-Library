import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Modal from '.';

describe('Modal Component Testing', () => {
  test('should not find review-modal-test element if isOpen equal false', async () => {
    render(<Modal isOpen={false}></Modal>);
    const el = await screen.queryByTestId('review-modal-test');
    expect(el).toEqual(null);
  });
  test('should find review-modal-test element if isOpen equal true', async () => {
    render(<Modal isOpen></Modal>);
    const el = await screen.queryByTestId('review-modal-test');
    expect(el).not.toBe(null);
  });
  test('should render with modal header and body', async () => {
    render(
      <Modal isOpen>
        <Modal.Header className="review-modal-header">
          <h4 data-testid="header-title-test">Header title</h4>
        </Modal.Header>
        <Modal.Body>
          <h4 data-testid="body-title-test">Body title</h4>
        </Modal.Body>
      </Modal>
    );
    const el_header = await screen.queryByTestId('review-modal-header-test');
    const el_body = await screen.queryByTestId('review-modal-body-test');

    expect(el_header).not.toBe(null);
    expect(el_body).not.toBe(null);
  });

  test('should be find children elements in header and body components', async () => {
    render(
      <Modal isOpen>
        <Modal.Header className="review-modal-header">
          <h4 data-testid="header-title-test">Header title</h4>
        </Modal.Header>
        <Modal.Body>
          <h4 data-testid="body-title-test">Body title</h4>
        </Modal.Body>
      </Modal>
    );
    const el_header = await screen.queryByTestId('header-title-test');
    const el_body = await screen.queryByTestId('body-title-test');

    expect(el_header.textContent).toEqual('Header title');
    expect(el_body).not.toBe('Body title');
  });

  test('should call handleClose method', async () => {
    const mockCallback = jest.fn();

    render(<Modal isOpen onClose={mockCallback}></Modal>);

    const overlay_el = await screen.queryByTestId('review-modal-test-overlay');
    fireEvent.click(overlay_el);

    expect(mockCallback).toBeCalledTimes(1);
  });
});
