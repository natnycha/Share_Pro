import React, { Component } from 'react'
import {
  Card, CardTitle, CardText, CardBody } from 'reactstrap'
import { Button } from 'react-bootstrap'

class Editinfocard extends Component {
  render() {
    return(
      <div>
          <div >
            <Card style={{ width: '97%',backgroundColor:'#FbFDFF',height:'27rem'}} className="mini-card">
              <CardBody className="card-body">       
                <Button className="edit-button">edit</Button>
                <CardTitle className="card-title">info</CardTitle>
                <CardText><div class="container">
        <div class="panel panel-default">
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="card-text">
              <div class="form-group">
                <label for="name">Promotion's name:</label>
                <input 
                type="text" 
                class="form-control" 
                name="name" 
                value={name} 
                onChange={this.onChange} 
                placeholder="Name" 
                style={ {fontSize:'25px'}}/>
              </div>
              <div class="form-group">
                <label for="price">Price:</label>
                <input 
                type="text" 
                class="form-control" 
                name="price" value={price} 
                onChange={this.onChange} 
                placeholder="Price" 
                style={ {fontSize:'25px'}} />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <textArea class="form-control" 
                name="description" 
                onChange={this.onChange} 
                placeholder="Description" 
                cols="80" 
                rows="5" 
                style={ {fontSize:'25px'}}>{description}</textArea>
              </div>
              <button 
              type="submit" 
              style={{float: 'right',fontSize:'20px'}} 
              class="btn btn-success" onClick={this.handleClose}>
                +Add Promotion
              </button>
            
            </div>
            </form>
          </div>
        </div>
      </div></CardText>
              </CardBody>
            </Card>
            </div>
        </div>
    )
  }
}

export default Editinfocard;