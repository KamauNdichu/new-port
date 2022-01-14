import "./footer.css";

export default function Footer() {
  const date = new Date();
  return (
    <div className="footerContainer">
      <h3 className="footerText">
        Copyright &copy; {date.getFullYear()}. John Ndichu
      </h3>
    </div>
  );
}
