"use client";

import React from "react";
import { motion } from "motion/react";
import { Folder, HeartHandshakeIcon, SparklesIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LimsWorkflowProps {
  className?: string;
  circleText?: string;
  badgeTexts?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  buttonTexts?: {
    first: string;
    second: string;
  };
  title?: string;
  lightColor?: string;
}

const LimsWorkflow = ({
  className,
  circleText,
  badgeTexts,
  buttonTexts,
  title,
  lightColor,
}: LimsWorkflowProps) => {
  return (
    <div
      className={cn(
        "relative flex h-[450px] w-full max-w-[650px] flex-col items-center",
        className
      )}
    >
      {/* SVG Paths  */}
      <svg
        className="h-full sm:w-full text-muted"
        width="100%"
        height="100%"
        viewBox="0 0 280 80"
      >
        <g
          stroke="currentColor"
          fill="none"
          strokeWidth="0.4"
          strokeDasharray="100 100"
          pathLength="100"
        >
          <path d="M 40 10 v 15 q 0 5 5 5 h 50 q 5 0 5 5 v 35" />
          <path d="M 105 10 v 12 q 0 5 5 5 h 25 q 5 0 5 5 v 38" />
          <path d="M 175 10 v 12 q 0 5 -5 5 h -25 q -5 0 -5 5 v 38" />
          <path d="M 240 10 v 15 q 0 5 -5 5 h -50 q -5 0 -5 5 v 35" />
          {/* Animation For Path Starting */}
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        </g>
        {/* Blue Lights */}
        <g mask="url(#lims-mask-1)">
          <circle
            className="lims-flow lims-light-1"
            cx="0"
            cy="0"
            r="12"
            fill="url(#lims-grad)"
          />
        </g>
        <g mask="url(#lims-mask-2)">
          <circle
            className="lims-flow lims-light-2"
            cx="0"
            cy="0"
            r="12"
            fill="url(#lims-grad)"
          />
        </g>
        <g mask="url(#lims-mask-3)">
          <circle
            className="lims-flow lims-light-3"
            cx="0"
            cy="0"
            r="12"
            fill="url(#lims-grad)"
          />
        </g>
        <g mask="url(#lims-mask-4)">
          <circle
            className="lims-flow lims-light-4"
            cx="0"
            cy="0"
            r="12"
            fill="url(#lims-grad)"
          />
        </g>
        {/* Buttons */}
        <g stroke="currentColor" fill="none" strokeWidth="0.4">
          {/* First Button */}
          <g>
            <rect
              fill="#18181B"
              x="10"
              y="5"
              width="60"
              height="12"
              rx="6"
            ></rect>
            <DatabaseIcon x="15" y="8.5"></DatabaseIcon>
            <text
              x="24"
              y="12.5"
              fill="white"
              stroke="none"
              fontSize="4.5"
              fontWeight="500"
            >
              {badgeTexts?.first || "Sample Intake"}
            </text>
          </g>
          {/* Second Button */}
          <g>
            <rect
              fill="#18181B"
              x="75"
              y="5"
              width="65"
              height="12"
              rx="6"
            ></rect>
            <DatabaseIcon x="80" y="8.5"></DatabaseIcon>
            <text
              x="89"
              y="12.5"
              fill="white"
              stroke="none"
              fontSize="4.5"
              fontWeight="500"
            >
              {badgeTexts?.second || "Data Processing"}
            </text>
          </g>
          {/* Third Button */}
          <g>
            <rect
              fill="#18181B"
              x="145"
              y="5"
              width="62"
              height="12"
              rx="6"
            ></rect>
            <DatabaseIcon x="150" y="8.5"></DatabaseIcon>
            <text
              x="159"
              y="12.5"
              fill="white"
              stroke="none"
              fontSize="4.5"
              fontWeight="500"
            >
              {badgeTexts?.third || "Quality Control"}
            </text>
          </g>
          {/* Fourth Button */}
          <g>
            <rect
              fill="#18181B"
              x="212"
              y="5"
              width="58"
              height="12"
              rx="6"
            ></rect>
            <DatabaseIcon x="218" y="8.5"></DatabaseIcon>
            <text
              x="226"
              y="12.5"
              fill="white"
              stroke="none"
              fontSize="4.5"
              fontWeight="500"
            >
              {badgeTexts?.fourth || "Final Report"}
            </text>
          </g>
        </g>
        <defs>
          {/* 1 - Sample Intake */}
          <mask id="lims-mask-1">
            <path
              d="M 40 10 v 15 q 0 5 5 5 h 50 q 5 0 5 5 v 35"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 2 - Data Processing */}
          <mask id="lims-mask-2">
            <path
              d="M 105 10 v 12 q 0 5 5 5 h 25 q 5 0 5 5 v 38"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 3 - Quality Control */}
          <mask id="lims-mask-3">
            <path
              d="M 175 10 v 12 q 0 5 -5 5 h -25 q -5 0 -5 5 v 38"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 4 - Final Report */}
          <mask id="lims-mask-4">
            <path
              d="M 240 10 v 15 q 0 5 -5 5 h -50 q -5 0 -5 5 v 35"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* LIMS Gradient */}
          <radialGradient id="lims-grad" fx="1">
            <stop offset="0%" stopColor={lightColor || "#3ee0cf"} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
      {/* Main Box */}
      <div className="absolute bottom-10 flex w-full flex-col items-center">
        {/* bottom shadow */}
        <div className="absolute -bottom-4 h-[100px] w-[62%] rounded-lg bg-accent/30" />
        {/* box title */}
        <div className="absolute -top-3 z-20 flex items-center justify-center rounded-lg border bg-[#101112] px-2 py-1 sm:-top-4 sm:py-1.5">
          <SparklesIcon className="size-3" />
          <span className="ml-2 text-[10px]">
            {title ? title : "Laboratory data flows seamlessly through our LIMS"}
          </span>
        </div>
        {/* box outter circle */}
        <div className="absolute -bottom-8 z-30 grid h-[60px] w-[60px] place-items-center rounded-full border-t bg-[#141516] font-semibold text-xs">
          {circleText ? circleText : "LIMS"}
        </div>
        {/* box content */}
        <div className="relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background shadow-md">
          {/* Badges */}
          <div className="absolute bottom-8 left-12 z-10 h-7 rounded-full bg-[#101112] px-3 text-xs border flex items-center gap-2 ">
            <HeartHandshakeIcon className="size-4" />
            <span>{buttonTexts?.first || "Celleome"}</span>
          </div>
          <div className="absolute right-16 z-10 hidden h-7 rounded-full bg-[#101112] px-3 text-xs sm:flex border items-center gap-2">
            <Folder className="size-4" />
            <span>{buttonTexts?.second || "v3_lims"}</span>
          </div>
          {/* Circles */}
          <motion.div
            className="absolute -bottom-14 h-[100px] w-[100px] rounded-full border-t bg-accent/5"
            animate={{
              scale: [0.98, 1.02, 0.98, 1, 1, 1, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 h-[145px] w-[145px] rounded-full border-t bg-accent/5"
            animate={{
              scale: [1, 1, 1, 0.98, 1.02, 0.98, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-[100px] h-[190px] w-[190px] rounded-full border-t bg-accent/5"
            animate={{
              scale: [1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-[120px] h-[235px] w-[235px] rounded-full border-t bg-accent/5"
            animate={{
              scale: [1, 1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

export default LimsWorkflow;

const DatabaseIcon = ({ x = "0", y = "0" }: { x: string; y: string }) => {
  return (
    <svg
      x={x}
      y={y}
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
};