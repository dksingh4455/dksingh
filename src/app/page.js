import Navbar from "@/components/navbar";
import Pagination from "@/components/pagination "
import Card from "@/components/card";
import Cardimg from "@/components/cardimg";
import Counter from "@/components/counter";
import Services from "@/components/services";
import Choose from "@/components/choose";
import Cardsnew from "@/components/cardsnew";
import CLient from "@/components/client";
import Review from "@/components/review";
import Servicecard from "@/components/servicecard";
import Content from "@/components/content"; // Keep the import

export default function Home() {
  return (
    <>
      <div className=" ">
        <Pagination totalPages={10} />
      </div>
      <Navbar />
      <Card />
      <Cardimg />
      <Counter />
      <div className="py-[30px]">
        <Services />
      </div>
      <div className="py-[20px]">
        <Servicecard />
      </div>
      <Choose />
      <Cardsnew />
      <CLient />
      <Review />
      <Content /> {/* Use the Content component here */}
    </>
  );
}
