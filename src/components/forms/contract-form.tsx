"use client";
import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormMessage,
  FormLabel,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm, zodResolver } from "@/src/infra/hook-form";
import { s } from "@/src/infra/schema";
import { Combobox } from "../ui/combobox";
import { BiddingType } from "@/src/domain/entities/bidding-type";
import { Supplier } from "@/src/domain/entities/supplier";
import { Textarea } from "../ui/textarea";

interface ContractFormProps {
  biddingTypes: BiddingType[];
  suppliers: Supplier[];
}

const FormContractSkeleton = {
  id: s.string().optional(),
  number: s
    .number()
    .positive()
    .refine(
      (value) => {
        const valueWithDots = String(value).replace(",", ".");
        const decimalPart = (valueWithDots.split(".")[1] || "").length;
        return decimalPart <= 2;
      },
      {
        message: "O número deve ter no máximo duas casas decimais.",
      }
    ),

  processNumber: s.number(),
  biddingTypeId: s.string(),
  supplier: s.string(),
  fixture: s.string(),
  billingDay: s.number().min(1).max(31),
  value: s.number().positive(),
  subscriptionDate: s.date(),
  dueDate: s.date(),
  signatureDate: s.date(),
};

export const FormContract = s.object(FormContractSkeleton);
export type FormContract = s.infer<typeof FormContract>;

export function ContractForm({ biddingTypes, suppliers }: ContractFormProps) {
  const form = useForm<FormContract>({
    resolver: zodResolver(FormContract),
    defaultValues: {} as FormContract,
  });

  const { isSubmitting, errors } = form.formState;
  //   const { onError, onSuccess } = useToast();

  async function onSubmit(formValues: FormContract) {
    try {
      await console.log(formValues);
      console.log("Contrato adcionado com sucesso");
      form.reset();
    } catch (error: Error | any) {
      console.log(error.message);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-full">
        <div className="md:max-w-[768px] flex flex-col gap-3">
          <div className="grid md:grid-cols-2  gap-3">
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="1234"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="processNumber"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Process Number</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="1234"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid md:grid-cols-2  gap-3">
            <Combobox
              data={suppliers}
              form={form}
              label="Supplier"
              name="supplierId"
            />

            <Combobox
              data={biddingTypes}
              form={form}
              label="Bidding type"
              name="biddingTypeId"
            />
          </div>

          <FormField
            control={form.control}
            name="billingDay"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Billing Deadline</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    disabled={isSubmitting}
                    {...field}
                    placeholder="30"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fixture"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fixture</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isSubmitting}
                    placeholder="Lorem ipsum dolor sit amet. Sit ratione nemo et quam officiis et molestiae nihil ad facere omnis"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button disabled={isSubmitting} className="ml-auto" type="submit">
          Save changes
        </Button>
      </form>
    </Form>
  );
}
