import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardAction } from "./ui/card";
import type { Trainer } from "../types/trainer";

type Props = {
  trainers: Trainer[];  
  setUser: (name: string) => void;

};

const TrainerCard = ({ trainers, setUser }: Props, ) => {
  return (
    <>
      {trainers.map((t) => (
        <Card key={t.id} className="relative mx-auto w-full max-w-sm pt-0">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <img
            src={t.image}
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
          />
          <CardHeader>
        <CardAction>
          <button onClick={() => setUser("Login")}>Join me</button>
        </CardAction>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <button className="w-full">View Event</button>
      </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default TrainerCard;
