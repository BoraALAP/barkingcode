'use client'
import { Button } from '@/components/ui/button'
import {
  FormField,
  Form as FormUI,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
})

export const Form = () => {
  const [response, setResponse] = useState<{
    message: string
    res: 'success' | 'error'
  } | null>(null)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)

    // Send form data to the API
    fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          console.log('Success:', data.message)
          setResponse({ message: data.message, res: 'success' })
          form.reset()
          // You can add success handling here (e.g., showing a success message to the user)
        } else {
          console.error('Error:', data.error)
          setResponse({ message: data.error, res: 'error' })
          // You can add error handling here (e.g., showing an error message to the user)
        }
      })
      .catch((error) => {
        console.error('Error:', error)
        // You can add error handling here (e.g., showing an error message to the user)
      })
    console.log(values)
  }

  return (
    <section className="container mx-auto px-4 py-20 grid sm:grid-cols-3 max-w-4xl gap-10">
      <div className="col-span-1">
        <h2 className="font-bold  ">Get in Touch</h2>
        <p>
          Have questions or ready to start your next project? Fill out the form
          below, and our team will get back to you promptly to discuss your
          needs.
        </p>
      </div>
      <div className=" sm:col-span-2">
        {response?.res === 'success' ? (
          <div className="bg-green-200 px-8 py-6 text-center font-bold rounded-md">
            We got your message! <br /> We will get back to you as soon as we
            can.
          </div>
        ) : (
          <>
            {response?.res === 'error' && (
              <div className="bg-red-500 px-8 py-6 text-center font-bold rounded-md">
                There was an issue on our side. Please feel free to email us at
                <a href="mailto:info@barkingcode.com">info@barkingcode.com</a>
              </div>
            )}
            <FormUI {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="" {...field} />
                      </FormControl>
                      {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="" {...field} />
                      </FormControl>
                      {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </FormUI>
          </>
        )}
      </div>
    </section>
  )
}
