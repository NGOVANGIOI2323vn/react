import { use } from "react";
import "../App.css";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Seletion from "./Seletion";


function App() {
  const arr = [1, 2, 3, 4, 5, 6];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log("Sum:", sum);
  } let sum1 = 0;
  arr.forEach(arr => {
    sum1 += arr;
    console.log("Sum with forEach:", sum1);
  });
  const tong = arr.map(x => x * 2 + " ,");
  console.log("New array with map:", tong);

  return (
    <div>
      <Nav />
      <Header />
      <Seletion title="For those about to rock..." imageUrl="assets/img/01.jpg" vitri="order-lg-2" />
      <Seletion title="We salute you!" imageUrl="assets/img/02.jpg" />
      <Seletion title="Let there be rock!" imageUrl="assets/img/03.jpg" vitri="order-lg-2" />
      <Footer />
    </div>
  );

}

export default App;