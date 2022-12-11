import React from 'react';

const ProjectsDetailsModal = ({project}) => {

    return (
        <div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{project.name}</h3>
                   <div className='m-5'>
                   <a className='underline m-2 text-info font-extrabold' href={project.liveLink}>Live-Site-Link</a>
                   <a className='underline m-2 text-info font-extrabold' href={project.githubClient}>Github-Client</a>
                   <a className='underline m-2 text-info font-extrabold' href={project.githubServer}>Github-Server</a>
                   </div>
                    <img src={project.images} alt="" />
                    <h1 className=" pt-4 text-xl">{project.description}</h1>
                    <p>{project.details}</p>
                    <div className='mt-5'> <h1>Technologies:</h1> <p className=''>{project.Technologies}</p></div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetailsModal;