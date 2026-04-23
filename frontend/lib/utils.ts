import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isStockCritical = (amount: number): boolean => {
  return amount < 500000; 
};

export const formatPHP = (value: number): string => {
  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
  return `PHP ${formatted}`;
};

export const calculatePctChange = (current: number, previous: number): string => {
  if (previous === 0) return "0%";
  const change = ((current - previous) / previous) * 100;
  return `${change > 0 ? '+' : ''}${change.toFixed(1)}%`;
};

export const getRiskColor = (status: string): string => {
  const risks: Record<string, string> = {
    "La Niña Watch": "bg-red-500",
    "El Niño Advisory": "bg-orange-500",
    "Neutral": "bg-green-500"
  };
  return risks[status] || "bg-slate-500";
};

export const convertToKg = (mtValue: number): number => {
  return mtValue * 1000;
};