"use client";
import { updatePassword } from "@/app/actions/password.actions";
import { useForm } from "react-hook-form";
import { FiX, FiEye, FiEyeOff } from "react-icons/fi";
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
import { useState } from "react";
import { MdOutlineUpdate } from "react-icons/md";

interface Password {
  _id: string;
  username?: string;
  email?: string;
  url?: string;
  password: string;
  category?: string;
  notes?: string;
}

interface FormData {
  username: string;
  email: string;
  url: string;
  password: string;
  category: string;
  notes: string;
}

export default function EditForm({
  password,
  onCancel,
}: {
  password: Password;
  onCancel: () => void;
}) {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      username: password.username || "",
      email: password.email || "",
      url: password.url || "",
      password: password.password,
      category: password.category || "",
      notes: password.notes || "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value) formData.append(key, value as string);
    });
    if (data.category) {
      formData.append("category", data.category);
    }
    await updatePassword(password._id, formData);
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="username" className="my-3">
            Username
          </Label>
          <Input id="username" {...register("username")} />
        </div>
        <div>
          <Label htmlFor="email" className="my-3">
            Email
          </Label>
          <Input id="email" type="email" {...register("email")} />
        </div>
      </div>

      <div>
        <Label htmlFor="url" className="my-3">
          Website URL
        </Label>
        <Input id="url" type="url" {...register("url")} />
      </div>

      <div>
        <Label htmlFor="password" className="my-3">
          Password
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
            tabIndex={-1}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        </div>
      </div>

      <div>
        <Label htmlFor="category" className="my-3">
          Category
        </Label>
        <Select
          {...register("category")}
          defaultValue={password.category || ""}
        >
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
        <Label htmlFor="notes" className="my-3">
          Notes
        </Label>
        <textarea
          id="notes"
          {...register("notes")}
          className="w-full p-2 border rounded-md min-h-[100px]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Button type="submit" className="flex-1 p-6 text-base">
          <MdOutlineUpdate className="mr-2 size-6" /> Update Changes
        </Button>
        <Button
          variant="outline"
          onClick={onCancel}
          className="flex-1 p-6 text-base"
        >
          <FiX className="mr-2 size-5" /> Cancel
        </Button>
      </div>
    </form>
  );
}
