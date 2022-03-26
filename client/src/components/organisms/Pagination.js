import styled from "styled-components";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);

  return (
    <Container>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.nav`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1210px;
  height: 60px;
  background-color: #b6a1ea;
  border-radius: 0 0 20px 20px;
  border: 2px #ba72f550 solid;

  ul {
    display: flex;

    li {
      margin: 0 15px;
      list-style: none;

      a {
        text-decoration: none;
        color: white;
        font-size: 18px;

        &:focus {
          color: #9816ff;
        }
      }
    }
  }
`;

export default Pagination;
