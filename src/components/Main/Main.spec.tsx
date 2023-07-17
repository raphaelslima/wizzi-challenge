import { render, screen } from "@testing-library/react";

import Main from "./Main";

describe("Main", () => {
  it("should show h1", () => {
    render(<Main />);

    expect(screen.getByText("Marque sua viagem")).toBeInTheDocument();
  });
});
