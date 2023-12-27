import { getEntitiesAction } from "@/src/actions/get-entities";
import { EntityModal } from "@/src/components/modals/entity-modal";
import { EntityTable } from "@/src/components/tables/entities-table";
import { Heading } from "@/src/components/ui/heading";

export default async function Page() {
  const Entities = await getEntitiesAction();

  return (
    <div className="flex-1 space-y-4 pt-6">
      <div className="flex items-center justify-between">
        <Heading title="Entidades" />
        <EntityModal />
      </div>
      <EntityTable data={Entities} />
    </div>
  );
}
