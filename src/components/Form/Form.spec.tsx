import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Form from "./Form";

//Helpers
import { formatDateToString } from "../../helpers/date";

describe("Form", () => {
  it("should show fields and buttom form", () => {
    render(<Form />);

    expect(
      screen.getByText("Nome do passageiro principal")
    ).toBeInTheDocument();

    expect(
      screen.getByText("E-mail do passageiro principal")
    ).toBeInTheDocument();

    expect(screen.getByText("Origem")).toBeInTheDocument();

    expect(screen.getByText("Destino")).toBeInTheDocument();

    expect(screen.getByText("Data de ida")).toBeInTheDocument();

    expect(screen.getByText("Data de volta")).toBeInTheDocument();

    expect(
      screen.getByText("Quantidade de viajantes (adultos)")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Quantidade de viajantes (Crianças)")
    ).toBeInTheDocument();

    expect(screen.getByText("Marcar")).toBeInTheDocument();
  });

  it("should do not submit form when nameResponsible is empty", async () => {
    render(<Form />);

    const inputEmailResponsible = screen.getByLabelText(
      "Digite o email do passageiro principal"
    );

    await userEvent.type(inputEmailResponsible, "raphaeldesousalm@gmail.com");

    screen.getByDisplayValue("raphaeldesousalm@gmail.com");

    const inputOrigin = screen.getByLabelText("Digite a origem");

    await userEvent.type(inputOrigin, "Belo Horizonte");

    screen.getByDisplayValue("Belo Horizonte");

    const inputDestination = screen.getByLabelText("Digite o destino");

    await userEvent.type(inputDestination, "São Paulo");

    screen.getByDisplayValue("São Paulo");

    const current = new Date();
    const departureDate = new Date(
      current.getFullYear() + 1,
      current.getMonth(),
      current.getDate()
    );
    const returnDate = new Date(
      departureDate.getFullYear() + 1,
      departureDate.getMonth(),
      departureDate.getDate()
    );

    const inputDepartureDate = screen.getByLabelText("Digite a data de ida");

    await userEvent.clear(inputDepartureDate);

    await userEvent.type(inputDepartureDate, formatDateToString(departureDate));

    screen.getByDisplayValue(formatDateToString(departureDate));

    const inputReturnDate = screen.getByLabelText("Digite a data de volta");

    await userEvent.clear(inputReturnDate);

    await userEvent.type(inputReturnDate, formatDateToString(returnDate));

    screen.getByDisplayValue(formatDateToString(returnDate));

    const inputNumberOfAdults = screen.getByLabelText(
      "Digite a quantidade de viajantes (adultos)"
    );

    await userEvent.type(inputNumberOfAdults, "1");

    expect(inputNumberOfAdults).toHaveValue(1);

    const input = screen.getByLabelText(
      "Digite o nome do passageiro principal"
    );

    const buttom = screen.getByText("Marcar");

    await userEvent.click(buttom);

    expect(input).toHaveValue("");

    expect(await screen.findByText("Campo Obrigatório.")).toBeVisible();
  });

  it("should do not submit form when emailResponsible is empty", async () => {
    render(<Form />);

    const inputNameResponsible = screen.getByLabelText(
      "Digite o nome do passageiro principal"
    );

    await userEvent.type(inputNameResponsible, "Raphael");

    screen.getByDisplayValue("Raphael");

    const inputOrigin = screen.getByLabelText("Digite a origem");

    await userEvent.type(inputOrigin, "Belo Horizonte");

    screen.getByDisplayValue("Belo Horizonte");

    const inputDestination = screen.getByLabelText("Digite o destino");

    await userEvent.type(inputDestination, "São Paulo");

    screen.getByDisplayValue("São Paulo");

    const current = new Date();
    const departureDate = new Date(
      current.getFullYear() + 1,
      current.getMonth(),
      current.getDate()
    );
    const returnDate = new Date(
      departureDate.getFullYear() + 1,
      departureDate.getMonth(),
      departureDate.getDate()
    );

    const inputDepartureDate = screen.getByLabelText("Digite a data de ida");

    await userEvent.clear(inputDepartureDate);

    await userEvent.type(inputDepartureDate, formatDateToString(departureDate));

    screen.getByDisplayValue(formatDateToString(departureDate));

    const inputReturnDate = screen.getByLabelText("Digite a data de volta");

    await userEvent.clear(inputReturnDate);

    await userEvent.type(inputReturnDate, formatDateToString(returnDate));

    screen.getByDisplayValue(formatDateToString(returnDate));

    const inputNumberOfAdults = screen.getByLabelText(
      "Digite a quantidade de viajantes (adultos)"
    );

    await userEvent.type(inputNumberOfAdults, "1");

    expect(inputNumberOfAdults).toHaveValue(1);

    const input = screen.getByLabelText(
      "Digite o email do passageiro principal"
    );

    const buttom = screen.getByText("Marcar");

    await userEvent.click(buttom);

    expect(input).toHaveValue("");

    expect(await screen.findByText("Campo Obrigatório.")).toBeVisible();
  });

  it("should do not submit form when origin is empty", async () => {
    render(<Form />);

    const inputNameResponsible = screen.getByLabelText(
      "Digite o nome do passageiro principal"
    );

    await userEvent.type(inputNameResponsible, "Raphael");

    screen.getByDisplayValue("Raphael");

    const inputEmailResponsible = screen.getByLabelText(
      "Digite o email do passageiro principal"
    );

    await userEvent.type(inputEmailResponsible, "raphaeldesousalm@gmail.com");

    screen.getByDisplayValue("raphaeldesousalm@gmail.com");

    const inputDestination = screen.getByLabelText("Digite o destino");

    await userEvent.type(inputDestination, "São Paulo");

    screen.getByDisplayValue("São Paulo");

    const current = new Date();
    const departureDate = new Date(
      current.getFullYear() + 1,
      current.getMonth(),
      current.getDate()
    );
    const returnDate = new Date(
      departureDate.getFullYear() + 1,
      departureDate.getMonth(),
      departureDate.getDate()
    );

    const inputDepartureDate = screen.getByLabelText("Digite a data de ida");

    await userEvent.clear(inputDepartureDate);

    await userEvent.type(inputDepartureDate, formatDateToString(departureDate));

    screen.getByDisplayValue(formatDateToString(departureDate));

    const inputReturnDate = screen.getByLabelText("Digite a data de volta");

    await userEvent.clear(inputReturnDate);

    await userEvent.type(inputReturnDate, formatDateToString(returnDate));

    screen.getByDisplayValue(formatDateToString(returnDate));

    const inputNumberOfAdults = screen.getByLabelText(
      "Digite a quantidade de viajantes (adultos)"
    );

    await userEvent.type(inputNumberOfAdults, "1");

    expect(inputNumberOfAdults).toHaveValue(1);

    const input = screen.getByLabelText("Digite a origem");

    const buttom = screen.getByText("Marcar");

    await userEvent.click(buttom);

    expect(input).toHaveValue("");

    expect(await screen.findByText("Campo Obrigatório.")).toBeVisible();
  });

  it("should do not submit form when destination is empty", async () => {
    render(<Form />);

    const inputNameResponsible = screen.getByLabelText(
      "Digite o nome do passageiro principal"
    );

    await userEvent.type(inputNameResponsible, "Raphael");

    screen.getByDisplayValue("Raphael");

    const inputEmailResponsible = screen.getByLabelText(
      "Digite o email do passageiro principal"
    );

    await userEvent.type(inputEmailResponsible, "raphaeldesousalm@gmail.com");

    screen.getByDisplayValue("raphaeldesousalm@gmail.com");

    const inputOrigin = screen.getByLabelText("Digite a origem");

    await userEvent.type(inputOrigin, "Belo Horizonte");

    screen.getByDisplayValue("Belo Horizonte");

    const current = new Date();
    const departureDate = new Date(
      current.getFullYear() + 1,
      current.getMonth(),
      current.getDate()
    );
    const returnDate = new Date(
      departureDate.getFullYear() + 1,
      departureDate.getMonth(),
      departureDate.getDate()
    );

    const inputDepartureDate = screen.getByLabelText("Digite a data de ida");

    await userEvent.clear(inputDepartureDate);

    await userEvent.type(inputDepartureDate, formatDateToString(departureDate));

    screen.getByDisplayValue(formatDateToString(departureDate));

    const inputReturnDate = screen.getByLabelText("Digite a data de volta");

    await userEvent.clear(inputReturnDate);

    await userEvent.type(inputReturnDate, formatDateToString(returnDate));

    screen.getByDisplayValue(formatDateToString(returnDate));

    const inputNumberOfAdults = screen.getByLabelText(
      "Digite a quantidade de viajantes (adultos)"
    );

    await userEvent.type(inputNumberOfAdults, "1");

    expect(inputNumberOfAdults).toHaveValue(1);

    const input = screen.getByLabelText("Digite o destino");

    const buttom = screen.getByText("Marcar");

    await userEvent.click(buttom);

    expect(input).toHaveValue("");

    expect(await screen.findByText("Campo Obrigatório.")).toBeVisible();
  });

  it("should do not submit form when departureDate is empty", async () => {
    render(<Form />);

    const inputNameResponsible = screen.getByLabelText(
      "Digite o nome do passageiro principal"
    );

    await userEvent.type(inputNameResponsible, "Raphael");

    screen.getByDisplayValue("Raphael");

    const inputEmailResponsible = screen.getByLabelText(
      "Digite o email do passageiro principal"
    );

    await userEvent.type(inputEmailResponsible, "raphaeldesousalm@gmail.com");

    screen.getByDisplayValue("raphaeldesousalm@gmail.com");

    const inputOrigin = screen.getByLabelText("Digite a origem");

    await userEvent.type(inputOrigin, "Belo Horizonte");

    screen.getByDisplayValue("Belo Horizonte");

    const inputDestination = screen.getByLabelText("Digite o destino");

    await userEvent.type(inputDestination, "São Paulo");

    screen.getByDisplayValue("São Paulo");

    const current = new Date();
    const departureDate = new Date(
      current.getFullYear() + 1,
      current.getMonth(),
      current.getDate()
    );
    const returnDate = new Date(
      departureDate.getFullYear() + 1,
      departureDate.getMonth(),
      departureDate.getDate()
    );

    const inputReturnDate = screen.getByLabelText("Digite a data de volta");

    await userEvent.clear(inputReturnDate);

    await userEvent.type(inputReturnDate, formatDateToString(returnDate));

    screen.getByDisplayValue(formatDateToString(returnDate));

    const inputNumberOfAdults = screen.getByLabelText(
      "Digite a quantidade de viajantes (adultos)"
    );

    await userEvent.type(inputNumberOfAdults, "1");

    expect(inputNumberOfAdults).toHaveValue(1);

    const input = screen.getByLabelText("Digite a data de ida");

    const buttom = screen.getByText("Marcar");

    await userEvent.click(buttom);

    expect(input).toHaveValue("");

    expect(await screen.findByText("Campo Obrigatório.")).toBeVisible();
  });

  it("should do not submit form when returnDate is empty", async () => {
    render(<Form />);

    const inputNameResponsible = screen.getByLabelText(
      "Digite o nome do passageiro principal"
    );

    await userEvent.type(inputNameResponsible, "Raphael");

    screen.getByDisplayValue("Raphael");

    const inputEmailResponsible = screen.getByLabelText(
      "Digite o email do passageiro principal"
    );

    await userEvent.type(inputEmailResponsible, "raphaeldesousalm@gmail.com");

    screen.getByDisplayValue("raphaeldesousalm@gmail.com");

    const inputOrigin = screen.getByLabelText("Digite a origem");

    await userEvent.type(inputOrigin, "Belo Horizonte");

    screen.getByDisplayValue("Belo Horizonte");

    const inputDestination = screen.getByLabelText("Digite o destino");

    await userEvent.type(inputDestination, "São Paulo");

    screen.getByDisplayValue("São Paulo");

    const current = new Date();
    const departureDate = new Date(
      current.getFullYear() + 1,
      current.getMonth(),
      current.getDate()
    );

    const inputDepartureDate = screen.getByLabelText("Digite a data de ida");

    await userEvent.clear(inputDepartureDate);

    await userEvent.type(inputDepartureDate, formatDateToString(departureDate));

    screen.getByDisplayValue(formatDateToString(departureDate));

    const inputNumberOfAdults = screen.getByLabelText(
      "Digite a quantidade de viajantes (adultos)"
    );

    await userEvent.type(inputNumberOfAdults, "1");

    expect(inputNumberOfAdults).toHaveValue(1);

    const input = screen.getByLabelText("Digite a data de volta");

    const buttom = screen.getByText("Marcar");

    await userEvent.click(buttom);

    expect(input).toHaveValue("");

    expect(await screen.findByText("Campo Obrigatório.")).toBeVisible();
  });

  it("should do not submit form without traveler adult", async () => {
    render(<Form />);

    const inputNameResponsible = screen.getByLabelText(
      "Digite o nome do passageiro principal"
    );

    await userEvent.type(inputNameResponsible, "Raphael");

    screen.getByDisplayValue("Raphael");

    const inputEmailResponsible = screen.getByLabelText(
      "Digite o email do passageiro principal"
    );

    await userEvent.type(inputEmailResponsible, "raphaeldesousalm@gmail.com");

    screen.getByDisplayValue("raphaeldesousalm@gmail.com");

    const inputOrigin = screen.getByLabelText("Digite a origem");

    await userEvent.type(inputOrigin, "Belo Horizonte");

    screen.getByDisplayValue("Belo Horizonte");

    const inputDestination = screen.getByLabelText("Digite o destino");

    await userEvent.type(inputDestination, "São Paulo");

    screen.getByDisplayValue("São Paulo");

    const current = new Date();
    const departureDate = new Date(current.setDate(current.getDate() + 1));
    const returnDate = new Date(
      departureDate.getFullYear(),
      departureDate.getMonth(),
      departureDate.getDate() + 1
    );

    const inputDepartureDate = screen.getByLabelText("Digite a data de ida");

    await userEvent.type(inputDepartureDate, formatDateToString(departureDate));

    screen.getByDisplayValue(formatDateToString(departureDate));

    const inputReturnDate = screen.getByLabelText("Digite a data de volta");

    await userEvent.type(inputReturnDate, formatDateToString(returnDate));

    screen.getByDisplayValue(formatDateToString(returnDate));

    const inputNumberOfAdults = screen.getByLabelText(
      "Digite a quantidade de viajantes (adultos)"
    );

    await userEvent.type(inputNumberOfAdults, "0");

    expect(inputNumberOfAdults).toHaveValue(0);

    const inputNumberOfChildren = screen.getByLabelText(
      "Digite a quantidade de viajantes (Crianças)"
    );

    await userEvent.type(inputNumberOfChildren, "0");

    expect(inputNumberOfChildren).toHaveValue(0);

    const buttom = screen.getByText("Marcar");

    await userEvent.click(buttom);

    expect(
      await screen.findByText("Adicione pelo menos um viajante adulto")
    ).toBeVisible();
  });

  it("should do not submit form if origin and destination are equal", async () => {
    render(<Form />);

    const inputNameResponsible = screen.getByLabelText(
      "Digite o nome do passageiro principal"
    );

    await userEvent.type(inputNameResponsible, "Raphael");

    screen.getByDisplayValue("Raphael");

    const inputEmailResponsible = screen.getByLabelText(
      "Digite o email do passageiro principal"
    );

    await userEvent.type(inputEmailResponsible, "raphaeldesousalm@gmail.com");

    screen.getByDisplayValue("raphaeldesousalm@gmail.com");

    const inputOrigin = screen.getByLabelText("Digite a origem");

    await userEvent.type(inputOrigin, "Belo Horizonte");

    expect(inputOrigin).toHaveValue("Belo Horizonte");

    const inputDestination = screen.getByLabelText("Digite o destino");

    await userEvent.type(inputDestination, "Belo Horizonte");

    expect(inputDestination).toHaveValue("Belo Horizonte");

    const current = new Date();
    const departureDate = new Date(
      current.getFullYear() + 1,
      current.getMonth(),
      current.getDate()
    );
    const returnDate = new Date(
      departureDate.getFullYear() + 1,
      departureDate.getMonth(),
      departureDate.getDate()
    );

    const inputDepartureDate = screen.getByLabelText("Digite a data de ida");

    await userEvent.clear(inputDepartureDate);

    await userEvent.type(inputDepartureDate, formatDateToString(departureDate));

    screen.getByDisplayValue(formatDateToString(departureDate));

    const inputReturnDate = screen.getByLabelText("Digite a data de volta");

    await userEvent.clear(inputReturnDate);

    await userEvent.type(inputReturnDate, formatDateToString(returnDate));

    screen.getByDisplayValue(formatDateToString(returnDate));

    const inputNumberOfAdults = screen.getByLabelText(
      "Digite a quantidade de viajantes (adultos)"
    );

    await userEvent.type(inputNumberOfAdults, "1");

    expect(inputNumberOfAdults).toHaveValue(1);

    const inputNumberOfChildren = screen.getByLabelText(
      "Digite a quantidade de viajantes (Crianças)"
    );

    await userEvent.type(inputNumberOfChildren, "0");

    expect(inputNumberOfChildren).toHaveValue(0);

    const buttom = screen.getByText("Marcar");

    await userEvent.click(buttom);

    expect(
      await screen.findByText("Escolha um destino diferente da origem.")
    ).toBeVisible();
  });

  it("should do not submit form if return date is less than date departure", async () => {
    render(<Form />);

    const inputNameResponsible = screen.getByLabelText(
      "Digite o nome do passageiro principal"
    );

    await userEvent.type(inputNameResponsible, "Raphael");

    screen.getByDisplayValue("Raphael");

    const inputEmailResponsible = screen.getByLabelText(
      "Digite o email do passageiro principal"
    );

    await userEvent.type(inputEmailResponsible, "raphaeldesousalm@gmail.com");

    screen.getByDisplayValue("raphaeldesousalm@gmail.com");

    const inputOrigin = screen.getByLabelText("Digite a origem");

    await userEvent.type(inputOrigin, "Belo Horizonte");

    expect(inputOrigin).toHaveValue("Belo Horizonte");

    const inputDestination = screen.getByLabelText("Digite o destino");

    await userEvent.type(inputDestination, "São Paulo");

    expect(inputDestination).toHaveValue("São Paulo");

    const current = new Date();
    const departureDate = new Date(
      current.getFullYear() + 1,
      current.getMonth(),
      current.getDate()
    );
    const returnDate = new Date(
      departureDate.getFullYear() - 1,
      departureDate.getMonth(),
      departureDate.getDate()
    );

    const inputDepartureDate = screen.getByLabelText("Digite a data de ida");

    await userEvent.clear(inputDepartureDate);

    await userEvent.type(inputDepartureDate, formatDateToString(departureDate));

    screen.getByDisplayValue(formatDateToString(departureDate));

    const inputReturnDate = screen.getByLabelText("Digite a data de volta");

    await userEvent.clear(inputReturnDate);

    await userEvent.type(inputReturnDate, formatDateToString(returnDate));

    screen.getByDisplayValue(formatDateToString(returnDate));

    const inputNumberOfAdults = screen.getByLabelText(
      "Digite a quantidade de viajantes (adultos)"
    );

    await userEvent.type(inputNumberOfAdults, "1");

    expect(inputNumberOfAdults).toHaveValue(1);

    const inputNumberOfChildren = screen.getByLabelText(
      "Digite a quantidade de viajantes (Crianças)"
    );

    await userEvent.type(inputNumberOfChildren, "0");

    expect(inputNumberOfChildren).toHaveValue(0);

    const buttom = screen.getByText("Marcar");

    await userEvent.click(buttom);

    expect(departureDate.getTime()).toBeGreaterThan(returnDate.getTime());

    expect(
      await screen.findByText(
        "Data da volta precisa ser maior que a data da ida."
      )
    ).toBeVisible();
  });

  it("should do not submit form if return date is equal date departure", async () => {
    render(<Form />);

    const inputNameResponsible = screen.getByLabelText(
      "Digite o nome do passageiro principal"
    );

    await userEvent.type(inputNameResponsible, "Raphael");

    screen.getByDisplayValue("Raphael");

    const inputEmailResponsible = screen.getByLabelText(
      "Digite o email do passageiro principal"
    );

    await userEvent.type(inputEmailResponsible, "raphaeldesousalm@gmail.com");

    screen.getByDisplayValue("raphaeldesousalm@gmail.com");

    const inputOrigin = screen.getByLabelText("Digite a origem");

    await userEvent.type(inputOrigin, "Belo Horizonte");

    expect(inputOrigin).toHaveValue("Belo Horizonte");

    const inputDestination = screen.getByLabelText("Digite o destino");

    await userEvent.type(inputDestination, "São Paulo");

    expect(inputDestination).toHaveValue("São Paulo");

    const current = new Date();
    const departureDate = new Date(
      current.getFullYear() + 1,
      current.getMonth(),
      current.getDate()
    );
    const returnDate = new Date(
      departureDate.getFullYear(),
      departureDate.getMonth(),
      departureDate.getDate()
    );

    const inputDepartureDate = screen.getByLabelText("Digite a data de ida");

    await userEvent.clear(inputDepartureDate);

    await userEvent.type(inputDepartureDate, formatDateToString(departureDate));

    screen.getByDisplayValue(formatDateToString(departureDate));

    const inputReturnDate = screen.getByLabelText("Digite a data de volta");

    await userEvent.clear(inputReturnDate);

    await userEvent.type(inputReturnDate, formatDateToString(returnDate));

    expect(inputReturnDate).toHaveValue(formatDateToString(departureDate));

    const inputNumberOfAdults = screen.getByLabelText(
      "Digite a quantidade de viajantes (adultos)"
    );

    await userEvent.type(inputNumberOfAdults, "1");

    expect(inputNumberOfAdults).toHaveValue(1);

    const inputNumberOfChildren = screen.getByLabelText(
      "Digite a quantidade de viajantes (Crianças)"
    );

    await userEvent.type(inputNumberOfChildren, "0");

    expect(inputNumberOfChildren).toHaveValue(0);

    const buttom = screen.getByText("Marcar");

    await userEvent.click(buttom);

    expect(departureDate.getTime()).toBe(returnDate.getTime());

    expect(
      await screen.findByText(
        "Data da volta precisa ser maior que a data da ida."
      )
    ).toBeVisible();
  });

  it("should do not submit form if departure date is less than current date", async () => {
    render(<Form />);

    const inputNameResponsible = screen.getByLabelText(
      "Digite o nome do passageiro principal"
    );

    await userEvent.type(inputNameResponsible, "Raphael");

    screen.getByDisplayValue("Raphael");

    const inputEmailResponsible = screen.getByLabelText(
      "Digite o email do passageiro principal"
    );

    await userEvent.type(inputEmailResponsible, "raphaeldesousalm@gmail.com");

    screen.getByDisplayValue("raphaeldesousalm@gmail.com");

    const inputOrigin = screen.getByLabelText("Digite a origem");

    await userEvent.type(inputOrigin, "Belo Horizonte");

    expect(inputOrigin).toHaveValue("Belo Horizonte");

    const inputDestination = screen.getByLabelText("Digite o destino");

    await userEvent.type(inputDestination, "São Paulo");

    expect(inputDestination).toHaveValue("São Paulo");

    const current = new Date();
    const departureDate = new Date(
      current.getFullYear() - 1,
      current.getMonth(),
      current.getDate()
    );
    const returnDate = new Date(
      departureDate.getFullYear() + 2,
      departureDate.getMonth(),
      departureDate.getDate()
    );

    const inputDepartureDate = screen.getByLabelText("Digite a data de ida");

    await userEvent.clear(inputDepartureDate);

    await userEvent.type(inputDepartureDate, formatDateToString(departureDate));

    screen.getByDisplayValue(formatDateToString(departureDate));

    const inputReturnDate = screen.getByLabelText("Digite a data de volta");

    await userEvent.clear(inputReturnDate);

    await userEvent.type(inputReturnDate, formatDateToString(returnDate));

    screen.getByDisplayValue(formatDateToString(returnDate));

    const inputNumberOfAdults = screen.getByLabelText(
      "Digite a quantidade de viajantes (adultos)"
    );

    await userEvent.type(inputNumberOfAdults, "1");

    expect(inputNumberOfAdults).toHaveValue(1);

    const inputNumberOfChildren = screen.getByLabelText(
      "Digite a quantidade de viajantes (Crianças)"
    );

    await userEvent.type(inputNumberOfChildren, "0");

    expect(inputNumberOfChildren).toHaveValue(0);

    const buttom = screen.getByText("Marcar");

    await userEvent.click(buttom);

    const currentDate = new Date();

    expect(departureDate.getTime()).toBeLessThanOrEqual(currentDate.getTime());

    expect(
      await screen.findByText(
        "Data da ida precisa ser maior que a data de hoje."
      )
    ).toBeVisible();
  });

  it("should sucess submit form", async () => {
    render(<Form />);

    const inputNameResponsible = screen.getByLabelText(
      "Digite o nome do passageiro principal"
    );

    await userEvent.type(inputNameResponsible, "Raphael");

    screen.getByDisplayValue("Raphael");

    const inputEmailResponsible = screen.getByLabelText(
      "Digite o email do passageiro principal"
    );

    await userEvent.type(inputEmailResponsible, "raphaeldesousalm@gmail.com");

    screen.getByDisplayValue("raphaeldesousalm@gmail.com");

    const inputOrigin = screen.getByLabelText("Digite a origem");

    await userEvent.type(inputOrigin, "Belo Horizonte");

    expect(inputOrigin).toHaveValue("Belo Horizonte");

    const inputDestination = screen.getByLabelText("Digite o destino");

    await userEvent.type(inputDestination, "São Paulo");

    expect(inputDestination).toHaveValue("São Paulo");

    const current = new Date();
    const departureDate = new Date(
      current.getFullYear() + 1,
      current.getMonth(),
      current.getDate()
    );
    const returnDate = new Date(
      departureDate.getFullYear() + 1,
      departureDate.getMonth(),
      departureDate.getDate()
    );

    const inputDepartureDate = screen.getByLabelText("Digite a data de ida");

    await userEvent.clear(inputDepartureDate);

    await userEvent.type(inputDepartureDate, formatDateToString(departureDate));

    screen.getByDisplayValue(formatDateToString(departureDate));

    const inputReturnDate = screen.getByLabelText("Digite a data de volta");

    await userEvent.clear(inputReturnDate);

    await userEvent.type(inputReturnDate, formatDateToString(returnDate));

    screen.getByDisplayValue(formatDateToString(returnDate));

    const inputNumberOfAdults = screen.getByLabelText(
      "Digite a quantidade de viajantes (adultos)"
    );

    await userEvent.type(inputNumberOfAdults, "1");

    expect(inputNumberOfAdults).toHaveValue(1);

    const inputNumberOfChildren = screen.getByLabelText(
      "Digite a quantidade de viajantes (Crianças)"
    );

    await userEvent.type(inputNumberOfChildren, "0");

    expect(inputNumberOfChildren).toHaveValue(0);

    const buttom = screen.getByText("Marcar");

    await userEvent.click(buttom);

    expect(await screen.findByText("Viagem marcada!")).toBeVisible();
  });

  it("should next submit form all inputs are disable", async () => {
    render(<Form />);

    const inputNameResponsible = screen.getByLabelText(
      "Digite o nome do passageiro principal"
    );

    await userEvent.type(inputNameResponsible, "Raphael");

    screen.getByDisplayValue("Raphael");

    const inputEmailResponsible = screen.getByLabelText(
      "Digite o email do passageiro principal"
    );

    await userEvent.type(inputEmailResponsible, "raphaeldesousalm@gmail.com");

    screen.getByDisplayValue("raphaeldesousalm@gmail.com");

    const inputOrigin = screen.getByLabelText("Digite a origem");

    await userEvent.type(inputOrigin, "Belo Horizonte");

    expect(inputOrigin).toHaveValue("Belo Horizonte");

    const inputDestination = screen.getByLabelText("Digite o destino");

    await userEvent.type(inputDestination, "São Paulo");

    expect(inputDestination).toHaveValue("São Paulo");

    const current = new Date();
    const departureDate = new Date(
      current.getFullYear() + 1,
      current.getMonth(),
      current.getDate()
    );
    const returnDate = new Date(
      departureDate.getFullYear() + 1,
      departureDate.getMonth(),
      departureDate.getDate()
    );

    const inputDepartureDate = screen.getByLabelText("Digite a data de ida");

    await userEvent.clear(inputDepartureDate);

    await userEvent.type(inputDepartureDate, formatDateToString(departureDate));

    screen.getByDisplayValue(formatDateToString(departureDate));

    const inputReturnDate = screen.getByLabelText("Digite a data de volta");

    await userEvent.clear(inputReturnDate);

    await userEvent.type(inputReturnDate, formatDateToString(returnDate));

    screen.getByDisplayValue(formatDateToString(returnDate));

    const inputNumberOfAdults = screen.getByLabelText(
      "Digite a quantidade de viajantes (adultos)"
    );

    await userEvent.type(inputNumberOfAdults, "1");

    expect(inputNumberOfAdults).toHaveValue(1);

    const inputNumberOfChildren = screen.getByLabelText(
      "Digite a quantidade de viajantes (Crianças)"
    );

    await userEvent.type(inputNumberOfChildren, "0");

    expect(inputNumberOfChildren).toHaveValue(0);

    const buttom = screen.getByText("Marcar");

    await userEvent.click(buttom);

    expect(await screen.findByText("Viagem marcada!")).toBeVisible();

    expect(inputNameResponsible).toBeDisabled();
    expect(inputEmailResponsible).toBeDisabled();
    expect(inputOrigin).toBeDisabled();
    expect(inputDestination).toBeDisabled();
    expect(inputDepartureDate).toBeDisabled();
    expect(inputReturnDate).toBeDisabled();
    expect(inputNumberOfAdults).toBeDisabled();
    expect(inputNumberOfChildren).toBeDisabled();
    expect(buttom).toBeDisabled();
  });

  it("should mark other trip", async () => {
    render(<Form />);

    const inputNameResponsible = screen.getByLabelText(
      "Digite o nome do passageiro principal"
    );

    await userEvent.type(inputNameResponsible, "Raphael");

    screen.getByDisplayValue("Raphael");

    const inputEmailResponsible = screen.getByLabelText(
      "Digite o email do passageiro principal"
    );

    await userEvent.type(inputEmailResponsible, "raphaeldesousalm@gmail.com");

    screen.getByDisplayValue("raphaeldesousalm@gmail.com");

    const inputOrigin = screen.getByLabelText("Digite a origem");

    await userEvent.type(inputOrigin, "Belo Horizonte");

    expect(inputOrigin).toHaveValue("Belo Horizonte");

    const inputDestination = screen.getByLabelText("Digite o destino");

    await userEvent.type(inputDestination, "São Paulo");

    expect(inputDestination).toHaveValue("São Paulo");

    const current = new Date();
    const departureDate = new Date(
      current.getFullYear() + 1,
      current.getMonth(),
      current.getDate()
    );
    const returnDate = new Date(
      departureDate.getFullYear() + 1,
      departureDate.getMonth(),
      departureDate.getDate()
    );

    const inputDepartureDate = screen.getByLabelText("Digite a data de ida");

    await userEvent.clear(inputDepartureDate);

    await userEvent.type(inputDepartureDate, formatDateToString(departureDate));

    screen.getByDisplayValue(formatDateToString(departureDate));

    const inputReturnDate = screen.getByLabelText("Digite a data de volta");

    await userEvent.clear(inputReturnDate);

    await userEvent.type(inputReturnDate, formatDateToString(returnDate));

    screen.getByDisplayValue(formatDateToString(returnDate));

    const inputNumberOfAdults = screen.getByLabelText(
      "Digite a quantidade de viajantes (adultos)"
    );

    await userEvent.type(inputNumberOfAdults, "1");

    expect(inputNumberOfAdults).toHaveValue(1);

    const inputNumberOfChildren = screen.getByLabelText(
      "Digite a quantidade de viajantes (Crianças)"
    );

    await userEvent.type(inputNumberOfChildren, "0");

    expect(inputNumberOfChildren).toHaveValue(0);

    const buttom = screen.getByText("Marcar");

    await userEvent.click(buttom);

    expect(await screen.findByText("Viagem marcada!")).toBeVisible();

    expect(inputNameResponsible).toBeDisabled();
    expect(inputEmailResponsible).toBeDisabled();
    expect(inputOrigin).toBeDisabled();
    expect(inputDestination).toBeDisabled();
    expect(inputDepartureDate).toBeDisabled();
    expect(inputReturnDate).toBeDisabled();
    expect(inputNumberOfAdults).toBeDisabled();
    expect(inputNumberOfChildren).toBeDisabled();
    expect(buttom).toBeDisabled();

    const otherTrip = screen.getByText(
      "Clique aqui para marcar mais uma viagem"
    );

    await userEvent.click(otherTrip);

    expect(inputNameResponsible).not.toBeDisabled();
    expect(inputEmailResponsible).not.toBeDisabled();
    expect(inputOrigin).not.toBeDisabled();
    expect(inputDestination).not.toBeDisabled();
    expect(inputDepartureDate).not.toBeDisabled();
    expect(inputReturnDate).not.toBeDisabled();
    expect(inputNumberOfAdults).not.toBeDisabled();
    expect(inputNumberOfChildren).not.toBeDisabled();
    expect(buttom).not.toBeDisabled();

    expect(inputNameResponsible).toHaveValue("");
    expect(inputEmailResponsible).toHaveValue("");
    expect(inputOrigin).toHaveValue("");
    expect(inputDestination).toHaveValue("");
    expect(inputDepartureDate).toHaveValue("");
    expect(inputReturnDate).toHaveValue("");
    expect(inputNumberOfAdults).toHaveValue(0);
    expect(inputNumberOfChildren).toHaveValue(0);

    expect(screen.queryByText("Viagem marcada!")).not.toBeInTheDocument();
  });
});
