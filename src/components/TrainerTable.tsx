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
   <Table className="text-white ">
    <TableHeader className="bg-slate-800">
        <TableRow>
            <TableHead className="text-white">Name</TableHead>
            <TableHead className="text-white">Specialization</TableHead>
            <TableHead className="text-white">Rate/Stars</TableHead>
            <TableHead className="text-white">Experience</TableHead>
        </TableRow>
         </TableHeader>
        <TableBody>
            {trainers.map((trainer) => (
                <TableRow key={trainer.id} onClick={() => {console.log(trainer.id)}}>
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
