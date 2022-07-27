import React from 'react';
import {Modal, Input} from 'antd';
import {useState} from 'react';

function SendTransfer({visible, handleCancel}) {
    const [recEmail, setRecEmail] = useState("");
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState(0);

    const handleEmailChange = (event) => { 
        setRecEmail(event.target.value)
    }

    const handleDesciptionChange = (event) => {
        setDescription(event.target.value)
    }

    const handleAmountChange = (event) => {
        setAmount(event.target.value)
    }

    const setDefaultValues = () => {
        setAmount(0)
        setDescription("")
        setRecEmail("")
    }

    const okClickHandle = () => {
        // if (validateInputs() === true) {
        //     addExpenseAPICall();

        //     handleOk();
        //     setDefaultValues();
        //     handlePreCancel()
        // }

        
    }

    const handlePreCancel = () => {
        setDefaultValues()
        handleCancel()
    }

    

    return (
       <>
       <Modal title="You Owe" visible={visible}  onOk={okClickHandle} onCancel={handlePreCancel}>
       <label> Amount  </label> <br/>
          <Input  placeholder="Email" onChange={handleEmailChange} value={recEmail} maxLength={20} type="string" /> <br />
              
          <br/>
          <label> Description </label> <br/>
          <Input onChange={handleDesciptionChange} placeholder={"Describe your expense"} maxLength={20} value={description} type="string"/> <br />

          <br/>
          <label> Amount </label> <br/>
          <Input onChange={handleAmountChange} placeholder={"How much you owe?"} maxLength={4} value={amount} type="integer"/> <br />
       </Modal>
       </>
       )
}

export default SendTransfer;