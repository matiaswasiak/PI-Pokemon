import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getTypes } from "../../redux/actions";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import limitCheckBox from "../utils/LimitCheck";

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
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

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

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

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
            <CreateForm>
              <InputText>
                <label>
                  Name:
                  <input type="text" />
                </label>
                <div>
                  <label>
                    Height:
                    <input type="text" />
                  </label>
                  <label>
                    Weight:
                    <input type="text" />
                  </label>
                </div>
              </InputText>
              <InputRange>
                <div>
                  <label>
                    Health:
                    <input type="range" />
                  </label>
                  <label>
                    Attack:
                    <input type="range" />
                  </label>
                </div>
                <div>
                  <label>
                    Defense:
                    <input type="range" />
                  </label>
                  <label>
                    Speed:
                    <input type="range" />
                  </label>
                </div>
              </InputRange>
              <InputTypes>
                <label>
                  Types:
                  <select>
                    {types.map((t, index) => {
                      return (
                        <option key={index} value={t.name}>
                          {t.name}
                        </option>
                      );
                    })}
                  </select>
                </label>
                <div></div>
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
`;

const CreateCard = styled.div`
  width: 700px;
  margin: 0 auto;
  height: 100%;
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
      background: #ffffff;
      opacity: 0.2;
      border: 2px solid #b889ef;
      box-sizing: border-box;
      border-radius: 20px;
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
    height: 50px;
    background: #ffffff;
    opacity: 0.2;
    border: 2px solid #b889ef;
    box-sizing: border-box;
    border-radius: 20px;
  }
`;

export default CreatePokemon;
