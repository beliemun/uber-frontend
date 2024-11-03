import { RadioOption } from "components/atoms";
import { UserRole } from "gql/graphql";

export const roleOptions: RadioOption[] = [
  {
    label: UserRole.Client,
    value: UserRole.Client,
  },
  {
    label: UserRole.Owner,
    value: UserRole.Owner,
  },
  {
    label: UserRole.Driver,
    value: UserRole.Driver,
  },
];
