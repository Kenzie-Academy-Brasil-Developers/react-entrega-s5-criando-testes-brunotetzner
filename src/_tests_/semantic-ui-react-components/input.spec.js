import React from "react";
import { Input } from "semantic-ui-react";
import { render, screen } from "@testing-library/react";

describe("input component", () => {
  it("should be able to render an input", () => {
    render(<Input type="number" placeholder="cep" />);

    expect(screen.getByPlaceholderText("cep")).toBeTruthy();
  });
});
