"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { GithubRepo } from "@/types/github";

interface LanguageChartProps {
  repos: GithubRepo[];
}

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#06B6D4",
  "#EC4899",
  "#84CC16",
];

export default function LanguageChart({
  repos,
}: LanguageChartProps) {
  const languageCount = repos.reduce<Record<string, number>>(
    (acc, repo) => {
      const language = repo.language ?? "Unknown";
      acc[language] = (acc[language] || 0) + 1;
      return acc;
    },
    {}
  );

  const chartData = Object.entries(languageCount).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  return (
    <div className="mt-10 rounded-xl bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Language Breakdown
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label
          >
            {chartData.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}