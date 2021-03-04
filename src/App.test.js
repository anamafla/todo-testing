import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App/>", () => {
  it("Renders <App/> component correctly", () => {
    render(<App />);
    const linkElement = screen.getByText(
      /Getting started with React testing library/i
    );
    expect(linkElement).toBeInTheDocument();
  });
});
