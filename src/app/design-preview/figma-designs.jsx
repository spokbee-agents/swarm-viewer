'use client';

/**
 * SPOKBEE 4.0 — HIGH-FIDELITY FIGMA DESIGN FRAMES
 * ═══════════════════════════════════════════════════
 *
 * Three primary frames for the 7-Day MVP Platform Engine.
 * Built with React + Tailwind CSS following DESIGN_SYSTEM.md exactly.
 *
 * Design System Reference:
 *   Primary:    #FF9933 (spokbee orange)
 *   Secondary:  #2d3748 (sidebar/dark)
 *   Surface:    #f8fafc (page bg)
 *   Elevated:   #ffffff (cards)
 *   Border:     #e2e8f0
 *   Text:       #1a202c / #4a5568 / #a0aec0
 *   Success:    #10b981
 *   Warning:    #f59e0b
 *   Error:      #ef4444
 *
 * Light mode only (per DESIGN_SYSTEM.md).
 * Font: Inter / Geist Sans.
 *
 * Source Plans: PLAN-01b, PLAN-03, PLAN-04, PLAN-06, PLAN-07, PLAN-08, PLAN-10b
 */

import React, { useState } from "react";

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED COMPONENTS (used across all frames)
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Sidebar ────────────────────────────────────────────────────────────────
function Sidebar({ activePage = "products" }) {
  const navItems = [
    { id: "products", label: "Products", icon: "📦" },
    { id: "quotes", label: "Quotes", icon: "📄" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <div className="w-[240px] bg-[#2d3748] flex flex-col h-full">
      {/* Brand */}
      <div className="px-5 py-5 border-b border-white/10">
        <span className="text-[#FF9933] text-xl font-bold tracking-tight">
          Spokbee
        </span>
        <span className="text-white/40 text-xs ml-1">4.0</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-3">
        {navItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`flex items-center gap-3 px-5 py-2.5 text-sm transition-colors ${
              activePage === item.id
                ? "bg-[#FF9933]/10 text-[#FF9933] border-l-2 border-[#FF9933]"
                : "text-white/70 hover:bg-white/10 border-l-2 border-transparent"
            }`}
          >
            <span className="text-base">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>

      {/* User */}
      <div className="px-5 py-4 border-t border-white/10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#FF9933] flex items-center justify-center text-white text-xs font-semibold">
          KS
        </div>
        <div>
          <div className="text-white text-sm font-medium">Karina S.</div>
          <div className="text-white/40 text-xs">Vidmar Industries</div>
        </div>
      </div>
    </div>
  );
}

// ─── Status Badge ───────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  const styles = {
    published: "bg-[#10b981]/10 text-[#10b981]",
    draft: "bg-[#f59e0b]/10 text-[#f59e0b]",
    archived: "bg-[#a0aec0]/10 text-[#a0aec0]",
    generating: "bg-[#FF9933]/10 text-[#FF9933]",
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
        styles[status] || styles.draft
      }`}
    >
      {status === "generating" && (
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF9933] animate-pulse mr-1.5" />
      )}
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FRAME 1: ZERO STATE
// ═══════════════════════════════════════════════════════════════════════════════
//
// Context: Manufacturer has just signed up and uploaded a PDF/Image.
// The dashboard is empty — no configurators yet.
// Shows: Sidebar + empty products grid + upload prompt + template library
//
// Plans: PLAN-01b (Dashboard Shell), PLAN-10b (Template Library)
// ═══════════════════════════════════════════════════════════════════════════════

export function Frame1_ZeroState() {
  return (
    <div className="flex h-screen bg-[#f8fafc] font-['Inter',sans-serif]">
      <Sidebar activePage="products" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-14 bg-white border-b border-[#e2e8f0] flex items-center justify-between px-6">
          <div>
            <h1 className="text-[#1a202c] text-lg font-semibold">
              Your Configurators
            </h1>
          </div>
          <button className="bg-[#FF9933] hover:bg-[#F08C2A] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors focus:ring-2 focus:ring-[#FF9933]/40">
            + New Configurator
          </button>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          {/* Upload Notification Banner */}
          <div className="bg-white border border-[#e2e8f0] rounded-lg shadow-sm p-4 mb-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#FF9933]/10 flex items-center justify-center">
              <span className="text-[#FF9933] text-lg">📎</span>
            </div>
            <div className="flex-1">
              <p className="text-[#1a202c] text-sm font-medium">
                File uploaded: <span className="font-semibold">Vidmar_Catalog_2026.pdf</span>
              </p>
              <p className="text-[#4a5568] text-xs mt-0.5">
                Ready to generate a configurator from this catalog. Click below to start.
              </p>
            </div>
            <button className="bg-[#FF9933] hover:bg-[#F08C2A] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              Build from PDF
            </button>
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-16">
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-[#f8fafc] border-2 border-dashed border-[#e2e8f0] flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-[#a0aec0]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>

            <h2 className="text-[#1a202c] text-xl font-semibold mb-2">
              Create Your First Configurator
            </h2>
            <p className="text-[#4a5568] text-sm text-center max-w-md mb-6">
              Tell our AI about your product — sizes, materials, pricing — and
              watch it build a live configurator with an API endpoint in minutes.
            </p>

            <button className="bg-[#FF9933] hover:bg-[#F08C2A] text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm focus:ring-2 focus:ring-[#FF9933]/40">
              + Start from Scratch
            </button>

            <p className="text-[#a0aec0] text-xs mt-3">
              or choose a template below
            </p>
          </div>

          {/* Template Library (PLAN-10b) */}
          <div className="mt-4">
            <h3 className="text-[#1a202c] text-base font-semibold mb-4">
              Templates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Active Template */}
              <div className="bg-white border border-[#e2e8f0] rounded-lg shadow-sm hover:border-[#FF9933] hover:shadow-md transition-all cursor-pointer group">
                <div className="h-32 bg-gradient-to-br from-[#2d3748] to-[#4a5568] rounded-t-lg flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <div className="p-4">
                  <h4 className="text-[#1a202c] font-semibold text-sm">
                    Industrial Storage
                  </h4>
                  <p className="text-[#4a5568] text-xs mt-1">
                    Cabinets, drawers, shelving. Pre-built with width, material, finish.
                  </p>
                  <button className="mt-3 w-full bg-[#FF9933] hover:bg-[#F08C2A] text-white text-xs font-medium py-2 rounded-lg transition-colors">
                    Start Building
                  </button>
                </div>
              </div>

              {/* Coming Soon Templates */}
              {["Office Furniture", "Custom Windows", "Fencing & Gates"].map(
                (name) => (
                  <div
                    key={name}
                    className="bg-white border border-[#e2e8f0] rounded-lg shadow-sm opacity-60 cursor-not-allowed relative overflow-hidden"
                  >
                    <div className="h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-lg" />
                    <div className="p-4">
                      <h4 className="text-[#1a202c] font-semibold text-sm">
                        {name}
                      </h4>
                      <p className="text-[#4a5568] text-xs mt-1">
                        Template coming soon.
                      </p>
                    </div>
                    {/* Coming Soon Overlay */}
                    <div className="absolute inset-0 bg-[#2d3748]/80 flex items-center justify-center rounded-lg">
                      <span className="text-white text-sm font-medium">
                        Coming Q2 2026
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FRAME 2: GENERATION STATE
// ═══════════════════════════════════════════════════════════════════════════════
//
// Context: AI is actively building the configurator. Split-panel view:
//   Left: AI Chat with streaming messages, tool call results, typing indicator
//   Right: Live preview with parameters appearing in real-time,
//          asset generation loading state, constraint indicators
//
// Plans: PLAN-01b (Split Panel), PLAN-03 (AI Agent), PLAN-04 (Dynamic Renderer),
//        PLAN-06 (Photo Pipeline)
// ═══════════════════════════════════════════════════════════════════════════════

export function Frame2_GenerationState() {
  return (
    <div className="flex h-screen bg-[#f8fafc] font-['Inter',sans-serif]">
      <Sidebar activePage="products" />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Builder Top Bar */}
        <header className="h-14 bg-white border-b border-[#e2e8f0] flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <button className="text-[#4a5568] hover:text-[#1a202c] text-sm">
              ← Back
            </button>
            <div className="h-4 w-px bg-[#e2e8f0]" />
            <input
              className="text-[#1a202c] text-base font-semibold bg-transparent border-b border-transparent hover:border-[#e2e8f0] focus:border-[#FF9933] focus:outline-none px-1 py-0.5 transition-colors"
              defaultValue="Industrial Cabinet"
            />
            <StatusBadge status="draft" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#a0aec0] text-xs">Auto-saved 3s ago</span>
            <button className="border border-[#e2e8f0] hover:border-[#FF9933] text-[#4a5568] hover:text-[#FF9933] text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              Preview
            </button>
            <button
              className="bg-[#a0aec0] text-white text-sm font-medium px-4 py-2 rounded-lg cursor-not-allowed"
              disabled
              title="Complete all parameters before publishing"
            >
              Publish
            </button>
          </div>
        </header>

        {/* Split Panel (PLAN-01b: 40% chat / 60% preview) */}
        <div className="flex-1 flex overflow-hidden">
          {/* ── LEFT: AI Chat Panel (40%) ── */}
          <div className="w-[40%] border-r border-[#e2e8f0] flex flex-col bg-white">
            {/* Chat Header */}
            <div className="px-4 py-3 border-b border-[#e2e8f0] flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#FF9933] flex items-center justify-center">
                <span className="text-white text-xs font-bold">S</span>
              </div>
              <span className="text-[#1a202c] text-sm font-medium">
                Spokbee AI Architect
              </span>
              <span className="text-[#a0aec0] text-xs ml-auto">
                Phase: Parameters
              </span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {/* AI Welcome */}
              <ChatBubble
                role="ai"
                content="Hi! I'm Spokbee. Tell me about the product you want to configure."
              />

              {/* User Message */}
              <ChatBubble
                role="user"
                content="I sell industrial cabinets. They come in 3 widths (36, 45, 60 inches), 4 materials (steel, aluminum, stainless, galvanized), and can have drawers or shelves."
              />

              {/* AI Response with Tool Calls */}
              <ChatBubble
                role="ai"
                content="Great! I'll set up your cabinet configurator. Let me create the parameters..."
              />

              {/* Tool Call Results (PLAN-03: tool-result.tsx) */}
              <ToolResult
                name="set_product_info"
                detail='Set product: "Industrial Cabinet"'
              />
              <ToolResult
                name="add_parameter"
                detail='Added "Width" (select) — 36″, 45″, 60″'
              />
              <ToolResult
                name="add_parameter"
                detail='Added "Material" (radio) — Steel, Aluminum, Stainless, Galvanized'
              />
              <ToolResult
                name="add_parameter"
                detail='Added "Storage Type" (select) — Drawers, Shelves, Mixed'
              />
              <ToolResult
                name="set_base_price"
                detail="Base price: $1,200.00 USD"
              />

              {/* AI Follow-up */}
              <ChatBubble
                role="ai"
                content="I've created 3 parameters and set a base price. Now let's talk pricing — does width affect the price? What about material?"
              />

              {/* User Reply */}
              <ChatBubble
                role="user"
                content="Yes — 45 inch adds $200, 60 inch adds $450. Stainless steel is +$350. Galvanized is +$150."
              />

              {/* More Tool Calls */}
              <ToolResult
                name="set_pricing_rule"
                detail='Width 45″ → +$200.00'
              />
              <ToolResult
                name="set_pricing_rule"
                detail='Width 60″ → +$450.00'
              />
              <ToolResult
                name="set_pricing_rule"
                detail="Stainless Steel → +$350.00"
              />
              <ToolResult
                name="set_pricing_rule"
                detail="Galvanized → +$150.00"
              />

              {/* AI asks about constraints */}
              <ChatBubble
                role="ai"
                content={`Pricing rules set! The preview on the right is already updating live.\n\nNow — are there any constraints? For example, is the 60″ width available in all materials, or are there restrictions?`}
              />

              {/* User constraint input */}
              <ChatBubble
                role="user"
                content="60 inch is not available in aluminum. Also, galvanized only comes with shelves, not drawers."
              />

              {/* Constraint tool calls */}
              <ToolResult
                name="set_constraint"
                detail='Excludes: Width 60″ ↔ Aluminum — "60″ cabinets require steel or stainless frame"'
              />
              <ToolResult
                name="set_constraint"
                detail='Requires: Galvanized → Shelves only — "Galvanized frames support shelving units only"'
              />

              {/* AI asks about geometry / assets */}
              <ChatBubble
                role="ai"
                content={`Constraints saved. Now let's handle visuals.\n\nDoes changing the width affect the physical shape of the cabinet? What about material — does that change the look?`}
              />

              {/* Typing Indicator (PLAN-03 interaction state) */}
              <div className="flex justify-start">
                <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg rounded-bl-none px-4 py-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#a0aec0] animate-bounce [animation-delay:0ms]" />
                  <span className="w-2 h-2 rounded-full bg-[#a0aec0] animate-bounce [animation-delay:150ms]" />
                  <span className="w-2 h-2 rounded-full bg-[#a0aec0] animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="px-4 py-3 border-t border-[#e2e8f0]">
              <div className="flex items-center gap-2">
                {/* File Upload Button */}
                <button
                  className="w-9 h-9 rounded-lg border border-[#e2e8f0] hover:border-[#FF9933] flex items-center justify-center text-[#4a5568] hover:text-[#FF9933] transition-colors"
                  title="Upload image or spreadsheet"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <input
                  className="flex-1 border border-[#e2e8f0] rounded-lg px-3 py-2 text-sm text-[#1a202c] placeholder-[#a0aec0] focus:ring-2 focus:ring-[#FF9933]/40 focus:border-[#FF9933] outline-none transition-colors"
                  placeholder="Describe your product..."
                />
                <button className="bg-[#FF9933] hover:bg-[#F08C2A] text-white w-9 h-9 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* ── Resize Handle ── */}
          <div className="w-1 bg-[#e2e8f0] hover:bg-[#FF9933]/40 cursor-col-resize transition-colors" />

          {/* ── RIGHT: Live Preview Panel (60%) ── */}
          <div className="flex-1 flex flex-col overflow-hidden bg-[#f8fafc]">
            {/* Preview Header */}
            <div className="px-6 py-3 border-b border-[#e2e8f0] bg-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[#1a202c] text-sm font-medium">
                  Live Preview
                </span>
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-[#10b981] text-xs">Updating</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-xs text-[#4a5568] border border-[#e2e8f0] px-2.5 py-1.5 rounded hover:border-[#FF9933] transition-colors">
                  Desktop
                </button>
                <button className="text-xs text-[#a0aec0] border border-[#e2e8f0] px-2.5 py-1.5 rounded hover:border-[#FF9933] transition-colors">
                  Mobile
                </button>
              </div>
            </div>

            {/* Preview Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="max-w-lg mx-auto">
                {/* Product Title (from set_product_info) */}
                <h2 className="text-[#1a202c] text-xl font-semibold mb-1">
                  Industrial Cabinet
                </h2>
                <p className="text-[#4a5568] text-sm mb-6">
                  Configure your industrial storage solution
                </p>

                {/* ── Image Area: No-Image Display (PLAN-06) ── */}
                <div className="bg-white border border-[#e2e8f0] rounded-lg p-8 mb-6 flex flex-col items-center justify-center">
                  <svg
                    className="w-16 h-16 text-[#e2e8f0] mb-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  <p className="text-[#a0aec0] text-sm">
                    Add product photos to enhance your configurator
                  </p>
                  <p className="text-[#a0aec0] text-xs mt-1">
                    Drag images into the chat or upload below
                  </p>
                </div>

                {/* ── Parameters (PLAN-04: DynamicRenderer output) ── */}
                <div className="space-y-5">
                  {/* Width — Select (PLAN-04: ParamSelect) */}
                  <div className="bg-white border border-[#e2e8f0] rounded-lg p-4">
                    <label className="text-[#1a202c] text-sm font-medium block mb-2">
                      Width
                    </label>
                    <div className="flex gap-2">
                      {[
                        { label: '36"', active: true },
                        { label: '45"', active: false },
                        { label: '60"', active: false },
                      ].map((opt) => (
                        <button
                          key={opt.label}
                          className={`flex-1 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                            opt.active
                              ? "bg-[#FF9933]/10 border-[#FF9933] text-[#FF9933]"
                              : "border-[#e2e8f0] text-[#4a5568] hover:border-[#FF9933]"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Material — Radio Group (PLAN-04: ParamRadio) */}
                  <div className="bg-white border border-[#e2e8f0] rounded-lg p-4">
                    <label className="text-[#1a202c] text-sm font-medium block mb-2">
                      Material
                    </label>
                    <div className="space-y-2">
                      {[
                        { label: "Steel", price: null, active: true, disabled: false },
                        { label: "Aluminum", price: null, active: false, disabled: false },
                        {
                          label: "Stainless Steel",
                          price: "+$350",
                          active: false,
                          disabled: false,
                        },
                        {
                          label: "Galvanized",
                          price: "+$150",
                          active: false,
                          disabled: false,
                        },
                      ].map((opt) => (
                        <label
                          key={opt.label}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border cursor-pointer transition-all ${
                            opt.active
                              ? "border-[#FF9933] bg-[#FF9933]/5"
                              : opt.disabled
                              ? "border-[#e2e8f0] bg-gray-50 opacity-50 cursor-not-allowed"
                              : "border-[#e2e8f0] hover:border-[#FF9933]/50"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              opt.active
                                ? "border-[#FF9933]"
                                : "border-[#e2e8f0]"
                            }`}
                          >
                            {opt.active && (
                              <div className="w-2 h-2 rounded-full bg-[#FF9933]" />
                            )}
                          </div>
                          <span
                            className={`text-sm flex-1 ${
                              opt.active
                                ? "text-[#1a202c] font-medium"
                                : "text-[#4a5568]"
                            }`}
                          >
                            {opt.label}
                          </span>
                          {opt.price && (
                            <span className="text-[#4a5568] text-xs font-medium">
                              {opt.price}
                            </span>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Storage Type — Select with Constraint (PLAN-04 + PLAN-13) */}
                  <div className="bg-white border border-[#e2e8f0] rounded-lg p-4">
                    <label className="text-[#1a202c] text-sm font-medium block mb-2">
                      Storage Type
                    </label>
                    <div className="flex gap-2">
                      {[
                        { label: "Drawers", active: true, disabled: false },
                        { label: "Shelves", active: false, disabled: false },
                        { label: "Mixed", active: false, disabled: false },
                      ].map((opt) => (
                        <button
                          key={opt.label}
                          className={`flex-1 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                            opt.active
                              ? "bg-[#FF9933]/10 border-[#FF9933] text-[#FF9933]"
                              : opt.disabled
                              ? "border-[#e2e8f0] text-[#a0aec0] bg-gray-50 cursor-not-allowed"
                              : "border-[#e2e8f0] text-[#4a5568] hover:border-[#FF9933]"
                          }`}
                          disabled={opt.disabled}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Geometry Indicators (from Roadmap: 🔷 geometry / 🎨 visual) */}
                  <div className="bg-[#f8fafc] rounded-lg p-3 border border-[#e2e8f0]">
                    <p className="text-[#4a5568] text-xs font-medium mb-2">
                      Geometry Impact Assessment
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        Width — Shape
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        Storage Type — Shape
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-purple-50 text-purple-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        Material — Visual Only
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Price Display (PLAN-04: PriceDisplay) ── */}
                <div className="mt-6 bg-white border border-[#e2e8f0] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#4a5568] text-sm">
                      Configuration Price
                    </span>
                    <span className="text-[#1a202c] text-2xl font-bold">
                      $1,200.00
                    </span>
                  </div>
                  {/* Breakdown */}
                  <div className="border-t border-[#e2e8f0] pt-3 space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#4a5568]">Base price</span>
                      <span className="text-[#1a202c]">$1,200.00</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#4a5568]">
                        Width: 36″ (standard)
                      </span>
                      <span className="text-[#a0aec0]">+$0.00</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#4a5568]">
                        Material: Steel (standard)
                      </span>
                      <span className="text-[#a0aec0]">+$0.00</span>
                    </div>
                    <div className="flex justify-between text-xs font-medium pt-1.5 border-t border-[#e2e8f0]">
                      <span className="text-[#1a202c]">Total</span>
                      <span className="text-[#1a202c]">$1,200.00</span>
                    </div>
                  </div>
                </div>

                {/* ── Asset Generation Loading State ── */}
                {/* This represents the loading state when AI generates 2D images */}
                {/* or when a pre-staged 3D model (cabinet GLB) is loading. */}
                {/* Ref: Roadmap — "Pre-staged GLB loads for demo dataset" */}
                <div className="mt-6 bg-white border border-[#e2e8f0] rounded-lg p-6 flex flex-col items-center">
                  <div className="relative w-16 h-16 mb-4">
                    {/* Spinner */}
                    <div className="absolute inset-0 border-2 border-[#e2e8f0] border-b-[#FF9933] rounded-full animate-spin" />
                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#FF9933]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-[#1a202c] text-sm font-medium">
                    Generating product visualization...
                  </p>
                  <p className="text-[#a0aec0] text-xs mt-1">
                    This typically takes 30-60 seconds
                  </p>
                  {/* Progress bar */}
                  <div className="w-48 h-1.5 bg-[#e2e8f0] rounded-full mt-3 overflow-hidden">
                    <div
                      className="h-full bg-[#FF9933] rounded-full animate-pulse"
                      style={{ width: "45%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FRAME 3: PUBLISHED STATE
// ═══════════════════════════════════════════════════════════════════════════════
//
// Context: Configurator is fully built and published. The manufacturer sees:
//   - Double-sided dashboard with completed 3D/image preview
//   - All parameters populated with pricing and constraints active
//   - URL-to-Theme branding applied
//   - Published configurator URL ready to share
//   - Agent API endpoint URL ready to copy
//   - Quote request CTA
//
// Plans: PLAN-04, PLAN-06, PLAN-07, PLAN-08, PLAN-10b
// ═══════════════════════════════════════════════════════════════════════════════

export function Frame3_PublishedState() {
  return (
    <div className="flex h-screen bg-[#f8fafc] font-['Inter',sans-serif]">
      <Sidebar activePage="products" />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Builder Top Bar — Published State */}
        <header className="h-14 bg-white border-b border-[#e2e8f0] flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <button className="text-[#4a5568] hover:text-[#1a202c] text-sm">
              ← Back
            </button>
            <div className="h-4 w-px bg-[#e2e8f0]" />
            <h1 className="text-[#1a202c] text-base font-semibold">
              Industrial Cabinet
            </h1>
            <StatusBadge status="published" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#10b981] text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              Live
            </span>
            <button className="border border-[#e2e8f0] hover:border-[#ef4444] text-[#ef4444] text-sm font-medium px-3 py-1.5 rounded-lg transition-colors">
              Unpublish
            </button>
            <button className="bg-[#FF9933] hover:bg-[#F08C2A] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              Edit
            </button>
          </div>
        </header>

        {/* Split Panel — Published View */}
        <div className="flex-1 flex overflow-hidden">
          {/* ── LEFT: Conversation History + Actions (40%) ── */}
          <div className="w-[40%] border-r border-[#e2e8f0] flex flex-col bg-white">
            {/* Chat Header */}
            <div className="px-4 py-3 border-b border-[#e2e8f0] flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#FF9933] flex items-center justify-center">
                <span className="text-white text-xs font-bold">S</span>
              </div>
              <span className="text-[#1a202c] text-sm font-medium">
                Spokbee AI Architect
              </span>
              <span className="text-[#10b981] text-xs ml-auto flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                Published
              </span>
            </div>

            {/* Scrollable Chat History */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {/* Conversation summary */}
              <ChatBubble
                role="ai"
                content="Hi! I'm Spokbee. Tell me about the product you want to configure."
              />
              <ChatBubble
                role="user"
                content="I sell industrial cabinets. 3 widths, 4 materials, drawers or shelves."
              />

              {/* Collapsed tool call summary */}
              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-3">
                <p className="text-[#4a5568] text-xs font-medium mb-1">
                  6 parameters created
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="text-xs bg-[#FF9933]/10 text-[#FF9933] px-2 py-0.5 rounded-full">
                    Width
                  </span>
                  <span className="text-xs bg-[#FF9933]/10 text-[#FF9933] px-2 py-0.5 rounded-full">
                    Material
                  </span>
                  <span className="text-xs bg-[#FF9933]/10 text-[#FF9933] px-2 py-0.5 rounded-full">
                    Storage Type
                  </span>
                  <span className="text-xs bg-[#FF9933]/10 text-[#FF9933] px-2 py-0.5 rounded-full">
                    Finish Color
                  </span>
                  <span className="text-xs bg-[#FF9933]/10 text-[#FF9933] px-2 py-0.5 rounded-full">
                    Lock Type
                  </span>
                  <span className="text-xs bg-[#FF9933]/10 text-[#FF9933] px-2 py-0.5 rounded-full">
                    Casters
                  </span>
                </div>
              </div>

              <ChatBubble
                role="ai"
                content="Your configurator is published and live! Here's what was created:"
              />

              {/* Publish Success Card */}
              <div className="bg-[#10b981]/5 border border-[#10b981]/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <svg
                    className="w-5 h-5 text-[#10b981]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-[#10b981] text-sm font-semibold">
                    Configurator Published
                  </span>
                </div>

                {/* Public URL */}
                <div className="mb-3">
                  <p className="text-[#4a5568] text-xs font-medium mb-1">
                    Live Configurator URL
                  </p>
                  <div className="flex items-center gap-2 bg-white rounded-lg border border-[#e2e8f0] px-3 py-2">
                    <span className="text-[#FF9933] text-xs font-mono flex-1 truncate">
                      spokbee.com/vidmar/configure/industrial-cabinet
                    </span>
                    <button className="text-[#4a5568] hover:text-[#FF9933] transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* API Endpoint (PLAN-08) */}
                <div className="mb-3">
                  <p className="text-[#4a5568] text-xs font-medium mb-1">
                    Agent API Endpoint
                  </p>
                  <div className="flex items-center gap-2 bg-white rounded-lg border border-[#e2e8f0] px-3 py-2">
                    <span className="text-[#4a5568] text-xs font-mono flex-1 truncate">
                      spokbee.com/vidmar/api/v1/industrial-cabinet/configure
                    </span>
                    <button className="text-[#4a5568] hover:text-[#FF9933] transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* API Docs Links */}
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="text-xs text-[#FF9933] hover:underline"
                  >
                    OpenAPI Spec
                  </a>
                  <span className="text-[#e2e8f0]">|</span>
                  <a
                    href="#"
                    className="text-xs text-[#FF9933] hover:underline"
                  >
                    llms.txt
                  </a>
                  <span className="text-[#e2e8f0]">|</span>
                  <a
                    href="#"
                    className="text-xs text-[#FF9933] hover:underline"
                  >
                    Catalog API
                  </a>
                </div>
              </div>

              {/* API Key Display (PLAN-10b: Settings) */}
              <div className="bg-white border border-[#e2e8f0] rounded-lg p-3">
                <p className="text-[#4a5568] text-xs font-medium mb-1">
                  API Key
                </p>
                <div className="flex items-center gap-2 bg-[#f8fafc] rounded px-3 py-2">
                  <span className="font-mono text-xs text-[#4a5568] flex-1 truncate">
                    spk_a7b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
                  </span>
                  <button className="text-[#4a5568] hover:text-[#FF9933] transition-colors text-xs">
                    Copy
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white border border-[#e2e8f0] rounded-lg p-3 text-center">
                  <p className="text-[#1a202c] text-lg font-bold">12</p>
                  <p className="text-[#a0aec0] text-xs">Configs</p>
                </div>
                <div className="bg-white border border-[#e2e8f0] rounded-lg p-3 text-center">
                  <p className="text-[#1a202c] text-lg font-bold">3</p>
                  <p className="text-[#a0aec0] text-xs">Quotes</p>
                </div>
                <div className="bg-white border border-[#e2e8f0] rounded-lg p-3 text-center">
                  <p className="text-[#1a202c] text-lg font-bold">47</p>
                  <p className="text-[#a0aec0] text-xs">API Calls</p>
                </div>
              </div>
            </div>

            {/* Bottom: Invite Dealers (PLAN-10b) */}
            <div className="px-4 py-3 border-t border-[#e2e8f0]">
              <p className="text-[#4a5568] text-xs font-medium mb-2">
                Share with dealers
              </p>
              <div className="flex items-center gap-2">
                <input
                  className="flex-1 border border-[#e2e8f0] rounded-lg px-3 py-2 text-sm text-[#1a202c] placeholder-[#a0aec0] focus:ring-2 focus:ring-[#FF9933]/40 focus:border-[#FF9933] outline-none"
                  placeholder="dealer@company.com"
                />
                <button className="bg-[#FF9933] hover:bg-[#F08C2A] text-white text-sm font-medium px-3 py-2 rounded-lg transition-colors whitespace-nowrap">
                  Send Link
                </button>
              </div>
            </div>
          </div>

          {/* ── Resize Handle ── */}
          <div className="w-1 bg-[#e2e8f0] hover:bg-[#FF9933]/40 cursor-col-resize transition-colors" />

          {/* ── RIGHT: Published Configurator Preview (60%) ── */}
          <div className="flex-1 flex flex-col overflow-hidden bg-[#f8fafc]">
            {/* Preview Header */}
            <div className="px-6 py-3 border-b border-[#e2e8f0] bg-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[#1a202c] text-sm font-medium">
                  Published Configurator
                </span>
                <StatusBadge status="published" />
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="text-xs text-[#FF9933] hover:underline flex items-center gap-1"
                >
                  Open live page
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Published Preview Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="max-w-2xl mx-auto">
                {/* URL-to-Theme: Brand header (PLAN-07: Brand Color Application) */}
                <div className="bg-white border border-[#e2e8f0] rounded-t-lg overflow-hidden">
                  {/* Brand Bar — themed from workspace branding */}
                  <div
                    className="h-2 w-full"
                    style={{ backgroundColor: "#FF9933" }}
                  />

                  {/* Product Header with Image */}
                  <div className="p-6">
                    <div className="flex items-start gap-6">
                      {/* Product Image (PLAN-06: ProductImage) */}
                      <div className="w-64 h-48 bg-gradient-to-br from-[#2d3748] to-[#4a5568] rounded-lg flex items-center justify-center overflow-hidden relative">
                        {/* Simulated 3D/Image view */}
                        {/* For demo: pre-staged GLB cabinet model (per Roadmap line 543) */}
                        <div className="text-center">
                          <svg
                            className="w-20 h-20 text-white/30 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={0.8}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                            />
                          </svg>
                          <p className="text-white/50 text-xs mt-2">
                            3D Preview
                          </p>
                        </div>
                        {/* Floating controls for 3D viewer */}
                        <div className="absolute bottom-2 right-2 flex gap-1">
                          <button className="w-7 h-7 rounded bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/60 hover:bg-white/20 transition-colors">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </button>
                          <button className="w-7 h-7 rounded bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/60 hover:bg-white/20 transition-colors">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {/* Workspace logo placeholder */}
                          <div className="w-5 h-5 rounded bg-[#FF9933] flex items-center justify-center">
                            <span className="text-white text-[8px] font-bold">V</span>
                          </div>
                          <span className="text-[#a0aec0] text-xs">
                            Vidmar Industries
                          </span>
                        </div>
                        <h2 className="text-[#1a202c] text-2xl font-bold mb-2">
                          Industrial Cabinet
                        </h2>
                        <p className="text-[#4a5568] text-sm mb-4">
                          Heavy-duty industrial storage cabinet with configurable
                          width, material, storage type, and finish options.
                        </p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-[#1a202c] text-3xl font-bold">
                            $1,650.00
                          </span>
                          <span className="text-[#a0aec0] text-sm">USD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Configuration Parameters */}
                <div className="bg-white border-x border-[#e2e8f0] p-6 space-y-5">
                  {/* Width */}
                  <div>
                    <label className="text-[#1a202c] text-sm font-medium block mb-2">
                      Width
                    </label>
                    <div className="flex gap-2">
                      {[
                        { label: '36"', price: "$1,200", active: false },
                        { label: '45"', price: "$1,400", active: false },
                        { label: '60"', price: "$1,650", active: true },
                      ].map((opt) => (
                        <button
                          key={opt.label}
                          className={`flex-1 py-3 rounded-lg text-sm border transition-all ${
                            opt.active
                              ? "bg-[#FF9933]/10 border-[#FF9933] text-[#FF9933] font-medium"
                              : "border-[#e2e8f0] text-[#4a5568] hover:border-[#FF9933]"
                          }`}
                        >
                          <div>{opt.label}</div>
                          <div className="text-xs mt-0.5 opacity-70">
                            {opt.price}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Material — with constraint applied */}
                  <div>
                    <label className="text-[#1a202c] text-sm font-medium block mb-2">
                      Material
                    </label>
                    <div className="space-y-2">
                      {[
                        { label: "Steel", price: "+$0", active: false, disabled: false },
                        {
                          label: "Aluminum",
                          price: "+$0",
                          active: false,
                          disabled: true,
                          tooltip: '60″ cabinets require steel or stainless frame',
                        },
                        {
                          label: "Stainless Steel",
                          price: "+$350",
                          active: true,
                          disabled: false,
                        },
                        {
                          label: "Galvanized",
                          price: "+$150",
                          active: false,
                          disabled: false,
                        },
                      ].map((opt) => (
                        <label
                          key={opt.label}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-all ${
                            opt.active
                              ? "border-[#FF9933] bg-[#FF9933]/5"
                              : opt.disabled
                              ? "border-[#e2e8f0] bg-gray-50 opacity-50 cursor-not-allowed"
                              : "border-[#e2e8f0] hover:border-[#FF9933]/50 cursor-pointer"
                          }`}
                          title={opt.tooltip || ""}
                        >
                          <div
                            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              opt.active
                                ? "border-[#FF9933]"
                                : opt.disabled
                                ? "border-[#e2e8f0]"
                                : "border-[#e2e8f0]"
                            }`}
                          >
                            {opt.active && (
                              <div className="w-2 h-2 rounded-full bg-[#FF9933]" />
                            )}
                            {opt.disabled && (
                              <div className="w-2 h-2 rounded-full bg-[#e2e8f0]" />
                            )}
                          </div>
                          <span
                            className={`text-sm flex-1 ${
                              opt.active
                                ? "text-[#1a202c] font-medium"
                                : opt.disabled
                                ? "text-[#a0aec0] line-through"
                                : "text-[#4a5568]"
                            }`}
                          >
                            {opt.label}
                          </span>
                          {opt.disabled && opt.tooltip && (
                            <span className="text-[#ef4444] text-[10px] max-w-[140px] text-right leading-tight">
                              {opt.tooltip}
                            </span>
                          )}
                          {!opt.disabled && (
                            <span className="text-[#4a5568] text-xs font-medium">
                              {opt.price}
                            </span>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Storage Type */}
                  <div>
                    <label className="text-[#1a202c] text-sm font-medium block mb-2">
                      Storage Type
                    </label>
                    <div className="flex gap-2">
                      {[
                        { label: "Drawers", active: false, disabled: false },
                        { label: "Shelves", active: true, disabled: false },
                        { label: "Mixed", active: false, disabled: false },
                      ].map((opt) => (
                        <button
                          key={opt.label}
                          className={`flex-1 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                            opt.active
                              ? "bg-[#FF9933]/10 border-[#FF9933] text-[#FF9933]"
                              : opt.disabled
                              ? "border-[#e2e8f0] text-[#a0aec0] bg-gray-50 cursor-not-allowed"
                              : "border-[#e2e8f0] text-[#4a5568] hover:border-[#FF9933]"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Finish Color — Color Swatches (PLAN-06: ColorSwatches) */}
                  <div>
                    <label className="text-[#1a202c] text-sm font-medium block mb-2">
                      Finish Color
                    </label>
                    <div className="flex gap-3">
                      {[
                        { color: "#1a1a1a", name: "Black", active: false },
                        { color: "#f5f5f0", name: "White", active: false },
                        { color: "#6b7280", name: "Gray", active: false },
                        { color: "#1e3a5f", name: "Navy", active: true },
                        { color: "#7c2d12", name: "Rust", active: false },
                      ].map((swatch) => (
                        <button
                          key={swatch.name}
                          className="flex flex-col items-center gap-1.5"
                          title={swatch.name}
                        >
                          <div
                            className={`w-9 h-9 rounded-full border-2 transition-all ${
                              swatch.active
                                ? "border-[#FF9933] ring-2 ring-[#FF9933]/30 scale-110"
                                : "border-[#e2e8f0] hover:border-[#FF9933]/50"
                            }`}
                            style={{ backgroundColor: swatch.color }}
                          />
                          <span
                            className={`text-[10px] ${
                              swatch.active
                                ? "text-[#FF9933] font-medium"
                                : "text-[#a0aec0]"
                            }`}
                          >
                            {swatch.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Lock Type — Toggle (PLAN-04: ParamToggle) */}
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-[#1a202c] text-sm font-medium block">
                        Keyed Lock
                      </label>
                      <p className="text-[#a0aec0] text-xs mt-0.5">
                        Add a keyed lock to all drawers/shelves (+$85)
                      </p>
                    </div>
                    {/* Toggle Switch */}
                    <button className="w-11 h-6 rounded-full bg-[#FF9933] relative transition-colors">
                      <span className="w-5 h-5 rounded-full bg-white shadow absolute top-0.5 right-0.5 transition-transform" />
                    </button>
                  </div>

                  {/* Casters — Toggle */}
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-[#1a202c] text-sm font-medium block">
                        Heavy-Duty Casters
                      </label>
                      <p className="text-[#a0aec0] text-xs mt-0.5">
                        Add locking casters for mobility (+$120)
                      </p>
                    </div>
                    <button className="w-11 h-6 rounded-full bg-[#e2e8f0] relative transition-colors">
                      <span className="w-5 h-5 rounded-full bg-white shadow absolute top-0.5 left-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Price + BOM Overlay (PLAN-04: PriceDisplay) */}
                <div className="bg-white border border-[#e2e8f0] rounded-b-lg p-6">
                  {/* Price Summary */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[#4a5568] text-sm">
                        Your Configuration
                      </span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-[#1a202c] text-3xl font-bold">
                          $2,305.00
                        </span>
                        <span className="text-[#a0aec0] text-sm">USD</span>
                      </div>
                    </div>
                    <button className="bg-[#FF9933] hover:bg-[#F08C2A] text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm">
                      Request Quote
                    </button>
                  </div>

                  {/* BOM Breakdown */}
                  <div className="border-t border-[#e2e8f0] pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#4a5568]">Base cabinet</span>
                      <span className="text-[#1a202c]">$1,200.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#4a5568]">
                        Width upgrade: 60″
                      </span>
                      <span className="text-[#1a202c]">+$450.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#4a5568]">
                        Material: Stainless Steel
                      </span>
                      <span className="text-[#1a202c]">+$350.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#4a5568]">Finish: Navy</span>
                      <span className="text-[#a0aec0]">+$0.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#4a5568]">Keyed Lock</span>
                      <span className="text-[#1a202c]">+$85.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#4a5568]">Shelving unit</span>
                      <span className="text-[#a0aec0]">Included</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#4a5568]">Casters</span>
                      <span className="text-[#a0aec0]">Not selected</span>
                    </div>
                    <div className="flex justify-between text-sm font-semibold pt-2 border-t border-[#e2e8f0]">
                      <span className="text-[#1a202c]">Total</span>
                      <span className="text-[#1a202c]">$2,305.00</span>
                    </div>
                  </div>

                  {/* Shareable Config URL (PLAN-07) */}
                  <div className="mt-4 pt-3 border-t border-[#e2e8f0]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#a0aec0] text-xs">
                        Share this configuration:
                      </span>
                      <span className="text-[#FF9933] text-xs font-mono truncate flex-1">
                        ?config=eyJ3aWR0aCI6IjYwIiwi...
                      </span>
                      <button className="text-xs text-[#4a5568] hover:text-[#FF9933] transition-colors">
                        Copy
                      </button>
                    </div>
                  </div>
                </div>

                {/* Powered by Spokbee (PLAN-07) */}
                <div className="text-center py-4">
                  <a
                    href="#"
                    className="text-[#a0aec0] text-xs hover:text-[#FF9933] transition-colors"
                  >
                    Powered by <span className="font-medium">Spokbee</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// HELPER COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════════

function ChatBubble({ role, content }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className="flex items-start gap-2 max-w-[85%]">
        {!isUser && (
          <div className="w-6 h-6 rounded-full bg-[#FF9933] flex-shrink-0 flex items-center justify-center mt-0.5">
            <span className="text-white text-[10px] font-bold">S</span>
          </div>
        )}
        <div
          className={`rounded-lg px-3 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
            isUser
              ? "bg-[#FF9933] text-white rounded-br-none"
              : "bg-[#f8fafc] border border-[#e2e8f0] text-[#1a202c] rounded-bl-none"
          }`}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

function ToolResult({ name, detail }) {
  return (
    <div className="flex justify-start pl-8">
      <div className="flex items-center gap-2 bg-[#10b981]/5 border border-[#10b981]/20 rounded-lg px-3 py-1.5 text-xs">
        <svg
          className="w-3.5 h-3.5 text-[#10b981] flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="text-[#10b981] font-medium">{name}</span>
        <span className="text-[#4a5568]">{detail}</span>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════════════════════

export default function SpokbeeFigmaDesigns() {
  const [frame, setFrame] = useState(1);

  return (
    <div>
      {/* Frame Selector (for Figma review only) */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#1a202c] text-white flex items-center justify-center gap-4 py-2 text-sm">
        <span className="text-[#a0aec0] text-xs mr-2">SPOKBEE 4.0 DESIGN FRAMES</span>
        {[
          { id: 1, label: "Zero State" },
          { id: 2, label: "Generation State" },
          { id: 3, label: "Published State" },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFrame(f.id)}
            className={`px-3 py-1 rounded text-xs transition-colors ${
              frame === f.id
                ? "bg-[#FF9933] text-white"
                : "bg-white/10 text-white/60 hover:bg-white/20"
            }`}
          >
            Frame {f.id}: {f.label}
          </button>
        ))}
      </div>
      <div className="pt-10">
        {frame === 1 && <Frame1_ZeroState />}
        {frame === 2 && <Frame2_GenerationState />}
        {frame === 3 && <Frame3_PublishedState />}
      </div>
    </div>
  );
}
