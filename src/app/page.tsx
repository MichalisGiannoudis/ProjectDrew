import Header from "../components/header.component";
import Footer from "../components/footer.component";
import MainBody from "../components/mainBody.component";

export default function Home() {
  
  return (

    <div className="flex flex-col items-center justify-center bg-black text-gray-800">
      <div className="w-full mb-auto mt-auto">
        <Header />
      </div>
      <div className="w-full">
        <MainBody />
      </div>
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}
