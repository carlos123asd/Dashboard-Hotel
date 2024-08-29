import { render, screen } from '@testing-library/react';
import BtnTableTopNew from '../components/BtnTableTopNew';

describe('Button change prop Title - New Room,New Booking,New Employee', () => { 
    test('for New Room',() => {
        render(<BtnTableTopNew title="New Room" />)
        const element = screen.getByTestId('custom-element')
        expect(element.toHaveTextContent('New Room'))
    })
    test('for New Booking',() => {
        render(<BtnTableTopNew title="New Booking" />)
        const element = screen.getByTestId('custom-element')
        expect(element.toHaveTextContent('New Booking'))
    })
    test('for New Employee',() => {
        render(<BtnTableTopNew title="New Employee" />)
        const element = screen.getByTestId('custom-element')
        expect(element.toHaveTextContent('New Employee'))
    })
})