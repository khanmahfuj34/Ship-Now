import React from "react";
import { productCategoriesData } from "../../../data/dashboard/dashboard.mock";

export default function ProductCategoriesPanel() {
  const totalProducts = 1000;

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-border/50 shadow-sm flex flex-col select-none w-full h-[380px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col">
          <span className="text-xs text-gray-medium font-semibold tracking-wide font-sans mb-1">
            Product Categories
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-extrabold text-dark font-heading leading-none">
              {totalProducts.toLocaleString()}
            </span>
            <span className="font-sans text-[10px] text-gray-medium font-medium leading-none">
              Total Products
            </span>
          </div>
        </div>
        <button className="text-gray-medium hover:text-dark focus:outline-none transition-colors cursor-pointer" aria-label="More options">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
      </div>

      {/* Horizontal Stacked Bar */}
      <div className="w-full h-4 rounded-full overflow-hidden flex mb-5 border border-gray-border/20 shadow-inner">
        {productCategoriesData.map((category) => (
          <div
            key={category.name}
            style={{
              width: `${category.percentage}%`,
              backgroundColor: category.color,
            }}
            className="h-full first:rounded-l-full last:rounded-r-full transition-all duration-300"
            title={`${category.name}: ${category.percentage}%`}
          />
        ))}
      </div>

      {/* Categories Details List */}
      <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-2.5">
        {productCategoriesData.map((category) => (
          <div
            key={category.name}
            className="flex items-center justify-between text-xs font-sans py-1.5 border-b border-gray-border/10 last:border-b-0 hover:bg-gray-light/35 rounded-lg px-1.5 transition-colors"
          >
            {/* Color indicator and name */}
            <div className="flex items-center gap-2 min-w-0">
              <span
                style={{ backgroundColor: category.color }}
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              />
              <span className="font-bold text-dark truncate">
                {category.name}
              </span>
            </div>

            {/* Product count & percentage */}
            <div className="flex items-center gap-4 text-right">
              <span className="text-[10px] text-gray-medium font-medium">
                {category.count} products
              </span>
              <span className="font-extrabold text-dark min-w-[28px]">
                {category.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
