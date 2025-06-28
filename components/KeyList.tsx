"use client";
import { FiCopy, FiEdit, FiTrash2, FiEye, FiEyeOff } from "react-icons/fi";
import { deletePassword } from "@/app/actions/password.actions";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useState } from "react";
import EditForm from "./EditForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Password {
  _id: string;
  title: string;
  username?: string;
  email?: string;
  url?: string;
  password: string;
  category?: string;
  notes?: string;
}

export default function KeyList({ passwords }: { passwords: Password[] }) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [visibleIds, setVisibleIds] = useState<{ [id: string]: boolean }>({});

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this password?")) {
      await deletePassword(id);
      toast.success("Password deleted");
    }
  };

  const toggleVisibility = (id: string) => {
    setVisibleIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (passwords.length === 0) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <h3 className="text-lg font-medium opacity-50">
          No passwords saved yet
        </h3>
        <p className="text-gray-400 mt-2">
          Add your first password using the form
        </p>
      </div>
    );
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>List Of Keys</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {passwords.map((password) => (
            <div key={password._id}>
              {editingId === password._id ? (
                <EditForm
                  password={password}
                  onCancel={() => setEditingId(null)}
                />
              ) : (
                <Card className="p-5 border-primary/30">
                  <div className="flex items-center justify-between p-3 border rounded-md w-full">
                    {password.category && (
                      <Badge
                        variant="outline"
                        className="border-primary text-primary rounded p-1.5 px-4"
                      >
                        {password.category.charAt(0).toUpperCase() +
                          password.category.slice(1)}
                      </Badge>
                    )}
                    <div className="flex space-x-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => setEditingId(password._id)}
                      >
                        <FiEdit />
                      </Button>
                      <Button
                        size="icon"
                        onClick={() => handleDelete(password._id)}
                      >
                        <FiTrash2 />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {password.username && (
                      <div className="p-3 border rounded-md">
                        <p className="text-sm opacity-50">Username</p>
                        <div className="flex items-center justify-between w-full">
                          <p className="font-mono">{password.username}</p>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleCopy(password.username!)}
                            className="ml-2 p-1"
                          >
                            <FiCopy size={14} />
                          </Button>
                        </div>
                      </div>
                    )}

                    {password.email && (
                      <div className="p-3 border rounded-md">
                        <p className="text-sm opacity-50">Email</p>
                        <div className="flex items-center justify-between w-full">
                          <p>{password.email}</p>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleCopy(password.email!)}
                            className="ml-2 p-1"
                          >
                            <FiCopy size={14} />
                          </Button>
                        </div>
                      </div>
                    )}

                    {password.url && (
                      <div className="p-3 border rounded-md">
                        <p className="text-sm opacity-50">Website</p>
                        <div className="flex items-center mt-1">
                          <Link
                            href={password.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:underline flex items-center"
                          >
                            {password.url}
                          </Link>
                        </div>
                      </div>
                    )}

                    <div className="p-3 border rounded-md">
                      <p className="text-sm opacity-50">Password</p>
                      <div className="flex items-center justify-between w-full">
                        <p className="font-mono">
                          {visibleIds[password._id]
                            ? password.password
                            : "••••••••"}
                        </p>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleVisibility(password._id)}
                            aria-label={
                              visibleIds[password._id]
                                ? "Hide password"
                                : "Show password"
                            }
                          >
                            {visibleIds[password._id] ? (
                              <FiEyeOff size={16} />
                            ) : (
                              <FiEye size={16} />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleCopy(password.password)}
                            aria-label="Copy password"
                          >
                            <FiCopy size={14} />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {password.notes && (
                      <div className="p-3 border rounded-md">
                        <p className="text-sm opacity-50">Notes</p>
                        <div className="flex items-center justify-between w-full">
                          <p className="mt-1 text-gray-700 whitespace-pre-line">
                            {password.notes}
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              password.notes && handleCopy(password.notes)
                            }
                            className="p-1"
                            aria-label="Copy notes"
                          >
                            <FiCopy size={14} />
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
