"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { s } from "@/src/infra/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { createSupplierAction } from "@/src/actions/create-supplier";

export const FormSupplierSchema = s.object({
  name: s.string().min(3),
  cnpj: s
    .string()
    .regex(
      /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
      "deve possuir o formato 00.000.000/000.00"
    ),
  zipCode: s
    .string()
    .regex(/^\d{5}-?\d{3}$/, "deve possuir o formato 00000-000"),
  city: s.string(),
  neighborhood: s.string(),
  address: s.string(),
  number: s.coerce.number().optional(),
  observation: s.string().optional(),
});

export type FormSupplier = s.infer<typeof FormSupplierSchema>;

interface SupplierFormProps {
  initialData: FormSupplier | null;
}

export function SupplierForm({ initialData }: SupplierFormProps) {
  const form = useForm<FormSupplier>({
    resolver: zodResolver(FormSupplierSchema),
    defaultValues: initialData || ({} as FormSupplier),
  });

  const { isSubmitting, errors } = form.formState;
  console.log(errors);

  async function onSubmit(formValues: FormSupplier) {
    try {
      await createSupplierAction(formValues);
      console.log("Fornecedor cadastrado com sucesso");
      form.reset();
    } catch (error: Error | any) {
      console.log(error.message);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input disabled={isSubmitting} placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid md:grid-cols-2  gap-3">
          <FormField
            control={form.control}
            name="cnpj"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CNPJ</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="00.000/0000-00"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CEP</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="00000-000"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cidade</FormLabel>
              <FormControl>
                <Input
                  disabled={isSubmitting}
                  placeholder="Osasco"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="md:max-w-[768px]">
          <FormField
            control={form.control}
            name="neighborhood"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bairro</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="Presidente Altino"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Logradouro</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="Rua Henry Ford"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número</FormLabel>
                <FormControl>
                  <Input disabled={isSubmitting} placeholder="96" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="md:max-w-[768px]">
          <FormField
            control={form.control}
            name="observation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Observação</FormLabel>
                <FormControl>
                  <Input disabled={isSubmitting} placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button disabled={isSubmitting} className="w-full" type="submit">
          Save changes
        </Button>
      </form>
    </Form>
  );
}
