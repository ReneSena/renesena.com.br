import React from 'react';

import Layout from '../components/Layout';

import SEO from '../components/seo';

function NotFoundPage() {
	return (
		<Layout>
			<SEO title="404: Not found" />

			<h1>404</h1>

			<p>Ops... Nada foi encontrado. :(</p>
		</Layout>
	);
}

export default NotFoundPage;
