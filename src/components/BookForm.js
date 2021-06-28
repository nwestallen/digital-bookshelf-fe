import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const BookForm = props => {

  const [formValues, setFormValues] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const handleChange = e => {
    setFormValues({...formValues, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form Values', formValues);
    setIsVisible(false);
    setFormValues([]);
  };

  return (
    <Modal visible={isVisible}>
      <h2>Add a Book</h2>
      <Form layout='vertical'>
        <Form.Item label="Title">
          <Input name ='book_title' onChange={handleChange} value={formValues.book_title}/>
        </Form.Item>
        <Form.Item label="Author">
          <Input name='book_author' onChange={handleChange} value={formValues.book_author}/>
        </Form.Item>
        <Form.Item label="ISBN">
          <Input name='isbn' onChange={handleChange} value={formValues.isbn}/>
        </Form.Item>
        <Form.Item label="URL">
          <Input name='book_url' onChange={handleChange} value={formValues.book_url}/>
        </Form.Item>
        <Form.Item>
          <Button type='primary' onClick={handleSubmit}>Submit</Button>
        </Form.Item>
      </Form>
      
    </Modal>
  );
};

export default BookForm;
