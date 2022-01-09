import React from 'react';

import algoliasearch from 'algoliasearch/lite';

import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom';

import Hit from './Hit';

import * as S from './styled';

// Buscando chave do arquivo .env

const algolia = {
	appId: process.env.GATSBY_ALGOLIA_APP_ID,

	searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,

	indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
};

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey);

function Search() {
	return (
		<S.SearchWrapper>
			<InstantSearch
				searchClient={searchClient}
				indexName={algolia.indexName}>
				<SearchBox translations={{ placeholder: 'Buscar...' }} />

				<Stats
					translations={{
						stats(nbHits, timeSpentMs) {
							return `${nbHits} resultados encontrados em ${timeSpentMs}ms`;
						},
					}}
				/>

				<Hits hitComponent={Hit} />
			</InstantSearch>
		</S.SearchWrapper>
	);
}

export default Search;
