import React from "react";
import axios from "axios";
import App from "../../App";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  getByTestId,
} from "@testing-library/react";
import Search from "../../components/Search";
import { useLocateCep } from "../../providers/CepProvider";
import api from "../../services/index";
import MockAdapter from "axios-mock-adapter";
import Providers from "../../providers/index";
import Address from "../../components/Cep";
import { findAllInRenderedTree } from "react-dom/test-utils";

const apiMock = new MockAdapter(api);
describe("search cep", () => {
  //   it("should be search for a cep", async () => {
  //     render(
  //       <Providers>
  //         <Search />
  //       </Providers>
  //     );

  //     const cepField = screen.getByPlaceholderText("Insira o CEP");
  //     const buttonElement = screen.getByText("Buscar pelo CEP");
  //     fireEvent.change(cepField, { target: { value: "23545037" } });
  //     fireEvent.click(buttonElement);

  //     await waitFor(() => {
  //       expect(cepField).toHaveValue(23545037);
  //     });
  //   });

  it("should be see informations by cep", async () => {
    apiMock.onGet("23545037").replyOnce(200, {
      bairro: "Sepetiba",
      cidade: "Rio de Janeiro",
      logradouro: "Rua 1 (Acesso Est Sepetiba 4718)",
      estado_info: {
        area_km2: "43.781,566",
        codigo_ibge: "33",
        nome: "Rio de Janeiro",
      },
      cep: "23545037",
      cidade_info: { area_km2: "1200,179", codigo_ibge: "3304557" },
      estado: "RJ",
    });
    render(
      <Providers>
        <App />
      </Providers>
    );
    const cepField = screen.getByPlaceholderText("Insira o CEP");
    const buttonElement = screen.getByText("Buscar pelo CEP");
    fireEvent.change(cepField, { target: { value: "23545037" } });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(screen.getByDisplayValue("Rio de Janeiro")).toBeInTheDocument();
    });
  });
});
