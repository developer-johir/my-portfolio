import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const project = useLoaderData();
    return (
        <div>
            <h2>ProjectDetails: {project.length}</h2>
        </div>
    );
};

export default ProjectDetails;