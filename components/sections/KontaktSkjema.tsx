"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { sendEmail } from "@/app/actions";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

// Schema for contact form validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Navn må være minst 2 tegn" }),
  email: z.string().email({ message: "Ugyldig e-postadresse" }),
  message: z.string().min(10, { message: "Meldingen må være minst 10 tegn" }),
});

export default function ContactFormPreview() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const result = await sendEmail(formData);

      if (result.success) {
        toast.success("Meldingen din er sendt!");
        form.reset();
      } else {
        toast.error("Kunne ikke sende meldingen. Vennligst prøv igjen.");
      }
    } catch (error) {
      console.error("Error submitting contact form", error);
      toast.error("Kunne ikke sende meldingen. Vennligst prøv igjen.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-md md:max-w-lg mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start justify-start">
                <FormLabel className="p-2">Navn</FormLabel>
                <FormControl>
                  <Input placeholder="Ola Nordmann" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start justify-start">
                <FormLabel className="p-2">E-post</FormLabel>
                <FormControl>
                  <Input
                    placeholder="ola.nordmann@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start justify-start">
                <FormLabel className="p-2">Melding</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Skriv din melding her..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            variant={"secondary"}
            type="submit"
            className="w-full mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sender..." : "Send melding"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
