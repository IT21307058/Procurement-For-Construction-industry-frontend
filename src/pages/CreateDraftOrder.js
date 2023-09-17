import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';


export const CreateDraftOrder = () => {
  return (
    <div className="container">
            <div className='d-flex'>
                <h2>Create Draft Order</h2>
            </div>
            <Card className='shadow card'>
                <Form className='mt-4'>
                    <div className="row">

                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label>Placed Date</Form.Label>
                            <Form.Control type="date" value="" onChange="" name="driverName" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Require Date</Form.Label>
                            <Form.Control type="date" value="" onChange="" name="noOfMiles" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label><b>Supplier</b></Form.Label>
                            <select value="" onChange="" name="supplier" className="form-select">
                                <option>Select Supplier</option>
                                
                            </select>
                        </Form.Group>

                        
                    </div>

                    <button type="submit" onClick="" class="btn-style">Add</button>
                </Form>
            </Card>
        </div>
  )
}
