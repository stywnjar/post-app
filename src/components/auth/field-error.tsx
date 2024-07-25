import { FieldError as Fe } from "react-hook-form";

export function FieldError({ error }: { error: Fe | undefined }) {
  return error ? <p className="text-red-600 mt-1">{error.message}</p> : null;
}
