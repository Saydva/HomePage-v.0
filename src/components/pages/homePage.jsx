import Hero from "../pageComponents/hero";
import Color from "../pageComponents/colors";
import Content from "../pageComponents/content";
import ObserverProvider from "../utilities/ObserverProvider";

function Home(props) {
  const switcher = props.switcher;

  return (
    <div>
      <ObserverProvider>
        <Hero switcher={switcher} />
        {/* <Color /> */}
        <Content switcher={switcher} />
      </ObserverProvider>
    </div>
  );
}

export default Home;
