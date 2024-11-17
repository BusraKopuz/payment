import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PaymentPage from './PaymentPage';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function Payment() {
    const navigate = useNavigate();
    const { packages, selectedPackage }  = useSelector((store) => store.package);
    const [paymentItems, setPaymentItems] = useState([])

    useEffect(() => {
        if (selectedPackage.length === 0) {
            toast.error("Lütfen bir kart seç!");
            navigate('/package-list');
        } else {
            const filteredItems = packages.filter(item => selectedPackage.includes(item.id));
            setPaymentItems(filteredItems);
        }
    }, []);


  return (
    <div>
        <PaymentPage payment={paymentItems} />
    </div>
  )
}

export default Payment