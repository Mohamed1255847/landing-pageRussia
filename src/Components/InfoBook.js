import { InfoBookWarpper, Title, Pargraph } from "../css/Styles";
import { BookInfo } from "../Data/Data";
const InfoBook = () => {
  return (
      <InfoBookWarpper>
        <Title> {BookInfo.title}</Title>

        <Pargraph>{BookInfo.first} </Pargraph>
        <Pargraph>{BookInfo.second} </Pargraph>
        <Pargraph>{BookInfo.third} </Pargraph>
      </InfoBookWarpper>
  );
};

export default InfoBook;
