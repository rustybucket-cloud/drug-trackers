import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import Header from './components/Header';
import MyMedication from './components/MyMedication';
import { add } from './actions'


function App() {
  const dispatch = useDispatch()
  useEffect( () => {
    console.log('yes')
    fetch('./get_medications')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.forEach( med => {
              const { MED_NAME, WITH_FOOD, TIME_BETWEEN, GENERIC_NAME, COMMENTS } = med
              dispatch(add({medicine: MED_NAME, withFood: WITH_FOOD, timeBetween: TIME_BETWEEN, genericName:GENERIC_NAME, comments: COMMENTS}));
            })
          })
          .catch(err => console.log(err))
  })

  return (
    <div className="App">
      <Header />
      <main className="px-3">
        <MyMedication />
      </main>
    </div>
  );
}

export default App;
