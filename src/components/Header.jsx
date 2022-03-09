import { useContext } from "react";
import MyContext from "../context/MyContext";

const Header = () => {
  const { headerText, extra, setExtra, refData, refData2 } = useContext(MyContext);
  return (
    <header>
      <h1>{headerText}</h1>
      <a href={refData.url} >{refData.text}</a>
      <p>{refData2} </p>
    </header>
  );
};

export default Header;