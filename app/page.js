import Description from "./_component/Description";
import Footer from "./_component/Footer";
import Headers from "./_component/Headers";
import Middle from "./_component/Middle";
import MiddleBase from "./_component/MiddleBase";


export default function Home() {
  return (
    <div className="w-full p-2">
     <Headers/>
     <Description/>
     <Middle/>
     <MiddleBase/>
     <Footer/>
    </div>
  );
}
