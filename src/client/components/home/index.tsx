import * as React from 'react';
import HireFacetedSearch from 'hire-faceted-search';
import history from '../../routes/history';

export default (props) =>
	<div className="home">
		<HireFacetedSearch
			config={{
				baseURL: '/api/search-result-location',
				searchPath: '',
			}}
			onSelect={(letter) => history.push(`/letter/${letter.pid.replace('/', '-')}`)}
		/>
	</div>;

// baseURL: 'http://tc13.huygens.knaw.nl/glp-ckcc/',
