import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';


export const AddMaterials = () => {
    return (
        <div className="container">
            <div className='d-flex'>
                <h2>Create New Materials</h2>
            </div>
            <Card className='shadow card'>
                <Form className='mt-4'>
                    <div className="row">

                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" value="" onChange="" name="driverName" />
                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="text" value="" onChange="" name="driverName" />
                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control type="text" value="" onChange="" name="driverName" />
                        </Form.Group>

                    </div>

                    <button type="submit" onClick="" class="btn-style">Submit</button>
                </Form>
            </Card>
        </div>
    )
}
