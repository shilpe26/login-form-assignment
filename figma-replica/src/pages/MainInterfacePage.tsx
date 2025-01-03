import { Routes, Route } from 'react-router-dom';
import Vendor from '../components/Vendor';
import Comments from '../components/Comments';
import Invoice from '../components/Invoice';
import Header from '../components/Header';
import UploadInvoice from '../components/UploadInvoice';

const MainInterfacePage = () => {
    return (
        <div className="py-4">
                <Header />
                <div className='grid grid-cols-2 p-4'>
                    <UploadInvoice />
                    <div className=''>
                        <Routes>
                            <Route index element={<Vendor />} />
                            <Route path="vendor" element={<Vendor />} />
                            <Route path="comment" element={<Comments />} />
                            <Route path="invoice" element={<Invoice />} />
                        </Routes>
                    </div>

            </div>
        </div>
    );
};

export default MainInterfacePage;
