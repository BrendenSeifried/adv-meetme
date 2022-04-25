// import { render } from "react-dom"
import { render, screen } from '@testing-library/react'

import App from "./App"

describe('App', () => {
it('Should render the header', async () => {
    render(<App />);
    // screen.getByAltText('Alchemy Logo');
    // screen.getByText(/loading.../i);
    const school = screen.getByAltText('Alchemy Logo');
    expect(school).toBeInTheDocument();
    const name = await screen.findByText('Vonta');
    expect(name).toBeInTheDocument();

   
    // screen.debug();
})
})
