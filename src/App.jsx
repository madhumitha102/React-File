import react, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hellow from "./component/FunComponent/Hellow";
import CounterFun from "./component/FunComponent/CounterFun";
import RenderList from "./component/FunComponent/RenderList";
import ApiCallBtn from "./component/FunComponent/ApiCallBtn";
import Effect from "./component/FunComponent/Effect";
import LifeCycleFun from "./component/FunComponent/LifeCycleFun";
import InputComp from "./component/FunComponent/InputComp";
import WishList from "./component/FunComponent/WishList";
import UseHooks from "./component/FunComponent/UseHooks";
import ExtraHooks from "./component/FunComponent/ExtraHooks";
import MultiMovieList from "./component/MultiMovieList";
import LifeCycle from "./component/LifeCycle";
import AddCart from "./component/AddCart";
import MovieList from "./component/MovieList";
import Home from "./component/website/Home";
import Product from "./component/website/Product";
import Contactus from "./component/website/Contactus";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import GroceryList from "./component/GroceryList";
import Reducer from "./component/Reducer";
import ProductComp from "./component/ProductComp";


function App() {

  // const[islog,setlog] = useState(false)

  // const handlelogout=() =>{
  //   setlog(true)

  return (
    <>
{/* <GroceryList/> */}



      {/* <Link to="/">HOME</Link>
      <Link to="/product">PRODUCT</Link>
      <Link to="/contact">CONTACT US</Link>

      <Routes>



        <Route path="/" element={<Home />} />
        
        <Route path="/product" element={<Product />} />

        <Route path="/contact" element={<Contactus />} />


      </Routes> */}



        <ProductComp/>





      {/* <CounterFun/> */}
      {/* <LifeCycle/> */}

      {/* <RenderList/>  */}

      {/* <Hellow/> */}

      {/* <ApiCallBtn/> */}

      {/* {islog ? null : <LifeCycleFun/>} */}

      {/* <UseHooks/> */}

      {/* <ExtraHooks/> */}

      {/* <InputComp/> */}


      {/* <WishList/> */}


      {/* <LifeCycleFun name={"madhumitha"} age={24}/> */}


      {/* <Effect/> */}
      <br />

      {/* <button onClick={handlelogout}>logout</button> */}


      {/* <button onClick={handleshow}>submit</button> */}


{/* <Reducer/> */}



      {/* <AddCart/> */}

      {/* <MovieList moviename={"nanban"} actor={"vijay"} />
            <MovieList moviename={"rayyan"} actor={"danush"} />
            <MovieList moviename={"singam-2"} actor={"suriya"} /> */}

      {/* <MultiMovieList/> */}
    </>
  )
}








export default App