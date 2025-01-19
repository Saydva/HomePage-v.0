import Hero from "../pageComponents/hero";
import Color from "../pageComponents/colors";
import Content from "../pageComponents/content";

function Home(props) {
  const switcher = props.switcher;

  return (
    <div>
      <Hero switcher={switcher} />
      {/* <Color /> */}
      <Content switcher={switcher} />
    </div>
  );
}

export default Home;
