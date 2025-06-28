"use client";
import { createPassword } from "@/app/actions/password.actions";
import { useForm } from "react-hook-form";
import { BsSave2, BsArrowRepeat } from "react-icons/bs";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

interface FormData {
  username: string;
  email: string;
  url: string;
  password: string;
  notes: string;
}

export default function Form() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key !== "category" && value) formData.append(key, value as string);
    });
    formData.append("category", category);
    await createPassword(formData);
    setLoading(false);
    reset();
    setCategory("");
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Add New Credential</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="username" className="my-2">
                  Username
                </Label>
                <Input
                  id="username"
                  {...register("username")}
                  placeholder="username123"
                  className="p-5"
                />
              </div>
              <div>
                <Label htmlFor="email" className="my-2">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="user@example.com"
                  className="p-5"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="url" className="my-2">
                Website URL
              </Label>
              <Input
                id="url"
                type="url"
                {...register("url")}
                placeholder="https://example.com"
                className="p-5"
              />
            </div>

            <div>
              <Label htmlFor="password" className="my-2">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                {...register("password")}
                placeholder="••••••••"
                className="p-5"
              />
            </div>

            <div>
              <Label htmlFor="category" className="my-2">
                Category
              </Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="cursor-pointer w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="social">Social Media</SelectItem>
                  <SelectItem value="work">Work</SelectItem>
                  <SelectItem value="personal">Personal</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="notes" className="my-2">
                Notes
              </Label>
              <textarea
                id="notes"
                {...register("notes")}
                className="w-full p-2 border rounded-md min-h-[100px]"
                placeholder="Additional information"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 p-6 text-base w-full"
              disabled={loading}
            >
              {loading ? (
                <>
                  <BsArrowRepeat className="mr-1.5 size-4 animate-spin" />{" "}
                  Saving...
                </>
              ) : (
                <>
                  <BsSave2 className="mr-1.5 size-4" /> Save Credential
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
