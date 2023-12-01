import React from 'react';
import Jobs from './Employment.json';

export default function Position() {
	return (
		<div>
			<h4>Position</h4>
			<div className='job_container'>
				{Jobs.map((job) => {
					return (
						<div className='job_card'>
							<h5>{job.company}</h5>
							<div>
								<p>{job.position}</p>
								<p>{job.date_range}</p>
							</div>
							<p>{job.description}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
