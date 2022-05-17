import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import Button from "./Button";

test('renders button with text',()=>{
    render(<Button>Text</Button>)

    const buttonEl = screen.getByText('Text');

    expect(buttonEl).toBeInTheDocument;
})