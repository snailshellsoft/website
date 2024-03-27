'use client'
import React, {useState} from 'react';
import {Modal} from 'antd';
import Image from 'next/image';
import ServiceQrcode from '../../../public/service_qrcode.png'

interface Props {
    children: React.ReactNode
}

export default function ContactModal(props: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <span onClick={showModal}>
               {props.children}
            </span>
            <Modal title='' width={300} footer={null} className={'text-center'} open={isModalOpen} onOk={handleOk}
                   onCancel={handleCancel}>
                <Image src={ServiceQrcode} className={'m-auto'} alt={'service'} priority
                       width={300}/>
            </Modal>
        </>
    );
};

