import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, Clock } from "lucide-react";
import type { z } from "zod";

type ContactFormData = z.infer<typeof insertContactSubmissionSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent Successfully!",
        description: data.message || "We'll get back to you within 24 hours.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with your free resume review or schedule a consultation to discuss your career goals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-muted rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
              Send Us a Message
            </h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john.doe@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="(555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Interest *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="free-resume-review">Free Resume Review</SelectItem>
                          <SelectItem value="career-coaching">Career Coaching Sessions</SelectItem>
                          <SelectItem value="resume-writing">Resume Writing</SelectItem>
                          <SelectItem value="interview-coaching">Interview Coaching</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
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
                        <Textarea
                          placeholder="Tell us about your career goals and how we can help..."
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary/90"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Questions */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
                Have a Quick Question?
              </h3>
              <div className="space-y-4 mb-6">
                <p className="text-gray-700">
                  Ever have a Job Search question that you needed a quick answer?
                </p>
                <p className="text-gray-700">
                  Ever have a Job Interview question that you wanted to ask but didn't know if it was appropriate?
                </p>
                <p className="font-semibold text-gray-800">
                  GIVE US A CALL....678.929.7391 or Email us at ask@logiqcareers.com
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">678.929.7391</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">ask@logiqcareers.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Experience</h4>
                    <p className="text-muted-foreground">Our Recruiters / Counselors have an average of 18 years experience assisting and helping job seekers navigate difficult transitions and providing expert advice.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700 text-center">
                  Feel free to give us a call. <strong>678.929.7391</strong> or Email us at <strong>ask@logiqcareers.com</strong>
                </p>
              </div>
            </div>

            {/* Free Resume Review CTA */}
            <div className="bg-gradient-to-br from-accent to-green-600 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Start with a Free Resume Review
              </h3>
              <p className="mb-6 opacity-90">
                Get professional feedback on your resume with no obligation. Our experts
                will analyze your current resume and provide actionable recommendations.
              </p>
              <button
                onClick={scrollToContact}
                className="bg-white text-accent px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Get Your Free Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
