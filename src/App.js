import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import Header from './components/Header';
import MyMedication from './components/MyMedication';
import { add } from './actions'


function App() {
  const dispatch = useDispatch()
  useEffect( () => {
    console.log('yes')
    fetch('https://jacob-patton-drug-tracker-app.netlify.app/get_medications')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.medications.forEach( med => {
              const { name, time_between, generic_name, comments } = med
              dispatch(add({medicine: name, timeBetween: time_between, genericName:generic_name, comments}));
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
