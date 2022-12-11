import React from 'react';

const ProjectsDetailsModal = ({project}) => {

    return (
        <div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{project.name}</h3>
                    <a className='underline text-white font-extrabold' href={project.liveLink}>Live-Site-Link</a>
                    <img src={project.image} alt="" />
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetailsModal;