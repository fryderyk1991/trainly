import { useState, useEffect } from "react";

type Trainer = {
  id: number;
  name: "string";
  specialization: "string";
  experience: number;
};

function App() {
  const [trainersList, setTrainersList] = useState<Trainer[]>([]);



  useEffect(() => {
   
  }, []);

  return <></>;
}

export default App;
