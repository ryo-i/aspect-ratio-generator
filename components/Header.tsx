import Link from 'next/link';
import Data from '../data/data.json';
import styled from 'styled-components';
import { pageSize } from '../styles/mixin';
import cssVariables from '../styles/variables.json';


const variable = cssVariables.variable;
const title = Data.header.title;
const text = Data.header.text;


// Style
const HeaderTag = styled.header`
  text-align: center;
  background: ${variable.bgColor_g};
  .wrapper {
    ${pageSize}
    padding: 30px;
  }
  h2 {
    font-size: 2em;
  }
  nav span, nav a {
    padding-right: 0.5em;
  }
`;


// Component
function Header() {
  return (
    <HeaderTag>
      <div className="wrapper">
        <h2>{ title }</h2>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
        <nav>
          <span>MENU:</span>
          <Link href="/"><a>Home</a></Link>
          <Link href="/about"><a>About</a></Link>
        </nav>
      </div>
    </HeaderTag>
  );
}

export default Header;
