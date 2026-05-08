import { useState, useEffect } from "react";
import { fetchData } from "./api/fetch";
import Container from "./components/layout/Container";
import type { Trainer } from "./types/trainer";
import TrainerTable from "./components/TrainerTable";
import TrainerCard from "./components/TrainerCard";



function App() {
  const [trainersList, setTrainersList] = useState<Trainer[]>([]);
  const [isUserAuth, setIsUserAuth] = useState(false)

  const logUser = () :void => {
    setIsUserAuth(prev => !prev);
    console.log(isUserAuth);
  }

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
      <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-800">
        <Container>
        <TrainerTable trainers={trainersList} />
        <TrainerCard trainers={trainersList} setUser={logUser}/>
        </Container>
      </div>
    </>
  );
}

export default App;
