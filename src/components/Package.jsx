import React from 'react'
import { Card } from "antd";
import NotImage from "../assets/noImage.svg";

import '../components/Package.css';

function Package({data}) {
  return (
    <Card hoverable>
        <div className='container'>
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