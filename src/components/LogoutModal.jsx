import { Button, Modal } from 'antd';
import styled from 'styled-components';

const LogoutModal = ({ isModalOpen, handleCancel, handleLogout }) => {
    const ModalStyled = styled(Modal)`
        &.ant-modal {
            background: #fff;
          
            border-radius: 12px;
            padding-bottom: 0px;
            box-shadow: 0px 8px 8px -4px rgb(16 24 40 / 3%) !important;
            .ant-modal-content {
                box-shadow: none !important;
                max-width: 400px !important;
            }
        }
    `;
    return (
        <ModalStyled
            centered
            width={400}
            // style={{ top: 100, left: 200 }}
            title={
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col gap-4 items-center'>
                        
                        <div className='flex flex-col items-center gap-1'>
                            <span>
                                <span className='leading-[28px] text-[#101828]'>
                                    Confirm Logout
                                </span>{' '}
                            </span>
                            <span>
                                <span className='text-[#475467] leading-[20px]'>
                                    Are you sure you want to logout ? 
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            }
            open={isModalOpen}
            onOk={handleCancel}
            onCancel={handleCancel}
            closable={false}
            footer={
                <div className='flex flex-row gap-[12px] mt-[32px] w-full'>
                    <Button size='large' key='back' onClick={handleCancel} style={{ width: '80%' }}>
                        <span>
                            <span className='text-[#344054] leading-[24px]'>Cancel</span>
                        </span>
                    </Button>
                    <Button
                        key='submit'
                        size='large'
                        onClick={handleLogout}
                        style={{
                            background: '#F04438',
                            border: '1px solid #F04438',
                            width: '80%',
                        }}
                    >
                        <span style={{ color: '#FFF' }}>Log Out</span>
                    </Button>
                </div>
            }
        ></ModalStyled>
    );
};
export default LogoutModal;