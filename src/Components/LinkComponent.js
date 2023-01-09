import {title} from '../Data/Data';
import {Title,BlackWarrper} from '../css/Styles';
const LinkComonent = (props) => {
  return (
    <BlackWarrper onClick={() => (window.location.href = `${props.link}`)}>
      <img
      alt='whatsapp'
        style={{
          height: "3rem",
        }}
        src={props.logo}
      />
     <Title> {title.MakeYourOrder}</Title>
    </BlackWarrper>
  );
};

export default LinkComonent;
