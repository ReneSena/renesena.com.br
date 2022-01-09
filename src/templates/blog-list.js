import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/Layout';

import SEO from '../components/seo';

import { PostWrapper } from '../components/PostItem/styled';

import PostItem from '../components/PostItem';

import Pagination from '../components/Pagination';

function BlogList(props) {
	const postList = props.data.allMarkdownRemark.edges;

	const { currentPage, numPages } = props.pageContext;

	const isFirst = currentPage === 1;

	const isLast = currentPage === numPages;

	const prevPage =
		currentPage - 1 === 1 ? '/blog' : `/page/${currentPage - 1}`;

	const nextPage = `/page/${currentPage + 1}`;

	return (
		<Layout>
			<SEO title="Blog" />

			<PostWrapper>
				<h1>Post's recentes</h1>

				{postList.map(
					({
						node: {
							frontmatter: {
								background,
								category,
								date,
								description,
								title,
								image,
							},

							timeToRead,

							fields: { slug },
						},
					}) => (
						<PostItem
							key={slug}
							slug={slug}
							background={background}
							category={category}
							date={date}
							timeToRead={timeToRead}
							title={title}
							description={description}
							image={image}
						/>
					)
				)}
			</PostWrapper>

			<Pagination
				isFirst={isFirst}
				isLast={isLast}
				currentPage={currentPage}
				numPages={numPages}
				prevPage={prevPage}
				nextPage={nextPage}
			/>
		</Layout>
	);
}

export const query = graphql`
	query PostList($skip: Int!, $limit: Int!) {
		allMarkdownRemark(
			sort: { fields: frontmatter___date, order: DESC }

			skip: $skip

			limit: $limit
		) {
			edges {
				node {
					fields {
						slug
					}

					frontmatter {
						background

						category

						date(
							locale: "pt-br"
							formatString: "DD [de] MMMM [de] YYYY"
						)

						description

						title

						image
					}

					timeToRead
				}
			}
		}
	}
`;

export default BlogList;
