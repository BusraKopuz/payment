import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/packageSlice';
import Package from './Package';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import '../components/PackageList.css';

function PackageList() {

    const dispatch = useDispatch();
    const {packages} = useSelector((store) => store.package);
    const totalPrice = useSelector((state) => state.package.totalPrice);
    console.log(packages)

    useEffect(()=>{
        dispatch(getAllProducts())
    }, [])
  return (
    <div> 
        <div className='package-list-container'>
            {
                packages && packages.map((item)=>(
                  <Package key={item.id} data={item} />
                ))
            }
        </div>
        <hr/>
        <div className='container-footer'>
          <div>
            Seçilen Paket Tutarı: <span className='container-footer-price'>{totalPrice}₺</span>
          </div>
          <Link to={"/payment"}>
            <Button size='large' type='primary'>Devam Et</Button>
          </Link>
        </div>
    </div>
  )
}

export default PackageList