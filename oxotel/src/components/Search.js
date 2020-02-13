import React,{Component} from 'react';
import '../Search.css';
import axios from 'axios';
import loader from '../loader.gif';
import PageNavigation from './PageNavigation';

class Search extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			query: '',
			results: {},
			loading: false,
			message: '',
			totalResults: 0,
			totalPages: 0,
			currentPageNo: 0,
		};

		this.cancel = '';
	}


	getPageCount = ( total, denominator ) => {
		const divisible	= 0 === total % denominator;
		const valueToBeAdded = divisible ? 0 : 1;
		return Math.floor( total/denominator ) + valueToBeAdded;
	};


	fetchSearchResults = ( updatedPageNo = '', query ) => {
		const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
		const searchUrl = `https://pixabay.com/api/?key=15247632-d6808cea5bbda4614cbecb1e3&q=${query}${pageNumber}`;

		if( this.cancel ) {
			this.cancel.cancel();
		}

		this.cancel = axios.CancelToken.source();

		axios.get( searchUrl, {
			cancelToken: this.cancel.token
		} )
			.then( res => {
				const total = res.data.total;
				const totalPagesCount = this.getPageCount( total, 10 );
				const resultNotFoundMsg = ! res.data.hits.length
										? 'There are no more search results. Please try a new search'
										: '';
				this.setState( {
					results: res.data.hits,
					message: resultNotFoundMsg,
					totalResults: total,
					totalPages: totalPagesCount,
					currentPageNo: updatedPageNo,
					loading: false
				} )
			} )
			.catch( error => {
				if ( axios.isCancel(error) || error ) {
					this.setState({
						loading: false,
						message: 'Failed to fetch the data. Please check network'
					})
				}
			} )
	};

	handleOnInputChange = ( event ) => {
		const query = event.target.value;
		if ( ! query ) {
			this.setState( { query, results: {}, message: '', totalPages: 0, totalResults: 0 } );
		} else {
			this.setState( { query, loading: true, message: '' }, () => {
				this.fetchSearchResults( 1, query );
			} );
		}
	};


	handlePageClick = ( type ) => {
		//event.preventDefault();
		const updatePageNo = 'prev' === type
			? this.state.currentPageNo - 1
			: this.state.currentPageNo + 1;

		if( ! this.state.loading  ) {
			this.setState( { loading: true, message: '' }, () => {
				this.fetchSearchResults( updatePageNo, this.state.query );
			} );
		}
	};
	renderSearchResults = () => {
		const { results } = this.state;

		if ( Object.keys( results ).length && results.length ) {
			return (
				<div className="results-container">
					{ results.map( result => {
						return (
							<a key={ result.id } href={ result.previewURL } className="result-item">
								<h6 className="image-username">{result.user}</h6>
								<div className="image-wrapper">
									<img className="image" src={ result.previewURL } alt={`${result.username} image`}/>
								</div>
							</a>
						)
					} ) }

				</div>
			)
		}
	};

	render() {
		const { query, loading, message, currentPageNo, totalPages } = this.state;

		const showPrevLink = 1 < currentPageNo;
		const showNextLink = totalPages > currentPageNo;

		return (
			<div className="container">
			{/*	Heading*/}
			<h2 className="heading">Discover your Oxotel</h2>
			{/* Search Input*/}
			<label className="search-label" htmlFor="search-input">
				<input
					type="text"
					name="query"
					value={ query }
					id="search-input"
					placeholder="Search..."
					onChange={this.handleOnInputChange}
				/>
				<i className="fa fa-search search-icon" aria-hidden="true"/>
			</label>

			{/*	Error Message*/}
				{message && <p className="message">{ message }</p>}

			{/*	Loader*/}
			<img src={ loader } className={`search-loading ${ loading ? 'show' : 'hide' }`} alt="loader"/>

			{/*Navigation*/}
			<PageNavigation
				loading={loading}
				showPrevLink={showPrevLink}
				showNextLink={showNextLink}
				handlePrevClick={ () => this.handlePageClick('prev' )}
				handleNextClick={ () => this.handlePageClick('next' )}
			/>

			{/*	Result*/}
			{ this.renderSearchResults() }

			{/*Navigation*/}
			<PageNavigation
				loading={loading}
				showPrevLink={showPrevLink}
				showNextLink={showNextLink}
				handlePrevClick={ () => this.handlePageClick('prev')}
				handleNextClick={ () => this.handlePageClick('next')}
			/>

			</div>
		)
	}
}

export default Search
