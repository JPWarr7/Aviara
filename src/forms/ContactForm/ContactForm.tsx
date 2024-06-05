"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import HomeImg from "../../assets/Home 8.jpg";
import Container from "../../components/Container";

import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
//
// const formSchema = z.object({
//   username: z
//     .string()
//     .min(2, { message: "Username must be at least 2 characters." }),
// });
//
export default function Contact() {
  //   const form = useForm<z.infer<typeof formSchema>>({
  //     resolver: zodResolver(formSchema),
  //     defaultValues: {
  //       username: "",
  //     },
  //   });
  //
  //   function onSubmit(values: z.infer<typeof formSchema>) {
  //     console.log(values);
  //   }
  //
  return (
    <>
      <Container>
        <form>
          <div className="space-y-4 w-full py-10 px-10 sm:px-6 lg:px-8 justify-between">
            <div className="grid md:grid-cols-2 justify-between gap-8 sm:px-0 md:px-10">
              <div className="space-y-12">
                <div className="xs:content-center sm:content-left pt-4 sm:px-10">
                  <p className="text-blue-400 text-3xl xs:text-xl sm:text-3xl md:text-4xl xs:text-center sm:text-left px-6">
                    <b>
                      <i>Contact Us</i>
                    </b>
                  </p>
                </div>
                <div className="justify-center border-t-4 border-blue-300 m-6 px-10" />

                {/* <div className="border-b border-gray-900/10 pb-12 px-6"> */}
                <div className="pb-12 px-6">
                  <p className="text-sm leading-6 text-gray-600">
                    To contact us online, please complete the following form:
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    {/* fname, lname, email, phone # here  */}

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Phone Number
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full border-b border-gray-900/10 pb-12" />

                    <div className="col-span-full">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Message
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        Briefly describe how we can help you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center gap-x-6">
                  <Button
                    variant="default"
                    className="bg-blue-400 text-lg font-medium transition-colors px-6"
                  >
                    Submit
                  </Button>
                </div>
              </div>
              <div className="rounded-lg justify-start">
                <img
                  src={HomeImg}
                  className="aspect-square rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
}
