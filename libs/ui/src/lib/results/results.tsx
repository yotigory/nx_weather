import './results.module.css';

/* eslint-disable-next-line */
type ResultsPropsType = {
	results: {
		country: string;
		cityName: string;
		temperature: string;
		conditionText: string;
		icon:string;
	}
}

export const Results = ({ results }: ResultsPropsType) => {
	const { country,cityName,temperature,conditionText,icon} = results;
	return (
		<div>
			{country && <h3>{country}</h3>}
			{cityName && <p>{cityName}</p>}
			{temperature && <p>{temperature}<span>°</span></p>}
			{conditionText && <div><img src={ icon} alt="icon" /><p>{conditionText}</p></div>}
		</div>
  );
}

export default Results;
