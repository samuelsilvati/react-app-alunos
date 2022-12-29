import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav } from './Styled';

export default function Header() {
  const clicado = useSelector((state) => state.example.clicado);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/">
        <FaSignInAlt size={24} />
      </Link>
      <span>{clicado ? 'Clicado' : 'Não clicado'}</span>
    </Nav>
  );
}
