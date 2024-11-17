import React from 'react'
import {Button, Card, Form, Input, Tooltip } from 'antd';
import InputMask from 'react-input-mask';
import { useSelector } from 'react-redux';
 

import '../components/PaymentPage.css';


function PaymentPage() {

    const selectedPackages = useSelector((state) => state.package.selectedPackage);
    
  return (
    <Form
        name='payment'  
    >
        <div className='payment-container'>
            <div className='payment-container-card'>
                <h2>Kart Bilgileri</h2>
                <div className='payment-container-card-info'>
                    <Card>
                        <div className='payment-container-card-info-user'>
                            <div>
                                <label>Kart Üzerindeki İsim Soyisim</label>
                                <Form.Item
                                    name="cardHolderName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Lütfen kart sahibinin adını girin!'
                                        }]}
                                >
                                    <Input size="large" />
                                </Form.Item>
                            </div>
                        </div>
                        <div className='payment-container-card-info-detail'>
                            <div>
                                <label>Kart Numarası</label>
                                <Form.Item
                                    name="cardNumber"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Lütfen kart numaranızı girin!'
                                        },

                                    ]}
                                >
                                    <InputMask className='ınput' 
                                        mask="9999 9999 9999 9999" 
                                        placeholder='9999 9999 9999 9999' 
                                        type='text' 
                                        size='large'
                                    />                              
                                </Form.Item>
                            </div>
                            <div>
                                <label>Son Kullanma Tarihi</label>
                                <Form.Item
                                    name="expireDate"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Lütfen son kullanma tarihinizi girin!'
                                        }
                                    ]}
                                >
                                    <InputMask className='ınput'
                                        mask="99/99" 
                                        placeholder='12/31' 
                                        type='text' 
                                        size='large' 
                                    />
                                </Form.Item>
                            </div>
                            <div>
                                <label>CVV/CVC</label>
                                <Form.Item
                                    name="cvv"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Lütfen cvv girin!'
                                        },
                                    ]}
                                >
                                    <InputMask className='ınput' 
                                        placeholder='123' 
                                        type='password' 
                                        size='large'
                                    />
                                </Form.Item>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='payment-container-card-agreement'>
                    <h2>Sözleşme</h2>
                    <Card>
                        <div className='payment-container-card-agreement-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu ultricies, hendrerit turpis ac, semper justo. Nam orci odio, semper id mauris nec, ornare luctus elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eu justo sapien. Nullam turpis magna, laoreet at finibus sit amet, ultrices et dolor. Suspendisse vestibulum gravida quam, nec interdum justo pulvinar nec. Aenean quam mauris, fermentum eu iaculis non, egestas a lorem. Sed ante justo, pulvinar dapibus enim id, euismod feugiat arcu. Mauris dictum sed tortor ut placerat. Sed leo ante, laoreet at egestas ut, dapibus et turpis. Duis non enim sed ante aliquet maximus eu et dui. Sed consequat iaculis libero, id pharetra purus blandit vitae. Etiam ut lobortis tortor, sed efficitur tortor. Duis facilisis quam sem, quis pulvinar erat aliquet sit amet. Aliquam velit orci, pellentesque eget varius finibus, sodales quis dolor.</div>
                    </Card>
                </div>
            </div>
            <div className='payment-container-basket'>
                <div className='payment-container-basket-title'>Sepetteki Paketler</div>
                <div className='payment-container-basket-list'>
                    {
                        selectedPackages.length > 0 ? (
                            
                            selectedPackages.map((item) => (
                                <div key={item.id} className='payment-container-basket-list-detail'>
                                    <span>{item.name}</span>
                                    <span>{item.amount} {item.currency}</span>
                                </div>
                            ))
                        ) : (
                            <div>Sepetiniz boş</div>
                        )
                    }
                </div>
                <Tooltip
                  placement="top"
                >
                    <Button
                     size='large'
                     type="primary"
                     htmlType='submit'
                     block style={{ marginTop: '10px' }}
                    >
                        Ödeme Yap
                    </Button>
                    
                </Tooltip>
            </div>
        </div>
    </Form>
  )
}

export default PaymentPage