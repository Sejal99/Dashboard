import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../config";
import { useParams } from "react-router-dom";
import { Card, TextField,Button } from "@mui/material";
const Course = () => {
    const[course,setCourse]=useState({});
    const [title, setTitle]=useState(course.title);
    
    const [description, setDescription]=useState(course.description);
    const [price, setPrice]=useState(course.price);
    const [image, setImage]=useState(course.imageLink);

    const {courseId}=useParams()
    console.log(courseId);
    
     useEffect(() => {

    const func = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/admin/course/${courseId}`, {

          headers: {
            Authorization: "bearer " + localStorage.getItem("token"),
          },
        });
        setCourse(res.data.course);

      } catch (error) {
        console.log(error);
      }
    };
    func();
  }, []);

  if(!course.title){
    return <div>loading</div>
}

  return <div
   style={{display: "flex", 
    justifyContent: "center", 
    minHeight: "80vh",  
    flexDirection: "column"}}>

        <div
         style={{display: "flex", 
         justifyContent: "center"}}>

            <Card 
            variant={"outlined"} 
            style={{width: 400, padding: 20, marginTop: 30, height: "100%"}}>


                <TextField
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }}
                   value={title}
                    fullWidth={true}
                    label="Title"
                    variant="outlined"
                />

                <TextField
                      onChange={(e)=>{
                        setDescription(e.target.value);
                    }}
                        value={description}
                    fullWidth={true}
                    label="Description"
                    variant="outlined"
                />

                <TextField
                      onChange={(e)=>{
                        setImage(e.target.value);
                    }}
                    value={image}
                    fullWidth={true}
                    label="Image link"
                    variant="outlined"
                />

                <TextField
                 
                 onChange={(e)=>{
                    setPrice(e.target.value);
                }}
                value={price}
                    fullWidth={true}
                    label="Price"
                    variant="outlined"
                />

                <Button
                    size={"large"}
                    variant="contained"
                    onClick={async () => {
                        await axios.put(`${BASE_URL}/admin/courses/`+ courseId , {
                            title: title,
                                description: description,
                                imageLink: image,
                                published: true,
                                price
                        }, {
                            headers: {
                                "Authorization": "Bearer " + localStorage.getItem("token")
                            }
                        });
                        alert("updated course!");
                    }}
                > Update course</Button>
            </Card>
        </div>

  </div>
};

export default Course;
