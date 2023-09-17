
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
import { OrderListViewStaff } from './pages/OrderListViewStaff';
import { ApproveOrderStaff } from './pages/ApproveOrderStaff';
import { SiteListStaff } from './pages/SiteListStaff';
import { AddSite } from './pages/AddSite';
import { ReceiptList } from './pages/ReceiptList';
import { AddReceipt } from './pages/AddReceipt';
import { InvoiceList } from './pages/InvoiceList';
import { AddInvoice } from './pages/AddInvoice';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Layout>
          <Routes>
            {/* Site Manager UI */}
            <Route path='/' exact element={<CreateDraftOrder />} />
            <Route path='/addproduct' exact element={<AddProduct />} />
            <Route path='/approveorder' exact element={<ApproveOrder />} />
            <Route path='/orderdetails' exact element={<OrderDetails />} />
            <Route path='/draftorderlist' exact element={<DraftOrderList />} />
            <Route path='/orderlist' exact element={<OrderList />} />
            <Route path='/supplierproductlist' exact element={<SupplierProductList />} />

             {/* Supplier UI */}
            <Route path='/suppliersideproductlist' exact element={<SupplierSideProductList />} />
            <Route path='/supplierorderlist' exact element={<SupplierOrderList />} />
            <Route path='/addmaterial' exact element={<AddMaterials />} />
            <Route path='/updatematerial' exact element={<UpdateMaterials />} />
            <Route path='/placedrejectorder' exact element={<PlacedRejectOrder />} />

            {/* Staff UI */}
            <Route path='/orderlistviewstaff' exact element={<OrderListViewStaff />} />
            <Route path='/approveorderstaff' exact element={<ApproveOrderStaff />} />
            <Route path='/siteliststaff' exact element={<SiteListStaff />} />
            <Route path='/addsite' exact element={<AddSite />} />
            <Route path='/updatestaff' exact element={<ApproveOrderStaff />} />
            <Route path='/reciptlist' exact element={<ReceiptList />} />
            <Route path='/addrecipt' exact element={<AddReceipt />} />
            <Route path='/invoicelist' exact element={<InvoiceList />} />
            <Route path='/addinvoice' exact element={<AddInvoice />} />

          </Routes>
        </Layout>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
