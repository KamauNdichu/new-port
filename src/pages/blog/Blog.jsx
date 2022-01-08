import Navbar from "../../components/navbar/Navbar";
import News from "../../components/news/News";
import "./blog.css";

export default function Blog() {
  return (
    <div className="blogContainer">
      <Navbar />
      <News />
    </div>
  );
}
