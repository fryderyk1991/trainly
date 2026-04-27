import { useState } from "react";
import { fetchData } from "./api/fetch";


type Trainer = {
  id: number;
  name: string;
  specialization: string;
  experience: number;
};

function App() {
  const [trainersList, setTrainersList] = useState<Trainer[]>([]);
  const [isLoading, setIsLoading] = useState(false)


  const loadTrainers = async () => {
 
 
      try {
        const data = await fetchData<Trainer[]>(
          "http://localhost:3000/trainers",
        );
        setTrainersList(data);
      } catch (error) {
        console.error(error);
      } finally {
       setIsLoading(false);
      }
    };


  return (
    <>
    <button onClick={loadTrainers} disabled={isLoading}>{isLoading ? 'Loading...' : 'Trainers'}</button>
        <ul className="my-2">
          {trainersList.map((t) => (
            <li className="my-2" key={t.id}>
              Name: {t.name}
              <p>Specialization: {t.specialization}</p>
              <p>Experience: {t.experience}</p>
            </li>
          ))}
        </ul>
    </>
  );
}

export default App;
