
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowLeft } from "lucide-react";

interface CompanyLoginProps {
  onBack: () => void;
}

export function CompanyLogin({ onBack }: CompanyLoginProps) {
  const [formData, setFormData] = useState({
    companyEmail: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle company login logic here
    console.log("Company login:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#ebe3d5] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 text-[#733635] hover:text-[#5a2a29] hover:bg-white/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
        
        <Card className="border-[#733635]/20">
          <CardHeader className="text-center">
            <CardTitle className="text-[#733635]">Company Partner Login</CardTitle>
            <CardDescription>
              Access your company dashboard and recruitment tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="companyEmail">Company Email</Label>
                <Input
                  id="companyEmail"
                  name="companyEmail"
                  type="email"
                  placeholder="your-company@example.com"
                  value={formData.companyEmail}
                  onChange={handleInputChange}
                  required
                  className="border-[#733635]/30 focus:border-[#733635]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="border-[#733635]/30 focus:border-[#733635]"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-[#733635] hover:bg-[#5a2a29] text-white"
              >
                Sign In to Company Dashboard
              </Button>
            </form>
            
            <div className="mt-6 text-center space-y-3">
              <div className="text-sm text-gray-600">
                <a href="#" className="text-[#733635] hover:underline">
                  Forgot your password?
                </a>
              </div>
              
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600 mb-3">
                  New company partner?
                </p>
                <Button
                  variant="outline"
                  className="w-full border-[#733635] text-[#733635] hover:bg-[#733635] hover:text-white"
                >
                  Request Partnership
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Company partners gain access to our talent pool, recruitment events, and exclusive networking opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}