import { Button, Icon } from "semantic-ui-react";
import { render, screen } from "@testing-library/react";

describe("Button component", () => {
  it("should be able to render a Button", () => {
    render(
      <Button primary>
        <Icon name="search" />
        Buscar pelo CEP
      </Button>
    );
    expect(screen.getByText("Buscar pelo CEP")).toBeTruthy();
  });
});
