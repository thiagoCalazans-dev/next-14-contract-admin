import { getBiddingTypesAction } from "@/src/actions/get-bidding-types";
import { BiddingTypeModal } from "@/src/components/modals/bidding-type";
import { BiddingTypeTable } from "@/src/components/tables/bidding-types-table";
import { Heading } from "@/src/components/ui/heading";

export default async function Page() {
  const BiddingTypes = await getBiddingTypesAction();

  return (
    <div className="flex-1 space-y-4 pt-6">
      <div className="flex items-center justify-between">
        <Heading title="Tipo de Licitação" />
        <BiddingTypeModal />
      </div>
      <BiddingTypeTable data={BiddingTypes} />
    </div>
  );
}
