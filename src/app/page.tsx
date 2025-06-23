import Header from "../components/header.component";
import Footer from "../components/footer.component";
import MainBody from "../components/mainBody.component";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div>
        <Header />
      </div>
      <div>
        <MainBody />
      </div>
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}
