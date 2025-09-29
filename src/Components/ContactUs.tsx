
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";

interface ContactUsProps {
  onBack: () => void;
}

export function ContactUs({ onBack }: ContactUsProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission here
    console.log("Contact form:", formData);
    // You could integrate with an email service or backend here
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      inquiryType: value,
    });
  };

  return (
    <div className="min-h-screen bg-[#ebe3d5] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 text-[#733635] hover:text-[#5a2a29] hover:bg-white/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
        
        <div className="text-center mb-12">
          <h1 className="mb-4 text-[#733635]">Contact CSIET</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions about joining, partnering with us, or want to learn more about our programs? 
            We'd love to hear from you!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-[#733635]/20">
            <CardHeader>
              <CardTitle className="text-[#733635]">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-[#733635]/30 focus:border-[#733635]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-[#733635]/30 focus:border-[#733635]"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type</Label>
                  <Select onValueChange={handleSelectChange}>
                    <SelectTrigger className="border-[#733635]/30 focus:border-[#733635]">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="membership">Membership Information</SelectItem>
                      <SelectItem value="partnership">Company Partnership</SelectItem>
                      <SelectItem value="speaker">Guest Speaker Request</SelectItem>
                      <SelectItem value="event">Event Information</SelectItem>
                      <SelectItem value="general">General Questions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="border-[#733635]/30 focus:border-[#733635]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="border-[#733635]/30 focus:border-[#733635]"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-[#733635] hover:bg-[#5a2a29] text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-[#733635]/20">
              <CardHeader>
                <CardTitle className="text-[#733635]">Get in Touch</CardTitle>
                <CardDescription>
                  Multiple ways to reach the CSIET team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#ebe3d5] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#733635]" />
                  </div>
                  <div>
                    <h4 className="text-[#733635]">Email</h4>
                    <p className="text-gray-600">csiet@sc.edu</p>
                    <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#ebe3d5] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#733635]" />
                  </div>
                  <div>
                    <h4 className="text-[#733635]">Location</h4>
                    <p className="text-gray-600">University of South Carolina</p>
                    <p className="text-gray-600">College of Engineering and Computing</p>
                    <p className="text-gray-600">Columbia, SC 29208</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#ebe3d5] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#733635]" />
                  </div>
                  <div>
                    <h4 className="text-[#733635]">Office Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-sm text-gray-500">Available for meetings by appointment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-[#733635]/20 bg-white">
              <CardContent className="pt-6">
                <h3 className="text-[#733635] mb-3">Quick Links</h3>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-[#733635] hover:bg-[#ebe3d5]">
                    📋 Membership Application
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-[#733635] hover:bg-[#ebe3d5]">
                    🤝 Partnership Opportunities
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-[#733635] hover:bg-[#ebe3d5]">
                    📅 Upcoming Events
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-[#733635] hover:bg-[#ebe3d5]">
                    💼 Career Resources
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}