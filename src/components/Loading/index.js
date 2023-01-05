/* eslint-disable react/jsx-no-useless-fragment */
import PropTypes from 'prop-types';
import { Container } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return <></>;
  return (
    <Container>
      <div id="container" />
      <div id="loading">
        <div id="fountainG">
          <div id="fountainG_1" className="fountainG" />
          <div id="fountainG_2" className="fountainG" />
          <div id="fountainG_3" className="fountainG" />
        </div>
      </div>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
