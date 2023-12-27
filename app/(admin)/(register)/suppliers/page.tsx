import { getSuppliersAction } from "@/src/actions/get-suppliers";
import { SupplierModal } from "@/src/components/modals/supplier";
import { SupplierTable } from "@/src/components/tables/suppliers-table";
import { Heading } from "@/src/components/ui/heading";

export default async function Page() {
  const Suppliers = await getSuppliersAction();

  return (
    <div className="flex-1 space-y-4 pt-6">
      <div className="flex items-center justify-between">
        <Heading title="Módulos" />
        <SupplierModal />
      </div>
      <SupplierTable data={Suppliers} />
    </div>
  );
}
