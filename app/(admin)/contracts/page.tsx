import { getBiddingTypesAction } from "@/src/actions/get-bidding-types";
import { getContractsAction } from "@/src/actions/get-contracts";
import { getSuppliersAction } from "@/src/actions/get-suppliers";
import { ContractModal } from "@/src/components/modals/contract-modal";
import { ContractTable } from "@/src/components/tables/contracts-table";
import { Button } from "@/src/components/ui/button";
import { Heading } from "@/src/components/ui/heading";
import Link from "next/link";

export default async function Contracts() {
  const contracts = await getContractsAction();

  return (
    <div className="flex-1 space-y-4 pt-6">
      <div className="flex items-center justify-between">
        <Heading title="Contratos" />
        <Button asChild>
          <Link href="/contracts/form">Cadastrar</Link>
        </Button>
      </div>
      <ContractTable data={contracts} />
    </div>
  );
}
