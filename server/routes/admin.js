const mongoose = require("mongoose");
const express = require('express');
const { User, Course, Admin } = require("../db");
const jwt = require('jsonwebtoken');

const { authenticateJwt } = require("../middleware/auth");

const router = express.Router();

router.get('/me',authenticateJwt,async(req,res)=>{
console.log(req.user.username);
res.json(req.user.username);
})

router.post('/signup', async(req, res) => {
  const {username, password} = req.body;
  
  try{
    const admin= new Admin({username, password});
    await admin.save();

    const token = jwt.sign({ username , role: 'admin' }, process.env.SECRET, { expiresIn: '1h' });
      res.json({ message: 'Admin created successfully', token });

  }catch(err){
    res.status(403).json({message:"Invalid request"})
  }
});


  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username, password });
    if (admin) {
      const token = jwt.sign({ username, role: 'admin' }, process.env.SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });
  
  router.post('/courses', authenticateJwt, async (req, res) => {
    const course = new Course(req.body);
    console.log(req.body);
    await course.save();
    res.json({ message: 'Course created successfully', courseId: course.id });
  });
  
  router.put('/courses/:courseId', authenticateJwt, async (req, res) => {
    const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
    if (course) {
      res.json({ message: 'Course updated successfully' });
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  });
  
  router.get('/courses', authenticateJwt, async (req, res) => {
    const courses = await Course.find({});
    console.log(courses);
    res.json({ courses });
  });
  
  router.get('/course/:courseId', authenticateJwt, async (req, res) => {
    try {
      const courseId = req.params.courseId;
    const course = await Course.findById(courseId);
    res.json({ course });
    } catch (error) {
      res.status(404).json({message:'course not found'})
    }
    
  });




router.delete('/course/:courseId',authenticateJwt,async(req,res)=>{
  const {courseId}=req.params;
  try{
    await Course.findByIdAndDelete(courseId);
    res.json({message:'course deleted'})
  }
  catch(err){
    res.status(404).json(err);
  }
})
  module.exports = router