import Parent from "./parent";
import "./header.css";
export default function Header(props) {
  return (
    <Parent className="header">
      <img src={props.image} alt="Beach destination" />
      <h1 className="h1">Dream Travel Destinations</h1>
      <p className="p">
        Discover the best placese to visit and creat unforgetable memories
      </p>
    </Parent>
  );
}
