<template>
  <div>

import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Interpreter Booking for China
        </h1>

        <Card className="mb-4">
          <CardContent className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Select Language</label>
              <Input placeholder="e.g. English to Chinese" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Select City</label>
              <Input placeholder="e.g. Shanghai, Beijing" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Date</label>
              <Input type="date" />
            </div>

            <Button className="w-full">Search Interpreters</Button>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-gray-500">
          Built for users looking for interpreters in mainland China. Easy to use and mobile friendly.
        </div>
      </div>
    </main>
  );
}

  </div>
</template>
