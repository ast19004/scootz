import logoImage from "../../assets/scootzLogo.svg";
const Logo = (props) => {
  const propsClasses = props.className ? props.className : "";
  const classes = `App-logo ${propsClasses}`;
  return (
    <img
      className={propsClasses + classes}
      src={logoImage}
      alt="Scootz Logo"
      height={props.mobile ? "34px" : "40px"}
    />
  );
};

export default Logo;
