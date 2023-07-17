import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  it("should show header", () => {
    render(<Header />);

    expect(screen.getByText("Checkout")).toBeInTheDocument();
  });
});
