import { Contract } from "@/src/domain/entities/contract";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "../ui/table";
import { RemoveContractButton } from "../buttons/remove-contract";

interface ContractProps {
  data: Contract[];
}

export function ContractTable({ data }: ContractProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Número</TableHead>
            <TableHead>Processo</TableHead>
            <TableHead>Fornecedor</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead className="flex justify-end items-center">
              Ações
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.number}</TableCell>
                <TableCell>{item.processNumber}</TableCell>
                <TableCell>{item.supplier.name}</TableCell>
                <TableCell>
                  {item.amendments[item.amendments.length - 1].value}
                </TableCell>
                <TableCell className="flex justify-end items-center">
                  <RemoveContractButton id={item.id} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
