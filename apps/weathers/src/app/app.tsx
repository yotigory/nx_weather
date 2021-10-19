import React, { useState } from 'react';
import styles from './app.module.css';
import { Title } from '@myweather/ui';
import { Form } from '@myweather/ui';
import { Results } from '@myweather/ui';
import { Loading } from '@myweather/ui';

type ResultsStateType ={
	country: string;
	cityName: string;
	temperature: string;
	conditionText: string;
	icon:string;
}

export const App = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [city, setCity] = useState<string>("");
	const [results, setResults] = useState<ResultsStateType>({
		country: "",
		cityName: "",
		temperature: "",
		conditionText: "",
		icon:"",
	});
	const getWeather = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		if (city) {
			fetch(`http://api.weatherapi.com/v1/current.json?key=c8e4f52788b9491da1775724211810&q=${city}&aqi=no`)
			.then(res => res.json())
			.then(data => {
				setResults({
					country: data.location.country,
					cityName: data.location.name,
					temperature: data.current.temp_c,
					conditionText: data.current.condition.text,
					icon:data.current.condition.icon
				})
				setCity("");
				setLoading(false);
			})
			.catch(err=>alert("都市名が見つかりません。もう一度トライしてください。"))
		} else {

		}
	}
	return (
		<div className="App">
			<Title />
			<Form city ={ city } setCity ={ setCity } getWeather={ getWeather }/>
			{ loading ?<Loading />:<Results results={results} />}
			</div>
  );
};

export default App;
