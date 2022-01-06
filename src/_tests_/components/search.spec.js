import React from "react";
import axios from "axios";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  findByText,
} from "@testing-library/react";
import Search from "../../components/Search";
import { useLocateCep } from "../../providers/CepProvider";
import api from "../../services/index";
import MockAdapter from "axios-mock-adapter";
import Providers from "../../providers/index";
import Address from "../../components/Cep";
import { findAllInRenderedTree } from "react-dom/test-utils";

jest.mock("../../providers/CepProvider", () => {
  return { useAuth: () => ({}) };
});
describe("search cep", () => {
  it("should be search for a cep", async () => {
    render(
      <Providers>
        <Search />
      </Providers>
    );

    const cepField = screen.getByPlaceholderText("Insira o CEP");
    const buttonElement = screen.getByText("Buscar pelo CEP");
    fireEvent.change(cepField, { target: { value: "23545037" } });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(cepField).toHaveValue(23545037);
    });
  });
});
