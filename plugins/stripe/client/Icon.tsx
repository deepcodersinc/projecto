import * as React from "react";

export default function StripeIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M13.5 10.2c0-.8.7-1.1 1.8-1.1 1.6 0 3.7.5 5.3 1.4V5.6c-1.7-.7-3.5-1-5.3-1-4.3 0-7.2 2.3-7.2 6.1 0 5.9 8.1 5 8.1 7.5 0 .9-.8 1.2-2 1.2-1.8 0-4.1-.7-5.9-1.8V23c1.9.8 3.9 1.2 5.9 1.2 4.4 0 7.5-2.2 7.5-6.1 0-6.3-8.2-5.3-8.2-7.9z"
      />
    </svg>
  );
}
