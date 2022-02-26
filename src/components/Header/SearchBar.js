import React, { useContext, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import searchIcon from '../../assets/search-icon.png';
import ProductsContext from '../../context/ProductsContext';

const SearchBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  const [searchPhrase, setSearchPhrase] = useState('');
  const { toggleFilter } = useContext(ProductsContext);
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    toggleFilter(searchPhrase, 'search');
  }, [searchPhrase]);

  return (
    <Container onClick={focusInput} isMobile={isMobile}>
      <Icon src={searchIcon} alt="Search" />
      <Input
        type="text"
        ref={inputRef}
        onChange={(e) => setSearchPhrase(e.target.value)}
        placeholder={'Search...'}
      />
    </Container>
  );
};

const Input = styled.input`
  background: none;
  color: inherit;
  border: none;
  cursor: pointer;
  outline: inherit;
  font-family: Montserrat;
  padding-left: 10px;
  width: 90%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: #f5f5f5;
  cursor: pointer;
  ${({ isMobile }) =>
    isMobile
      ? `padding: 5px; margin: 5px 30px 5px 30px;`
      : `padding: 5px 0 5px 0; width: 200px;`}
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  padding-left: 5px;
`;

export default SearchBar;
