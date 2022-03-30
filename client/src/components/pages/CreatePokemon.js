import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes, postPokemon } from "../../redux/actions";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import limitCheckBox from "../utils/LimitCheck";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

let formInputs = {
  name: "",
  height: 50,
  weight: 50,
  health: 50,
  attack: 50,
  defense: 50,
  speed: 50,
  types: [],
};

const CreatePokemon = () => {
  // ------------------------- useDispatch ------------------------- //
  const dispatch = useDispatch();

  // ------------------------- useSelector ------------------------- //
  const types = useSelector((state) => state.types);

  // ------------------------- useNavigate ------------------------- //
  const navigate = useNavigate();

  // ------------------------- useEffect ------------------------- //
  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  // ------------------------- Handlers ------------------------- //
  const handleChange = (e) => {
    limitCheckBox();

    e.target.name === "types"
      ? formInputs["types"].indexOf(e.target.value) !== -1
        ? (formInputs = {
            ...formInputs,
            types: formInputs["types"].filter((f) => f !== e.target.value),
          })
        : (formInputs = {
            ...formInputs,
            types: [...formInputs.types, e.target.value],
          })
      : (formInputs = {
          ...formInputs,
          [e.target.name]: e.target.value,
        });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const answer = window.confirm("Are you sure?");

    function resetForm() {
      document.getElementById("formCreate").reset();
      formInputs = {
        name: "unknown",
        height: 50,
        weight: 50,
        health: 50,
        attack: 50,
        defense: 50,
        speed: 50,
        types: [],
      };
    }

    answer
      ? (() => {
          window.alert("Your Pokemon was saved to the database.");
          dispatch(postPokemon(formInputs));

          resetForm();
          navigate("/home");
        })()
      : (() => {
          window.alert("Your Pokemon wasn't saved to the database.");

          resetForm();
        })();
  };

  return (
    <div>
      <Header />
      <Container>
        <Card>
          <CreateCard>
            <CreateTitle>
              <h2>Your Own Pokemon</h2>
              <p>Insert a name, select its stats and choose the types.</p>
            </CreateTitle>
            <CreateForm
              id="formCreate"
              onSubmit={handleSubmit}
              onChange={handleChange}
            >
              <InputText>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    pattern="[A-Za-z0-9]+"
                    required
                  />
                </label>
                <div>
                  <label>
                    Height (kg):
                    <input
                      type="number"
                      name="height"
                      min="0"
                      max="255"
                      defaultValue={50}
                    />
                  </label>
                  <label>
                    Weight (m):
                    <input
                      type="number"
                      name="weight"
                      min="0"
                      max="255"
                      defaultValue={50}
                    />
                  </label>
                </div>
              </InputText>
              <InputRange>
                <div>
                  <label>
                    Health:
                    <input
                      type="range"
                      name="health"
                      min="0"
                      max="100"
                      step="10"
                    />
                  </label>
                  <label>
                    Attack:
                    <input
                      type="range"
                      name="attack"
                      min="0"
                      max="100"
                      step="10"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Defense:
                    <input
                      type="range"
                      name="defense"
                      min="0"
                      max="100"
                      step="10"
                    />
                  </label>
                  <label>
                    Speed:
                    <input
                      type="range"
                      name="speed"
                      min="0"
                      max="100"
                      step="10"
                    />
                  </label>
                </div>
              </InputRange>
              <InputTypes>
                <label>Types:</label>

                <div id="checkboxContent">
                  {types.map((t, index) => {
                    return (
                      <React.Fragment key={index}>
                        <input
                          type="checkbox"
                          value={t.name}
                          name="types"
                          id={`${t.name}-${index}`}
                        />
                        <label htmlFor={`${t.name}-${index}`}>{t.name}</label>
                      </React.Fragment>
                    );
                  })}
                </div>

                <div>
                  <input type="submit" value="Create" />
                </div>
              </InputTypes>
            </CreateForm>
          </CreateCard>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

const Container = styled.main`
  display: flex;
  background: linear-gradient(#e0cfeb, #c9b7fa);
  height: calc(100vh - 160px);
`;

const Card = styled.div`
  box-sizing: border-box;
  padding: 50px 0;
  width: 1200px;
  height: 700px;
  background: linear-gradient(#efdffd, #dbcffa);
  border-radius: 20px;
  margin: auto;
  overflow-y: scroll;
  overflow-x: hidden;

  /* width */
  ::-webkit-scrollbar {
    width: 15px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #fefffc80;
    border-radius: 20px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(#9816ff50, #353ab050);
    border-radius: 20px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(#9816ff80, #353ab080);
  }
`;

const CreateCard = styled.div`
  width: 700px;
  margin: auto;
  height: min-content;
`;

const CreateForm = styled.form``;

const InputText = styled.div`
  label {
    display: flex;
    flex-direction: column;
    font-style: normal;
    font-weight: 600;
    font-size: 26px;

    input {
      margin-top: 13px;
      margin-bottom: 20px;
      width: 330px;
      height: 50px;
      padding: 0 20px;
      background: #e5daf1;
      border: 2px solid #b889ef;
      box-sizing: border-box;
      border-radius: 20px;

      &:focus-visible {
        font-size: 15px;
        outline: 0 solid #d5a8f9;
      }
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const InputRange = styled.div`
  width: 500px;
  margin: 0 auto;

  div {
    display: flex;
    justify-content: space-between;

    label {
      display: flex;
      flex-direction: column;
      font-style: normal;
      font-weight: 600;
      font-size: 22px;

      input {
        margin-top: 8px;
        margin-bottom: 20px;
        width: 200px;
      }
    }
  }
`;

const CreateTitle = styled.div`
  h2 {
    margin: 0;
    font-weight: 700;
    font-size: 35px;
  }

  p {
    font-weight: 400;
    font-size: 26px;
  }
`;

const InputTypes = styled.div`
  label {
    font-style: normal;
    font-weight: 600;
    font-size: 26px;

    select {
      margin-left: 20px;
    }
  }

  div {
    margin-top: 13px;
    width: 700px;
    min-height: min-content;
    padding: 20px;
    background: #e5daf1;
    border: 2px solid #b889ef;
    box-sizing: border-box;
    border-radius: 20px;

    input {
      margin-bottom: 20px;
      margin-right: 5px;
      cursor: pointer;
    }

    label {
      cursor: pointer;
      margin-right: 20px;
      color: #00000095;
    }
  }

  div:last-child {
    margin-top: 20px;
    padding: 0;
    border: none;

    input {
      margin: 0;
      width: 100%;
      height: 50px;
      border-radius: 20px;
      border: none;
      font-size: 30px;
      cursor: pointer;
      color: #ffffff;
      background-color: #d5a8f9;

      &:hover {
        background-color: #9816ff80;
      }
    }
  }
`;

export default CreatePokemon;
