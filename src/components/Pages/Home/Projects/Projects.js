import React, { useState } from 'react';
import { Link } from "react-router-dom";
import CarShop from '../../../../images/Car-Shop.png'
import panda from '../../../../images/bootstrapWebsite.png'
import WebTechnology from '../../../../images/Web-Technology.png'
import book from '../../../../images/bdBook.png'
import GoTravel from '../../../../images/Go-Travel.png'
import './project.css'
import ProjectDetails from '../../ProjectDetails/ProjectDetails';
const MyProjects =[
    {
        name:'Car-Shop',
        category:'react',
        img:CarShop,
        githubLink:`https://github.com/developer-johir/car-shop-client`,
        viewLink:`https://car-shop-a6d82.web.app/`,
        className:'computerCenter project',
        technology:'HTML, CSS, ReactJS, mongoDB, nodeJS, expressJS, Firebase, Stripe'
    },

    {
        name:'Go-Travel',
        category:'react',
        img:GoTravel,
        githubLink:`https://github.com/developer-johir/go-travel-client`,
        viewLink:`https://go-travel-da4ba.web.app/`,
        className:'humanBazar project',
        technology:'HTML, CSS, ReactJS, mongoDB, nodeJS, expressJS, Firebase',
    },
    
    {
        name:'Web-Technology',
        category:'javascript',
        img:WebTechnology,
        githubLink:`https://github.com/developer-johir/web-technology-client`,
        viewLink:`https://web-technology-951a6.web.app/`,
        className:'cookingMaster project',
        technology:'HTML, CSS, JavaScript, API',
    },
    // {
    //     name:'Bangladesh Book Store',
    //     category:'javascript',
    //     img:book,
    //     githubLink:`https://github.com/rahat9016/booklist`,
    //     viewLink:`https://rahat9016.github.io/booklist/`,
    //     className:'bookStore project',
    //     technology:'HTML, CSS, JavaScript',
    // },
    // {
    //     name:'panda',
    //     category:'bootstrap',
    //     img:panda,
    //     githubLink:`https://github.com/rahat9016/boot`,
    //     viewLink:`https://rahat9016.github.io/boot/`,
    //     className:'panda project',
    //     technology:'HTML, CSS, Bootstrap',
    // },

]
const Projects = () => {
    const [project,setProject] = useState(MyProjects)
    const filterProject = (categoryProject)=>{
        const updateProject = MyProjects.filter(myProject =>{
            return myProject.category === categoryProject
        })
        setProject(updateProject)
    }
    return (
        <div className="project-container" id="project">
            <div className="main-container">
            <h1 className="top-header">Project</h1>
            <div className="button-container">
                <button className="projectBtn" onClick={()=> setProject(MyProjects)}>All</button>
                <button className="projectBtn" onClick={()=> filterProject('javascript')}>JavaScript</button>
                <button className="projectBtn" onClick={()=> filterProject('react')}>React</button>
                <button className="projectBtn" onClick={()=> filterProject('bootstrap')}>Bootstrap</button>
            </div>
            <div className="project-wrapper">
                {
                    project.map(project => {
                        const {img,name,githubLink,viewLink,className,technology} = project;
                        return(
                            <div className={className} >
                                <img className="projectImg" src={img} alt=""/>
                                <div className="name-social-container">
                                    <h1 className="project-name">{name}</h1>
                                    <a className="project-social-btn" href={githubLink} target="_blank"><i class="fab fa-github"></i></a>
                                    <a className="project-social-btn" href={viewLink} target="_blank"><i class="fas fa-globe"></i></a>
                                    <h2 style={{color:'#F63E8C'}}>Technology</h2>
                                    <h4 style={{color:'#fff'}}>{technology}</h4>
                                    <Link to="/ProjectDetails">
                                    <button>Details</button>
                                    </Link>
                                    <Link to="/ProjectDetails">
                                    <button className="projectBtn" onClick={()=> filterProject('react')}>React</button>
                                    </Link>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
            </div>
            
        </div>
    );
};

export default Projects;