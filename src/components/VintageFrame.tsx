export default function VintageFrame() {
  return (
    <div className="absolute inset-3 md:inset-4 pointer-events-none z-20 hidden sm:block">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 700"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Frame Path - Inward Concave Arc (Radius 16) */}
        <path
          d="M 22 6 
             L 978 6 
             A 16 16 0 0 0 994 22 
             L 994 678 
             A 16 16 0 0 0 978 694 
             L 22 694 
             A 16 16 0 0 0 6 678 
             L 6 22 
             A 16 16 0 0 0 22 6 
             Z"
          fill="none"
          stroke="rgba(75, 58, 45, 0.82)"
          strokeWidth="1.4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Inner Frame Path - Slightly Larger Inward Concave Arc (Radius 15, Inset 26) */}
        <path
          d="M 26 11 
             L 974 11 
             A 15 15 0 0 0 989 26 
             L 989 674 
             A 15 15 0 0 0 974 689 
             L 26 689 
             A 15 15 0 0 0 11 674 
             L 11 26 
             A 15 15 0 0 0 26 11 
             Z"
          fill="none"
          stroke="rgba(75, 58, 45, 0.82)"
          strokeWidth="1.0"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
