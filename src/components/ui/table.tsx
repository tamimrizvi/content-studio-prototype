import { cx } from "@/lib/cx";

export function Table({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="w-full overflow-x-auto rounded-5 border border-border-primary bg-surface-background">
      <table className={cx("w-full border-collapse text-left", className)} {...props} />
    </div>
  );
}

export function TableHead({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={cx("bg-surface-primary", className)} {...props} />;
}

export function TableBody({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cx("[&>tr:last-child]:border-b-0", className)} {...props} />;
}

export function TableRow({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={cx("border-b border-border-primary transition-colors duration-150 [tbody>&]:hover:bg-fill-primary", className)} {...props} />;
}

export function TableHeaderCell({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return <th scope="col" className={cx("h-10 px-4 type-label-sm font-semibold whitespace-nowrap text-content-secondary", className)} {...props} />;
}

export function TableCell({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={cx("h-13 px-4 type-body-sm text-content-primary", className)} {...props} />;
}
