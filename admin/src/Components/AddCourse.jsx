import { Card, TextField,Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from '../../config';

const AddCourse = () => {
    const [title, setTitle]=useState("");
    const [description, setDescription]=useState("");
    const [price, setPrice]=useState(0);
    const [image, setImage]=useState("");
   

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
                    onClick={(e)=>{
                        setTitle(e.target.value);
                    }}
                   
                    fullWidth={true}
                    label="Title"
                    variant="outlined"
                />

                <TextField
                      onClick={(e)=>{
                        setDescription(e.target.value);
                    }}

                    fullWidth={true}
                    label="Description"
                    variant="outlined"
                />

                <TextField
                      onClick={(e)=>{
                        setImage(e.target.value);
                    }}
                    
                    fullWidth={true}
                    label="Image link"
                    variant="outlined"
                />

                <TextField
                 
                 onClick={(e)=>{
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
                        await axios.post(`${BASE_URL}/admin/courses`, {
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
                        alert("Added course!");
                    }}
                > Add course</Button>
            </Card>
        </div>
    </div>
}

export default AddCourse;