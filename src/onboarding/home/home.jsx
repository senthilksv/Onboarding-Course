import React, { Component } from "react";
import "./home.scss";
import "animate.css";
import CourseService from "../../services/CourseService";
import logo from "../../assets/RL-logo-130x86.png";
import handLogo from "../../assets/Picture2.png";
import doodleStart from "../../assets/doodle_start.png";
import "react-sweet-progress/lib/style.css";
import {
    CircularProgressbarWithChildren,buildStyles
  } from "react-circular-progressbar";

import rocket from '../../assets/progress.svg';

import "react-circular-progressbar/dist/styles.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      courses: [],
    };
    this.courseService = new CourseService();
  }

  onCategorySelection(categoryType) {
    this.props.history.push({
      pathname: "/couserList",
      courserCategory: categoryType,
    });
  }

  componentDidMount() {
    this.courseService.getUserCourses("1").then((result) => {
      this.setState({
        isLoaded: true,
        courses: result,
      });
      console.log(this.setState);
    });
  }
  render() {
    var { isLoaded, courses } = this.state;
    console.log(courses);
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
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
        <div className="container-fluid">
          <div className="row">
            <div className="info-container">
              <div className="row mt-5">
                <div className="category ">
                  <div className=""></div>
                </div>
              </div>
              <div className="row ml-4 my-1">
                <div className="category-info-sm bg-thistle rounded"></div>
                <div className="category-info ml-1 bg-thistle rounded"></div>
                <div className="category-info ml-1 bg-thistle rounded"></div>
              </div>
              <div className="row">
                <div className="category ">
                  <div className="ml-2">
                    <img src={doodleStart} alt="" height="200px" />
                  </div>
                </div>
              </div>
            </div>
            <div className="category-container pr-0">
              <div className="row mt-5">
                <div className="category">
                  <div>
                    <img src={handLogo} alt="" height="50px" width="50px" />
                  </div>
                </div>
                <div
                  className="category ml-1 bg-pebble rounded"
                  onClick={this.onCategorySelection.bind(
                    this,
                    "Cognizant Mandatory"
                  )}
                >
                  <div className="text-center">
                    <span>Cognizant Mandatory</span>
                  </div>
                </div>
                <div
                  className="category ml-1 bg-violet rounded"
                  onClick={this.onCategorySelection.bind(this, "Functional")}
                >
                  <div className=" text-center">
                    <span>Functional</span>
                  </div>
                </div>
                <div className="category ml-1 bg-tangerine rounded">
                  <div className=" text-center">
                    <span>Project Specific</span>
                  </div>
                </div>
                <div className="category ml-1 bg-white rounded">
                  <div className=" text-center text-muted">
                    <span>RLG mandatory</span>
                  </div>
                </div>
                <div className="category-info ml-1 bg-pebble rounded-top-right"></div>
              </div>
              <div className="row my-1">
                <div className="category bg-tangerine rounded">
                  <div className=" text-center">
                    <span>Category</span>
                  </div>
                </div>
                <div className="category-details ml-3">
                </div>
                <div className="category ml-1 bg-violet rounded">
                  <div className=" text-center">
                    <span>Category</span>
                  </div>
                </div>
              </div>
              <div className="row mb-1">
                <div className="category bg-violet rounded">
                  <div className=" text-center">
                    <span>Category</span>
                  </div>
                </div>
                <div className="category-details ml-3"></div>
                <div className="category ml-1 bg-tangerine rounded">
                  <div className="text-center">
                    <span>Category</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="category-info bg-pebble rounded-bottom-left"></div>
                <div className="category bg-white ml-1 rounded">
                  <div className="text-center text-muted">
                    <span>Category</span>
                  </div>
                </div>
                <div className="category bg-pebble ml-1 rounded">
                  <div className="text-center">
                    <span>Category</span>
                  </div>
                </div>
                <div className="category bg-tangerine ml-1 rounded">
                  <div className="text-center">
                    <span>Category</span>
                  </div>
                </div>
                <div className="category bg-violet ml-1 rounded">
                  <div className="text-center">
                    <span>Category</span>
                  </div>
                </div>
                <div className="category-info ml-1 bg-pebble rounded-bottom-right"></div>
              </div>
            </div>
            <div className="info-container">
              <div className="row mt-5">
                <div className="category"></div>
              </div>
              <div className="row mt-1">
                <div className="category "></div>
              </div>
              <div className="row ml-1 my-1">
                <div className="category-info ml-1 bg-thistle rounded"></div>
                <div className="category-info ml-1 bg-thistle rounded"></div>
                <div className="category-info-sm ml-1 bg-thistle rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
