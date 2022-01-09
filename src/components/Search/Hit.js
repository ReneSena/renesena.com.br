import React from 'react';

import PostItem from '../PostItem';

function Hit({ hit }) {
	return (
		<PostItem
			slug={`/blog${hit.fields.slug}`}
			background={hit.background}
			title={hit.title}
			date={hit.date}
			description={hit.description}
			category={hit.category}
		/>
	);
}

export default Hit;
