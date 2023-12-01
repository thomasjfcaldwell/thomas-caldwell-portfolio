import React from 'react';

import Skills from './Skills.json';

export default function SkillCard() {
	return (
		<div>
			<h4>SkillCard</h4>
			{Skills.map((skill) => {
				return (
					<div>
						<h5>{skill.title}</h5>
					</div>
				);
			})}
		</div>
	);
}
