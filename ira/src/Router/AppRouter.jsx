import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import DefaultLayout from './DefaultLayout';
// auth 
import Login from '../Pages/auth/Login';
// dashboard 
import Dashboard from '../Pages/admin/Dashboard';
import ExtendWarrenty from '../Pages/admin/ExtendWarrenty';
import ContactSupport from '../Pages/admin/ContactSupport';
import RegisteredUser from '../Pages/admin/RegisteredUser';
// imei 
import ImeiMgt from '../Pages/admin/ImeiMgt';
import AddImei from '../Pages/admin/AddImei';
// service center 
import ServiceCenter from '../Pages/admin/ServiceCenter';
// faq 
import Faq from '../Pages/admin/Faq';
// spare part mgt
import SpareParts from '../Pages/admin/SpareParts';
import AddSpareParts from '../Pages/admin/AddSpareParts';
import EditSparePart from '../Pages/admin/EditSparePart';
// products mgt
import ProductMgt from '../Pages/admin/ProductMgt';
import AddProduct from '../Pages/admin/AddProduct';
import EditProduct from '../Pages/admin/EditProduct';
import CategoryMgt from '../Pages/admin/CategoryMgt';
import SpecificationMgt from '../Pages/admin/SpecificationMgt';

//errorpage
import ErrorPage from '../Pages/Extra/ErrorPage'

const AppRouter = () => {
    const location = useLocation();
    const isLoginRoute = location.pathname === '/login' || location.pathname === '/';

    return (
        <Routes>
            {isLoginRoute ? (
                <>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </>
            ) : (
                <>
                    <Route element={<DefaultLayout />}>
                        {/* dashboard */}
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/dashboard/extendwarrenty" element={<ExtendWarrenty />} />
                        <Route path="/dashboard/contactsupport" element={<ContactSupport />} />
                        <Route path="/dashboard/registereduser" element={<RegisteredUser />} />
                        {/* imei */}
                        <Route path="/imeimgt" element={<ImeiMgt />} />
                        <Route path="/imeimgt/addimei" element={<AddImei />} />
                        {/* products */}
                        <Route path="/product/productmgt" element={<ProductMgt />} />
                        <Route path="/product/productmgt/addproduct" element={<AddProduct />} />
                        <Route path="/product/productmgt/editproduct" element={<EditProduct />} />
                        <Route path="/product/categoriesmgt" element={<CategoryMgt />} />
                        <Route path="/product/specificationmgt" element={<SpecificationMgt />} />
                        {/* service center */}
                        <Route path="/servicecenter" element={<ServiceCenter />} />
                        {/* faq */}
                        <Route path="/faq" element={<Faq />} />
                        {/* spareparts */}
                        <Route path="/spareparts" element={<SpareParts />} />
                        <Route path="/spareparts/addspareparts" element={<AddSpareParts />} />
                        <Route path="/spareparts/editspareparts" element={<EditSparePart />} />
                    </Route>
                    <Route path="*" element={<ErrorPage />} />
                </>
            )}
        </Routes>
    );
}

export default AppRouter;
