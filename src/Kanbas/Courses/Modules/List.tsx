import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
}

function ModuleList() {
  const { courseId } = useParams();
  
  const [moduleList, setModuleList] = useState<Module[]>(modules);
  const [module, setModule] = useState<Module>({
    _id: "",
    name: "New Module",
    description: "New Description",
    course: courseId || "",
  });

  const addModule = (newModule: Module) => {
    const updatedModuleList = [newModule, ...moduleList];
    setModuleList(updatedModuleList);
  };

  const deleteModule = (moduleId: string) => {
    const updatedModuleList = moduleList.filter((module) => module._id !== moduleId);
    setModuleList(updatedModuleList);
  };

  const updateModule = () => {
    const updatedModuleList = moduleList.map((m) => {
      if (m._id === module._id) {
        return { ...module };
      } else {
        return m;
      }
    });
    setModuleList(updatedModuleList);
  };

  
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      {/* <!-- Add buttons here --> */}
      <ul className="list-group wd-modules">
      <li className="list-group-item">
      <button onClick={() => { addModule(module) }}>
          Add</button>
          <button onClick={updateModule}>
                Update
        </button>

        <input value={module.name}
          onChange={(e) => setModule({
            ...module, name: e.target.value })}
        />
        <textarea value={module.description}
          onChange={(e) => setModule({
            ...module, description: e.target.value })}
        />
      </li>

        {modulesList.filter((module) => module.course === courseId).map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
              
              <button
              onClick={(event) => { setModule(module); }}>
              Edit
            </button>

            <button
              onClick={() => deleteModule(module._id)}>
              Delete
            </button>

            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;