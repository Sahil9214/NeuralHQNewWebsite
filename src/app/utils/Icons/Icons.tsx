import Image from "next/image";

export const ModelTraining = [
  ({ className }: { className?: string }) => (
    <Image
      src="/assets/Images/hsbc_symbol.png.png"
      height={84}
      width={84}
      className={className}
      style={{ visibility: "hidden" }}
      alt="hsbc_symbol"
    />
  ),
  // JAX Logo
  ({ className }: { className?: string }) => (
    <Image
      src="/assets/Images/hsbc_symbol.png.png"
      height={84}
      width={84}
      className={className}
      alt="hsbc_symbol"
    />
  ),
  // Circular Arrow
  ({ className }: { className?: string }) => (
    <Image
      src="/assets/Images/2.png"
      height={84}
      width={84}
      className={className}
      alt="hsbc_symbol"
    />
  ),
  // Smiley
  ({ className }: { className?: string }) => (
    <Image
      src="/assets/Images/3.png"
      height={84}
      width={84}
      className={className}
      alt="hsbc_symbol"
    />
  ),
  // Hexagon
  ({ className }: { className?: string }) => (
    <Image
      src="/assets/Images/4.png"
      height={84}
      width={84}
      className={className}
      alt="hsbc_symbol"
    />
  ),
  ({ className }: { className?: string }) => (
    <Image
      src="/assets/Images/4.png"
      height={84}
      width={84}
      className={className}
      style={{ visibility: "hidden" }}
      alt="hsbc_symbol"
    />
  ),
];

export const CloudPlatforms = [
  // AWS
  ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 20h24M20 8v24" stroke="#FF9900" strokeWidth="2" />
      <path d="M10 10h20v20H10z" stroke="#FF9900" strokeWidth="2" />
    </svg>
  ),
  // Lambda
  ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 10l10 20 10-20" stroke="#000" strokeWidth="2" />
    </svg>
  ),
  // Azure
  ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 15h12l-6 10h18" stroke="#0078D4" strokeWidth="2" />
    </svg>
  ),
  // Google Cloud
  ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="15" fill="#4285F4" />
      <path d="M15 20h10M20 15v10" stroke="white" strokeWidth="2" />
    </svg>
  ),
  ({ className }: { className?: string }) => (
    <svg
      style={{ visibility: "hidden" }}
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="15" fill="#4285F4" />
      <path d="M15 20h10M20 15v10" stroke="white" strokeWidth="2" />
    </svg>
  ),
];

export const ModelServing = [
  ({ className }: { className?: string }) => (
    <svg
      style={{ visibility: "hidden" }}
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="10" width="20" height="20" fill="#76B900" />
      <path d="M15 20h10M20 15v10" stroke="white" strokeWidth="2" />
    </svg>
  ),
  // NVIDIA
  ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="10" width="20" height="20" fill="#76B900" />
      <path d="M15 20h10M20 15v10" stroke="white" strokeWidth="2" />
    </svg>
  ),
  // Graph
  ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="3" fill="#000" />
      <path d="M10 30l20-20M10 10l20 20" stroke="#000" strokeWidth="2" />
    </svg>
  ),
  // LLM
  ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text x="10" y="25" fill="#000" fontSize="12">
        LLM
      </text>
    </svg>
  ),
  // Kubernetes
  ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 5l13 7.5v15L20 35l-13-7.5v-15L20 5z"
        stroke="#326CE5"
        strokeWidth="2"
      />
      <circle cx="20" cy="20" r="5" stroke="#326CE5" strokeWidth="2" />
    </svg>
  ),
  ({ className }: { className?: string }) => (
    <svg
      style={{ visibility: "hidden" }}
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 5l13 7.5v15L20 35l-13-7.5v-15L20 5z"
        stroke="#326CE5"
        strokeWidth="2"
      />
      <circle cx="20" cy="20" r="5" stroke="#326CE5" strokeWidth="2" />
    </svg>
  ),
];

export const LargeLanguageModels = [
  // Star
  ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 5l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10l3-10z"
        fill="#7C3AED"
      />
    </svg>
  ),
  // AI
  ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text x="12" y="25" fill="#000" fontSize="14">
        AI
      </text>
    </svg>
  ),
  // Meta
  ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20s5-10 10-10 10 10 10 10-5 10-10 10-10-10-10-10z"
        stroke="#0668E1"
        strokeWidth="2"
      />
      <circle cx="20" cy="20" r="3" fill="#0668E1" />
    </svg>
  ),
  // Circle
  ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="15" stroke="#000" strokeWidth="2" />
      <path d="M15 20s2.5-5 5-5 5 5 5 5-2.5 5-5 5-5-5-5-5z" fill="#000" />
    </svg>
  ),
  ({ className }: { className?: string }) => (
    <svg
      style={{ visibility: "hidden" }}
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="15" stroke="#000" strokeWidth="2" />
      <path d="M15 20s2.5-5 5-5 5 5 5 5-2.5 5-5 5-5-5-5-5z" fill="#000" />
    </svg>
  ),
];
