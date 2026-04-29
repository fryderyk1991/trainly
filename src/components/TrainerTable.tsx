import type { Trainer } from "../types/trainer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

type Props = {
    trainers: Trainer[];
}

const TrainerTable = ({ trainers }: Props) => {
  return (
   <Table>
    <TableHeader>
        <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Specialization</TableHead>
            <TableHead>Rate/Stars</TableHead>
            <TableHead>Experience</TableHead>
        </TableRow>
         </TableHeader>
        <TableBody>
            {trainers.map((trainer) => (
                console.log(trainer.name),
                <TableRow key={trainer.id}>
                    <TableCell>{trainer.name}</TableCell>
                    <TableCell>{trainer.specialization}</TableCell>
                    <TableCell>{trainer.stars}</TableCell>
                    <TableCell>{trainer.experience}</TableCell>
                </TableRow>
            ))}
        </TableBody>
   </Table>
  );
};

export default TrainerTable;
