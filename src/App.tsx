import { useState, useEffect } from "react";
import { fetchData } from "./api/fetch";
import Container from "./components/layout/Container";
import type { Trainer } from "./types/trainer";



function App() {
  const [trainersList, setTrainersList] = useState<Trainer[]>([]);

  useEffect(() => {
    const loadTrainers = async () => {
      try {
        const data = await fetchData<Trainer[]>(
          "http://localhost:3000/trainers",
        );
        setTrainersList(data);
      } catch (error) {
        console.error(error);
      } finally {
        // setIsLoading(false);
      }
    };
    loadTrainers();
  }, []);

  return (
    <>
      <div className="bg-teal-950">
        <Container>
           <ul className="my-2">
          {trainersList.map((t) => (
            <li className="my-2" key={t.id}>
              Name: {t.name}
              <p>Specialization: {t.specialization}</p>
              <p>Experience: {t.experience}</p>
            </li>
          ))}
        </ul>
        </Container>
      </div>
    </>
  );
}

export default App;
