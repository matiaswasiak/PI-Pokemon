import styled from "styled-components";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  const maxPages = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= maxPages; i++) {
    pageNumbers.push(i);
  }

  const setPage = (number) => {
    paginate(number);
    localStorage.setItem("page", number);
  };

  return (
    <Container>
      <ul>
        <li>
          <a
            href="#"
            onClick={() => currentPage > 1 && setPage(currentPage - 1)}
          >
            prev
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => setPage(number)} href="#">
              {number}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            onClick={() => currentPage !== maxPages && setPage(currentPage + 1)}
          >
            next
          </a>
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.nav`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1210px;
  width: 100%;
  height: 60px;
  background-color: #b6a1ea;
  border-radius: 0 0 20px 20px;
  border: 2px #ba72f550 solid;

  ul {
    display: flex;
    padding: 0;

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
