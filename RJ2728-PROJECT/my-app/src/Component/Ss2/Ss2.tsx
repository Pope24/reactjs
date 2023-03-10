import Content from "./Content/Content";
import Header from "./Header/Header";
import BlockUI1 from "./HomeworkBlock/BlockUI1/BlockUI1";
import BlockUI2 from "./HomeworkBlock/BlockUI2/BlockUI2";
import Styles from "./Ss2.module.css";
function Ss2() {
  return (
    <div className={Styles.content__ss2}>
      <Header />
      <Content />
      <BlockUI1 />
      <BlockUI2 />
    </div>
  );
}

export default Ss2;
