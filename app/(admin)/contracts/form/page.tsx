import { getBiddingTypesAction } from "@/src/actions/get-bidding-types";
import { getSuppliersAction } from "@/src/actions/get-suppliers";
import { ContractForm } from "@/src/components/forms/contract-form";

export default async function Page() {
  const biddingTypes = await getBiddingTypesAction();
  const suppliers = await getSuppliersAction();
  return <ContractForm biddingTypes={biddingTypes} suppliers={suppliers} />;
}
