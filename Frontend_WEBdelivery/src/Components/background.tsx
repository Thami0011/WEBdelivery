
import React, { ReactNode } from "react";


interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
        
        </div>
        {children}
      </div>
    </main>
  );
};
