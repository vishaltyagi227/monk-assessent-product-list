import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Button } from "../Button";

const productNameHolderVariants = cva(
  "flex items-center border-[1px] border-black/10 justify-between shadow py-1 px-4 h-[40px]",
  {
    variants: {
      variant: {
        default: "rounded-[0px]",
        rounded: "rounded-[40px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type EditProduct =
  | { showEditIcon: boolean; onEditIconClick: () => void }
  | { showEditIcon?: never; onEditIconClick?: never };

export interface ProductNameHolderProps
  extends VariantProps<typeof productNameHolderVariants> {
  className?: string;
  name: string;
}

const EditIconSvg = (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.509 0.643184L12.4018 0.750381L15.4569 3.80551L15.5641 3.69831C16.4217 2.84073 16.4217 1.50076 15.5641 0.643184C14.7066 -0.214395 13.3666 -0.214395 12.509 0.643184Z"
      fill="black"
      fillOpacity="0.2"
    />
    <path
      d="M1.62312 11.5273L0.229555 15.4936C0.175956 15.8152 0.443949 16.0832 0.711943 15.976L4.62464 14.5824L14.4332 4.77387L11.3781 1.71875L1.62312 11.5273Z"
      fill="black"
      fillOpacity="0.2"
    />
  </svg>
);

const ProductNameHolder = ({
  className,
  variant,
  name,
  showEditIcon = false,
  onEditIconClick,
}: ProductNameHolderProps & EditProduct) => {
  return (
    <div className={cn(productNameHolderVariants({ variant, className }))}>
      <p
        className="flex items-center text-sm w-full h-full truncate"
        title={name}
      >
        {name}
      </p>
      {showEditIcon && (
        <Button
          title="Edit"
          variant="ghost"
          size="sm"
          className="ml-2"
          onClick={onEditIconClick}
        >
          {EditIconSvg}
        </Button>
      )}
    </div>
  );
};
ProductNameHolder.displayName = "ProductNameHolder";

export { ProductNameHolder };
