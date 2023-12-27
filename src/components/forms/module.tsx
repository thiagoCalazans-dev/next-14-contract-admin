"use client";
import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm, zodResolver } from "@/src/infra/hook-form";
import { s } from "@/src/infra/schema";
import { createModuleAction } from "@/src/actions/create-module";

interface ModuleFormProps {
  initialData: FormModule | null;
}

export const FormModuleSchema = s.object({
  id: s.string().optional(),
  name: s.string().min(1),
});

export type FormModule = s.infer<typeof FormModuleSchema>;

export function ModuleForm({ initialData }: ModuleFormProps) {
  const form = useForm<FormModule>({
    resolver: zodResolver(FormModuleSchema),
    defaultValues: initialData || {
      name: "",
    },
  });

  const { isSubmitting, errors } = form.formState;
  //   const { onError, onSuccess } = useToast();

  async function onSubmit(formValues: FormModule) {
    try {
      await createModuleAction(formValues);
      console.log("Categoria Cadastrada com sucesso");
      form.reset();
    } catch (error: Error | any) {
      console.log(error.message);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <div className="">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <Label>Name</Label>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="Type"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button disabled={isSubmitting} className="w-full" type="submit">
          Salvar
        </Button>
      </form>
    </Form>
  );
}
