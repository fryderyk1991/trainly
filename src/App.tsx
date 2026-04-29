import { useState, useEffect } from "react";
import { fetchData } from "./api/fetch";
import Container from "./components/layout/Container";
import type { Trainer } from "./types/trainer";
import TrainerTable from "./components/TrainerTable";



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
      <div className="bg-slate-900">
        <Container>
        <TrainerTable trainers={trainersList} />
        </Container>
      </div>
    </>
  );
}

export default App;
