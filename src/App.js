
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { CreateDraftOrder } from './pages/CreateDraftOrder';
import Footer from './components/Footer';
import Header from "./components/Header";
import { AddProduct } from './pages/AddProduct';
import { ApproveOrder } from './pages/ApproveOrder';
import { OrderDetails } from './pages/OrderDetails';
import { DraftOrderList } from './pages/DraftOrderList';
import { OrderList } from './pages/OrderList';
import { SupplierProductList } from './pages/SupplierProductList';
import { SupplierSideProductList } from './pages/SupplierSideProductList';
import Layout from './components/Layout';
import { SupplierOrderList } from './pages/SupplierOrderList';
import { AddMaterials } from './pages/AddMaterials';
import { UpdateMaterials } from './pages/UpdateMaterials';
import { PlacedRejectOrder } from './pages/PlacedRejectOrder';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Layout>
          <Routes>
            <Route path='/' exact element={<CreateDraftOrder />} />
            <Route path='/addproduct' exact element={<AddProduct />} />
            <Route path='/approveorder' exact element={<ApproveOrder />} />
            <Route path='/orderdetails' exact element={<OrderDetails />} />
            <Route path='/draftorderlist' exact element={<DraftOrderList />} />
            <Route path='/orderlist' exact element={<OrderList />} />
            <Route path='/supplierproductlist' exact element={<SupplierProductList />} />


            <Route path='/suppliersideproductlist' exact element={<SupplierSideProductList />} />
            <Route path='/supplierorderlist' exact element={<SupplierOrderList />} />
            <Route path='/addmaterial' exact element={<AddMaterials />} />
            <Route path='/updatematerial' exact element={<UpdateMaterials />} />
            <Route path='/placedrejectorder' exact element={<PlacedRejectOrder />} />

          </Routes>
        </Layout>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
