import React, { useState, useEffect } from 'react'
import { Card } from "antd";
import NotImage from "../assets/noImage.svg";


import '../components/Package.css';
import { useDispatch, useSelector } from 'react-redux';
import { togglePackage } from '../redux/slices/packageSlice';

function Package({data}) {
    const dispatch = useDispatch();
    const [selectedStyle, setSelectedStyle] = useState(false);

    const selectedItem = (selectedId, selectedAmount) => {
        setSelectedStyle(!selectedStyle);
        dispatch(togglePackage({selectedId, selectedAmount}));
       
    };
    const {selectedPackage} = useSelector((store) => store.package)

    useEffect(() => {
        let findPackage = selectedPackage.find(e => e === data.id)
        setSelectedStyle(findPackage)
    }, [])
  return (
    <Card hoverable onClick={() => selectedItem(data.id, data.amount)}>
        <div className={`container ${selectedStyle ? "selected" : ""}`}>
            <div className='container-image'>
                { data.image ? 
                        <img src={data.imagePath} alt="resim" /> 
                        :
                        <img src={NotImage} alt="Logo" />
                }
            </div>
            <div className='container-context'>
                <div className='contaier-context-title'>
                    <div className="container-context-title-name">{ data.name }</div>
                    <div className="container-context-title-price">{ data.amount } { data.currency }</div>
                </div>
                <div className="container-context-detail">
                    { data.details.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
                <hr />
                <div className="container-context-ticket">
                    {data.tags.map((item, index) => (
                        <p key={index} className="container-context-ticket-badge">{item}</p>
                    ))}
                </div>
            </div>
        </div>
    </Card>
  )
}

export default Package