import React, { useState } from "react";
import { Link } from "react-router-dom";
import courses from "../Database/courses.json";
// import * as db from "../Database";

export const db = {
  courses: [ { "_id": "RS101", "name": "Rocket Propulsion", "number": "RS4550", "startDate": "2023-01-10",
  "endDate": "2023-05-15", "image": "/images/reactjs.png"  },
{ "_id": "RS102", "name": "Aerodynamics", "number": "RS4560", "startDate": "2023-01-10",
  "endDate": "2023-05-15", "image": "aerodynamics.png"  },
{ "_id": "RS103", "name": "Spacecraft Design", "number": "RS4570", "startDate": "2023-01-10",
  "endDate": "2023-05-15", "image": "spaceship-design.png"  } ]
};

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}) {

  
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h5>Course</h5>
      <input value={course.name} className="form-control" 
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) } />

      <input value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value }) } />

      <input value={course.startDate} className="form-control" type="date" 
                   onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>

      <input value={course.endDate} className="form-control" type="date" 
                   onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

      <button onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse} >
        Update
      </button>


      <h2>Published Courses (12)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
            <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}> <button onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}>
                    Edit
                  </button>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}>
                    Delete
                  </button>
                  {course.name}
                </Link>
      

                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;