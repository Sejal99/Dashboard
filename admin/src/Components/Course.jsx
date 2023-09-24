import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../config";
import { useParams } from "react-router-dom";
import { Card, TextField,Button } from "@mui/material";
const Course = () => {
    
    const [title, setTitle]=useState("");
    
    const [description, setDescription]=useState("");
    const [price, setPrice]=useState(0);
    const [image, setImage]=useState("");

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
        
        setTitle(res.data.course.title);
        setDescription(res.data.course.description);
        setImage(res.data.course.image);
        setPrice(res.data.course.price);
      } catch (error) {
        console.log(error);
      }
    };
    func();
  }, []);

 

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
                  value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }}
                 
                    fullWidth={true}
                    label="Title"
                    variant="outlined"
                />

                <TextField
                 value={description}
                      onChange={(e)=>{
                        setDescription(e.target.value);
                    }}
                       
                    fullWidth={true}
                    label="Description"
                    variant="outlined"
                />

                <TextField
                    value={image}
                      onChange={(e)=>{
                        setImage(e.target.value);
                    }}
                
                    fullWidth={true}
                    label="Image link"
                    variant="outlined"
                />

                <TextField
                   value={price}
                 onChange={(e)=>{
                    setPrice(e.target.value);
                }}
              
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
