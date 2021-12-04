import { Set, styled } from 'bumbag';
import GoogleLogin from './GoogleLogin';

const Wrapper = styled.div`
  button:nth-of-type(1) {
    margin-right: 1rem;
  }
`;

function LoginButtons() {
  return (
    <Set
      orientation="vertical"
      spacing="minor-2"
      width="100%"
      alignItems="center"
    >
      <GoogleLogin />
    </Set>
  );
}

export default LoginButtons;
