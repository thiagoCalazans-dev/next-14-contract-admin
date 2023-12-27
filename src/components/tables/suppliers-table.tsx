import { Supplier } from "@/src/domain/entities/supplier";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "../ui/table";
import { RemoveSupplierButton } from "../buttons/remove-supplier";

interface SupplierProps {
  data: Supplier[];
}

export function SupplierTable({ data }: SupplierProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>CNPJ</TableHead>
            <TableHead>Cidade</TableHead>
            <TableHead className="flex justify-end items-center">
              Ações
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.cnpj}</TableCell>
                <TableCell>{item.city}</TableCell>
                <TableCell className="flex justify-end items-center">
                  <RemoveSupplierButton id={item.id} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
