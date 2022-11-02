import { render, screen } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom'

describe('<App>',() => {
    it('LoadAppComponent', () => {
        render(<App/>);
        const DomNode = screen.getByRole('main');
        expect(DomNode).toBeInTheDocument();
    })
})

// const submitButton = screen.queryByText('submit')
// expect(submitButton).not.toBeInTheDocument()