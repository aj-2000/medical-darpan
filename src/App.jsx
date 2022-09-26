import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import BreadCrumbs from "./components/BreadCrumbs";
import AppliedFilters from "./components/AppliedFilters";
import SideMenu from "./components/SideMenu";
import ProductsSection from "./components/ProductsSection";
function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <BreadCrumbs />
      <SearchBar />
      <AppliedFilters />
      <div className="flex mt-4 mx-4 gap-x-4 justify-evenly">
        <div className="">
          <SideMenu />
        </div>
        <div className="">
          <ProductsSection />
        </div>
      </div>
    </div>
  );
}

export default App;
