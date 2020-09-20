import React, { Component } from "react";
import "./course-list.scss";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import {
    CircularProgressbarWithChildren,buildStyles
  } from "react-circular-progressbar";

import rocket from '../../assets/progress.svg';

import "react-circular-progressbar/dist/styles.css";
import logo from "../../assets/RL-logo-130x86.png";

class CourseList extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleBack() {
      console.log('back');
    this.props.history.push("/");
  }

  handleShow() {
    this.setState({ show: true });
  }
  state = {};

  componentDidMount() {
    const boxes = document.querySelectorAll(".box");
    const tmpNode = boxes[0];
    boxes[0].className = "box move-out-from-left";

    setTimeout(() => {
      if (boxes.length > 5) {
        tmpNode.classList.add("box--hide");
        boxes[5].className = "box move-to-position5-from-left";
      }
      boxes[1].className = "box move-to-position1-from-left";
      boxes[2].className = "box move-to-position2-from-left";
      boxes[3].className = "box move-to-position3-from-left";
      boxes[4].className = "box move-to-position4-from-left";
      boxes[0].remove();

      document.querySelector(".cards__container").appendChild(tmpNode);
    }, 500);
  }

  shiftLeft() {
    const boxes = document.querySelectorAll(".box");
    const tmpNode = boxes[0];
    boxes[0].className = "box move-out-from-left";

    setTimeout(function () {
      if (boxes.length > 5) {
        tmpNode.classList.add("box--hide");
        boxes[5].className = "box move-to-position5-from-left";
      }

      boxes[1].className = "box move-to-position1-from-left";
      boxes[2].className = "box move-to-position2-from-left";
      boxes[3].className = "box move-to-position3-from-left";
      boxes[4].className = "box move-to-position4-from-left";
      boxes[0].remove();

      document.querySelector(".cards__container").appendChild(tmpNode);
    }, 500);
  }

  shiftRight() {
    const boxes = document.querySelectorAll(".box");
    boxes[4].className = "box move-out-from-right";

    setTimeout(function () {
      const noOfCards = boxes.length;
      if (noOfCards > 4) {
        boxes[4].className = "box box--hide";
      }

      const tmpNode = boxes[noOfCards - 1];
      tmpNode.classList.remove("box--hide");
      boxes[noOfCards - 1].remove();
      let parentObj = document.querySelector(".cards__container");
      parentObj.insertBefore(tmpNode, parentObj.firstChild);
      tmpNode.className = "box move-to-position1-from-right";
      boxes[0].className = "box move-to-position2-from-right";
      boxes[1].className = "box move-to-position3-from-right";
      boxes[2].className = "box move-to-position4-from-right";
      boxes[3].className = "box move-to-position5-from-right";
    }, 500);
  }

  render() {
    return (
      <>
             <div class="navbar navbar-light bg-light justify-content-between">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              width="85"
              class="d-inline-block align-top"
              alt=""
            />
          </a>
          <h1>On boarding courses</h1>
          <div className="col-sm-1">
          <CircularProgressbarWithChildren value={30}  styles={buildStyles({
            pathColor: "#6D3583",
          trailColor: "#bfa3cd"
        })}>
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        <img
          style={{ width: 40, marginTop: -5 }}
          src={rocket}
          alt="doge"
        />
        <div style={{ fontSize: 12, marginTop: -5 }}>
          <strong>30%</strong>
        </div>
      </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className="App">
        <div>
        <div onClick={this.handleBack.bind(
                    this
                  )}>
              Back
            </div>
        </div>
            <div className="text-center mb-5"><h2>{this.props.location.courserCategory}</h2></div>
          <div className="container">
            <div className="carousel-container">
              <div className="button" onClick={this.shiftLeft}>
                <img src="https://image.ibb.co/mRsEb7/left_arrow.png" alt="" />
              </div>
              <div className="cards-wrapper">
                <ul className="cards__container">
                  <li className="box">Data Security</li>
                  <li className="box">Consumer</li>
                  <li className="box">Deep Dive into P&amp;C Policy</li>
                  <li className="box" onClick={this.handleShow}>Insurance Next Links</li>
                  <li className="box">Level 1: Annuities</li>
                  <li className="box">New Business Processing</li>
                </ul>
              </div>
              <div className="button" onClick={this.shiftRight}>
                <img src="https://image.ibb.co/dfPSw7/right_arrow.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Insurance Next Links</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="title">
              Description : Insurance Next Links	
              Course Type:  Self - Reading	
              Referennce: <a href="https://flipboard.com/@sundarns/insurancenext-vruejk8az">Course Material</a> 
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Mark as Complete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default CourseList;
