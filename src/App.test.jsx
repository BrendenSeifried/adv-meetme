// import { render } from "react-dom"
import { render, screen } from '@testing-library/react'

import App from "./App"

describe('App', () => {
it('Should render the header', async () => {
    render(<App />);
    // screen.getByAltText('Alchemy Logo');
    screen.getByText(/loading.../i);
    
    const school = screen.getByAltText('Alchemy Logo');
    expect(school).toBeInTheDocument();


    const name = await screen.findByText('Vonta');
    expect(name).toBeInTheDocument();



    // how to grab banner color
    const header = screen.getByRole('banner');
    // console.log('header', header.innerHTML); check if it grabs the header
    expect(header).toHaveStyle({
        background: 'var(---grey)',
    })
    /// ////////
   
    screen.debug();
})
})
