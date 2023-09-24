import axios from "axios";
import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
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

  return <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {courses.map(course => {
            return <Course course={course} />}
        )}
    </div>
}

export function Course({course}) {
    const navigate = useNavigate();

    return <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20
    }}>
        <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
        <br/>
        <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
        <br/>
        <img src={course.imageLink} style={{width: 300}} ></img>
        <Typography textAlign={"center"} variant="h5">{course.price}</Typography>
        <br/>
        <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
            <Button variant="contained" size="large" onClick={() => {
                navigate("/course/" + course._id);
            }}>Edit</Button>
        </div>
    </Card>

}

export default Courses;
