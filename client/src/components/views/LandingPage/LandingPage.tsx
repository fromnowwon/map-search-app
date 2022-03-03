import React, { useState } from 'react'
import Map from './Sections/Map';

export interface propsType {
	searchKeyword: string
}

const LandingPage = ():JSX.Element => {
	const [Value, setValue] = useState("");
	const [Keyword, setKeyword] = useState("");

	const keywordChange = (e: { preventDefault: () => void; target: { value: string }; }) => {
		e.preventDefault();
		setValue(e.target.value);
	}

	const submitKeyword = async (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		console.log(Value)
		setKeyword(Value);
	}

	return (
		<div className="landing-page">
			<div className="landing-page__inner">
				<div className="search-form-container">
					<form className="search-form" onSubmit={ submitKeyword }>
						<label htmlFor="place" className="form__label">
							<input type="text" id="movie-title" className="form__input" name="place" onChange={ keywordChange } placeholder="검색어를 입력해주세요. (ex: 강남 맛집)" required />
							<div className="btn-box">
								<input className="btn form__submit" type="submit" value="검색"/>
							</div>
						</label>
					</form>
				</div>
				<Map searchKeyword={ Keyword }/>
			</div>
		</div>
	)
}

export default LandingPage