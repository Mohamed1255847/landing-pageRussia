import LinkComonent from "./Components/LinkComponent";
import countapi from "countapi-js";
import { Data } from "./Data/Data";
import {Wrapper,BoxWarpper,WhatsAppWarpper} from './css/Styles';
import InfoBook from './Components/InfoBook';
const App = () => {
  countapi.visits().then((result) => {
    console.log(result.value);
  });

  return (
 <Wrapper>
  <BoxWarpper>
        <InfoBook />
        <WhatsAppWarpper>
        {Data.map((elemnt) => (
          <LinkComonent
            key={elemnt.id}
            link={elemnt.link}
            logo={elemnt.logo}
            id={elemnt.id}
          />
        ))}
         </WhatsAppWarpper>
        </BoxWarpper>
    </Wrapper>
  );
};

export default App;
