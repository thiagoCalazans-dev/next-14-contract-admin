import { getModulesAction } from "@/src/actions/get-modules";
import { ModuleModal } from "@/src/components/modals/module";
import { ModuleTable } from "@/src/components/tables/modules-table";

import { Heading } from "@/src/components/ui/heading";

export default async function Page() {
  const Modules = await getModulesAction();

  return (
    <div className="flex-1 space-y-4 pt-6">
      <div className="flex items-center justify-between">
        <Heading title="Módulos" />
        <ModuleModal />
      </div>
      <ModuleTable data={Modules} />
    </div>
  );
}
