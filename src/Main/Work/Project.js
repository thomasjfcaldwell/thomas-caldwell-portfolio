import React from 'react';

import Projects from './Projects.json';

export default function Project() {
	return (
		<div>
			<h4>Project</h4>
			{Projects.map((data) => {
				return (
					<div key={data.id}>
						<h5>{data.title}</h5>
					</div>
				);
			})}
		</div>
	);
}
