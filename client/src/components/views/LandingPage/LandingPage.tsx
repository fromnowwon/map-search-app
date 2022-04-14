import React, { useState, useMemo } from 'react'
import Map from './Sections/Map';
import { debounce } from 'lodash'

export interface propsType {
	searchKeyword: string
}

const LandingPage = ():JSX.Element => {
	const [value, setValue] = useState("");
	const [keyword, setKeyword] = useState("");

	const debouncedSearch = useMemo(() => debounce((query) => {
		setValue(query);
		console.log(query)
	}, 200), [ value ]);

	const keywordChange = (e: { target: { value: string; }; }) => {
		debouncedSearch(e.target.value);
	}
	
	const submitKeyword = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		setKeyword(value);
	}

	const valueChecker = () => {
		if (value === "") {
			alert ("검색어를 입력해주세요.")
		}
	}

	return (
		<div className="landing-page">
			<div className="landing-page__inner">
				<div className="search-form-container">
					<form className="search-form" onSubmit={ submitKeyword }>
						<label htmlFor="place" className="form__label">
							<input type="text" id="movie-title" className="form__input" name="place" onChange={ keywordChange } placeholder="검색어를 입력해주세요. (ex: 강남 맛집)" required />
							<div className="btn-box">
								<input className="btn form__submit" type="submit" value="검색" onClick={ valueChecker }/>
							</div>
						</label>
					</form>
				</div>
				{/* 제출한 검색어 넘기기 */}
				<Map searchKeyword={ keyword }/>
			</div>
		</div>
	)
}

export default LandingPage