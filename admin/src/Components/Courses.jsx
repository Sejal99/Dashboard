import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../config";
const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fun = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/admin/courses`, {
          headers: {
            Authorization: "bearer " + localStorage.getItem("token"),
          },
        });

        setCourses(res.data.courses);
      } catch (err) {
        console.log(err);
      }
    };
    fun();

  }, []);

  console.log(courses);

  return(
    <div>
        {courses.map((course)=>(
            <div>
                <div>
                   { course.title}
                    
                </div>
                <div>
                    {course.description}
                </div>

                <img src= {course.imageLink}/>
                   
                


                <div>
                    {course.price}
                </div>

            </div>
        )

        )}
    </div>
  )

  
};

export default Courses;
