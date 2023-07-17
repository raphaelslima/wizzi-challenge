import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import "./Form.scss";

//yup
import * as yup from "yup";

// Helpers
import { formatStringToDate } from "../../helpers/date";

const schema = yup.object({
  nameResponsible: yup.string().required("Campo Obrigatório."),
  emailResponsible: yup
    .string()
    .required("Campo Obrigatório.")
    .email("Insira um email válido"),
  origin: yup.string().required("Campo Obrigatório."),
  destination: yup.string().required("Campo Obrigatório."),
  departureDate: yup.string().required("Campo Obrigatório."),
  returnDate: yup.string().required("Campo Obrigatório."),
  numberOfAdults: yup
    .number()
    .min(1, "Adicione pelo menos um viajante adulto")
    .transform((value) =>
      isNaN(value) || value === null || value === undefined ? 0 : value
    ),
  numberOfChildren: yup
    .number()
    .min(0, "Este campo não pode ser negativo")
    .transform((value) =>
      isNaN(value) || value === null || value === undefined ? 0 : value
    ),
});

const Form = () => {
  const [formSendedSucess, setFormSendedSucess] = useState<boolean>(false);
  const [disableField, setFormDisableField] = useState<boolean>(false);

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const markOtherTrip = (): void => {
    setFormDisableField(false);
    reset();
    setFormSendedSucess(false);
  };

  const handleSubmit = (data: any): void => {
    const departureDate = formatStringToDate(data.departureDate);
    const returnDate = formatStringToDate(data.returnDate);
    if (returnDate <= departureDate) {
      setError("returnDate", {
        type: "manual",
        message: "Data da volta precisa ser maior que a data da ida.",
      });

      setFormSendedSucess(false);
      return;
    }

    if (departureDate < new Date()) {
      setError("departureDate", {
        type: "manual",
        message: "Data da ida precisa ser maior que a data de hoje.",
      });

      setFormSendedSucess(false);
      return;
    }

    if (data.origin === data.destination) {
      setError("destination", {
        type: "manual",
        message: "Escolha um destino diferente da origem.",
      });

      setFormSendedSucess(false);
      return;
    }

    setFormSendedSucess(true);
    setFormDisableField(true);
  };

  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <div className="field-form nameResponsible">
        <label htmlFor="nameResponsible">Nome do passageiro principal</label>
        <input
          type="text"
          aria-label="Digite o nome do passageiro principal"
          {...register("nameResponsible")}
          disabled={disableField}
        />
        <span className="error">{errors?.nameResponsible?.message}</span>
      </div>
      <div className="field-form emailResponsible">
        <label htmlFor="emailResponsible">E-mail do passageiro principal</label>
        <input
          type="email"
          aria-label="Digite o email do passageiro principal"
          {...register("emailResponsible")}
          disabled={disableField}
        />
        <span className="error">{errors?.emailResponsible?.message}</span>
      </div>
      <div className="field-form origin">
        <label htmlFor="origin">Origem</label>
        <input
          type="text"
          aria-label="Digite a origem"
          {...register("origin")}
          disabled={disableField}
        />
        <span className="error">{errors?.origin?.message}</span>
      </div>
      <div className="field-form destinaton">
        <label htmlFor="destination">Destino</label>
        <input
          type="text"
          aria-label="Digite o destino"
          {...register("destination")}
          disabled={disableField}
        />
        <span className="error">{errors?.destination?.message}</span>
      </div>
      <div className="field-form dateDeparture">
        <label htmlFor="departureDate">Data de ida</label>
        <input
          type="date"
          aria-label="Digite a data de ida"
          {...register("departureDate")}
          disabled={disableField}
        />
        <span className="error">{errors?.departureDate?.message}</span>
      </div>

      <div className="field-form DateReturn">
        <label htmlFor="returnDate">Data de volta</label>
        <input
          type="date"
          aria-label="Digite a data de volta"
          {...register("returnDate")}
          disabled={disableField}
        />
        <span className="error">{errors?.returnDate?.message}</span>
      </div>

      <div className="field-form qtdAdults">
        <label htmlFor="numberOfAdults">
          Quantidade de viajantes (adultos)
        </label>
        <input
          type="number"
          aria-label="Digite a quantidade de viajantes (adultos)"
          {...register("numberOfAdults")}
          min={0}
          defaultValue={0}
          disabled={disableField}
        />
        <span className="error">{errors?.numberOfAdults?.message}</span>
      </div>
      <div className="field-form qtdChildren">
        <label htmlFor="numberOfChildren">
          Quantidade de viajantes (Crianças)
        </label>
        <input
          type="number"
          aria-label="Digite a quantidade de viajantes (Crianças)"
          {...register("numberOfChildren")}
          min={0}
          defaultValue={0}
          disabled={disableField}
        />
        <span className="error">{errors?.numberOfChildren?.message}</span>
      </div>

      <div className="btn">
        <button type="submit" disabled={disableField} className="submit">
          Marcar
        </button>
      </div>

      {formSendedSucess ? (
        <span className="sucess" aria-label="Viagem marcada!">
          <p>Viagem marcada!</p>
          <button onClick={() => markOtherTrip()} className="btn-otherTrip">
            Clique aqui para marcar mais uma viagem
          </button>
        </span>
      ) : (
        false
      )}
    </form>
  );
};

export default Form;
